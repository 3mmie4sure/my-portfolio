window.onload =()=>{

    const nav_trigger = document.getElementById('navtrigger');

    const nav_closer = document.getElementById('close_btn');

    const responsiveNav = document.getElementById('responsiveNav');

    // Code to Open nav On Trigger
    nav_trigger.addEventListener('click',()=> 
    {
        responsiveNav.classList.replace('hidden', 'block');
    });


    // Code to close nav on trigger
    nav_closer.addEventListener('click',()=>
    {
        responsiveNav.classList.replace('block', 'hidden');
    });


}

