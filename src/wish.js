document.addEventListener("DOMContentLoaded", function() {
    var slider_img = document.querySelector('.my-wish__image-slide');
    var slider_text = document.querySelector('.my-wish__text');
    var nextPageButton = document.getElementById('next-page-button');
    
    var images = [
        '../images/1.png',
        '../images/2.png',
        '../images/3.jpg',
        '../images/4.jpg',
        '../images/5.png',
        '../images/6.png',
        '../images/7.png',
        '../images/8.gif',
        '../images/9.gif',
        '../images/10.png',
        '../images/11.gif',
        '../images/12.png',
        '../images/13.gif',
        '../images/14.gif',
        '../images/15.gif',
        '../images/16.png',
        '../images/17.gif',
        '../images/18.png',
        '../images/19.gif',
      
    ];

    var texts = [
        'Hi',
        'Today is your birthday!',
        'You are a year older now 🥺',
        'Cheers to another fabulous year.',
        'More of adventures and laughter.',
        'May this year bring you closer to your dreams.',
        'May your birthday be a reflection of how amazing you are!!',
        'Sending you tons of birthday hugs and smiles.',
        'Cheers to you!',
        'You deserve all the love today and always <3',
        'Once again,',
        'HAPPY BIRTHDAY',
        'Congratulations on successfully making it through another year!',
        'Have a great end.',
        'Wishing you many more candles to blow.',
        '𓆝 𓆟 𓆞 𓆝 𓆟',
        '祝你生日快乐!',
        'Thank you for your time 😽',
        'Bye',
       
    ];
    
    var i = 0;
    
    function prev(){
        if(i > 0) {  // Only decrease index if it's greater than 0
            i--;
            setContent();  
        }           
    }
    
    function next(){
        if(i >= images.length-1) {
            nextPage.style.display = 'flex'; // Show the next page section
            wishes.style.display = 'none';   // Hide image slides
            wishes2.style.display = 'none';  // Hide image button
        }
        i++;
        setContent();             
    }
    
    function setContent(){
        slider_img.setAttribute('src', images[i]);
        slider_text.textContent = texts[i];
    }
    
    // Attach event listeners to buttons
    document.querySelector('.slider__button-prev').addEventListener('click', prev);
    document.querySelector('.slider__button-next').addEventListener('click', next);
    
    // Set initial content
    setContent();
});
