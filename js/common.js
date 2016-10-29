(function slides(){

    'use strict';

    var element = document.querySelectorAll("[data-slides='js-slides'] .slides__item"),
        previousButton = document.querySelector("[data-slides='js-slides'] [data-slides='js-previous']"),
        nextButton = document.querySelector("[data-slides='js-slides'] [data-slides='js-next']"),
        pauseButton = document.querySelector("[data-slides='js-slides'] [data-slides='js-pause']"),
        slideInterval = setInterval(nextSlide, 5000),
        playing = true,
        currentSlide = 0;

        pauseButton.onclick = function(){
            if(playing){
                pauseSlide();
            }else{
                playSlide();
                }
        };

        nextButton.onclick = function() {
            pauseSlide();
            nextSlide();
        };

        previousButton.onclick = function() {
            pauseSlide();
            previousSlide();
        };
   
        // console.log(pauseButton);

        function nextSlide() {
            goToSlide(currentSlide+1);
        }

        function previousSlide() {
            goToSlide(currentSlide-1);
        }

            function goToSlide(n) {
                element[currentSlide].className = 'slides__item';
                currentSlide = (n+element.length) % element.length;
                element[currentSlide].className = 'slides__item + slides__item_visible';
            }

        function pauseSlide(){
            pauseButton.innerHTML = 'Play';
            playing = false;
            clearInterval(slideInterval);
        }

        function  playSlide(){
            pauseButton.innerHTML = 'Pause';
            playing = true;
            slideInterval = setInterval(nextSlide, 5000);           
        }

}());