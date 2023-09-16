const navLinks = document.querySelectorAll('a[href*="#"]');
console.log(navLinks);

navLinks.forEach((el)=>{
    console.log(el);
    el.addEventListener('click',(e)=>{
        console.log(e);
        e.preventDefault();
        // update active nav item
        let remover = document.querySelector('.active');
        if(remover != null){
            remover.classList.remove('active');
        }
        el.classList.add('active');
        console.log(el.hash);
        let stopPoint = document.querySelector(el.hash).offsetTop;
        let startPoint = document.documentElement.scrollTop;
        console.log(stopPoint);
        console.log(startPoint);
        moveMe(startPoint,stopPoint);
    })
})

function moveMe(startPoint,stopPoint){
    const speed = 10;
    const pos = stopPoint > startPoint ? 1 : -1;
    let move = Math.floor((stopPoint - startPoint)*pos/speed);
    const addIt = pos * speed;
    console.log(move,addIt);
    let framed = setInterval(frame,1);
    function frame(){
        if(move<0){
            clearInterval(framed);
        }
        else {
            move--;
            startPoint = startPoint + addIt;
            document.documentElement.scrollTop = startPoint;
            console.log(startPoint);
        }
    }
}