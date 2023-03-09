const api_access_token = '40c94635c4d4becea2b9f667fbf3e184e1c0e0858a2f32baeafda4ff9b00a97e';
const url = 'https://api.dribbble.com/v2/user/shots?access_token='+api_access_token;
fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data);
    console.log(data.length)
    data.forEach(data => {

        const Img = document.createElement('img'); 
        Img.setAttribute('src', data.images.normal);
        Img.setAttribute('class', 'w-full');
        Img.classList.add('rounded-lg', 'mb-4');


        // Creating Texts
        const text_title = document.createElement('a');
        text_title.setAttribute('class', 'text-lg');
        text_title.setAttribute('href', data.html_url);
        text_title.setAttribute('target', '_blank');
        text_title.classList.add('text_font');

        text_title.innerHTML = data.title;

        // Create Card 

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        document.querySelector('#designs').appendChild(card);
        card.classList.add('mt-4','w-full','transition','hover:-translate-y-6');  //'animate__animated', 'animate__fadeInUp'

        // Append image to card
        card.appendChild(Img);
        card.appendChild(text_title);

        
    });
});
