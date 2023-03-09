const nav_trigger = document.querySelector('#navtrigger');

const nav_closer = document.querySelector('#close_btn');

const responsiveNav = document.querySelector('#responsiveNav');

// Code to Open nav On Trigger
nav_trigger.addEventListener('click', ()=> 
{
    responsiveNav.classList.replace('hidden', 'block');
});


// Code to close nav on trigger
nav_closer.addEventListener('click',()=>
{
    responsiveNav.classList.replace('block', 'hidden');
});

