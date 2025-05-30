/*
* Goal: Switch between three images via a button above the image carousel.
*/

// ensures all elements are loaded and therefore able to be accessed
document.addEventListener('DOMContentLoaded', () => {
    // get image to be switched out
    const currImage = document.getElementById("photoCarousel");

    // counter to keep track of which image is being displayed
    let imageNum = 0;

    /*
    * Goal: Switch which image is being displayed.
    * Input: NULL
    * Output: NULL
    */
    function switchImage() {
        if (imageNum === 0) {
            currImage.src = 'ballroomMe.JPG';
            imageNum = 1;
        } else if (imageNum === 1) {
            currImage.src = 'londonMe.jpg';
            imageNum = 2;
        } else {
            currImage.src = 'camdenMe.png';
            imageNum = 0;
        }
    }

    // get button that controls the switching
    const imageSwitcher = document.getElementById("imageSwitcher");

    // wait for button to be clicked and when it is, call function to switch image
    imageSwitcher.addEventListener("click", () => switchImage());
});