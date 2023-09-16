const navLinks = document.querySelectorAll('a[href*="#"]');
console.log(navLinks);

navLinks.forEach((el)=>{
    console.log(el);
    el.addEventListener('click',(e)=>{
        console.log(e);
        //e.preventDefault();
        let remover = document.querySelector('.active');
        if(remover != null){
            remover.classList.remove('active');
        }
        el.classList.add('active');
    })
})