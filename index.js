const htmlButton = document.querySelector('.playButton');
console.log(htmlButton);

if(screen.width < 640 || screen.height < 480){
    htmlButton.classList.add('mobile-button');
};