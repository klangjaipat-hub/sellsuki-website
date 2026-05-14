<template>
    <div class="container">
        <div class="slider">
            <div class="slide" data-slide="1" style="background-color: green"></div>
            <div class="slide" data-slide="2" style="background-color: red"></div>
            <div class="slide" data-slide="3" style="background-color: orange"></div>
            <div class="slide slide--active" data-slide="4" style="background-color: blue"></div>
            <div class="slide" data-slide="5" style="background-color: violet"></div>
            <div class="slide" data-slide="5" style="background-color: black"></div>
            <div class="slide" data-slide="5" style="background-color: pink"></div>
            <div class="slide" data-slide="5" style="background-color: teal"></div>
        </div>
        <div class="controls">
            <div id="back">Back</div>
            <div id="forvard">Forvard</div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
      mounted() {
        document.addEventListener('DOMContentLoaded', function() {
          renderSlider('.slider');
        });
    
        const nextSlide = () => {  
          let activeSlide = document.querySelector('.slide--active');
          let nextSlide = activeSlide.nextElementSibling;
          if (nextSlide) {
            activeSlide.classList.remove('slide--active');
            nextSlide.classList.remove('next');
            nextSlide.classList.add('slide--active');
            renderSlides();
            renderBtns();
          }
          
        }
    
        const renderBtns = () => {
          let nextBtn = document.querySelector('#forvard');
          let prevBtn = document.querySelector('#back'); 
          
          let activeSlide = document.querySelector('.slide--active');
          let prevSlide = activeSlide.previousElementSibling;
          !prevSlide ? prevBtn.classList.add('disabled')
                    : prevBtn.classList.remove('disabled');
          
          let nextSlide = activeSlide.nextElementSibling;
          !nextSlide ? nextBtn.classList.add('disabled')
                    : nextBtn.classList.remove('disabled');
        }
    
        const prevSlide = () => {  
          let activeSlide = document.querySelector('.slide--active');
          let prevSlide = activeSlide.previousElementSibling;
          if (prevSlide) {
            activeSlide.classList.remove('slide--active');
            prevSlide.classList.remove('prev');
            prevSlide.classList.add('slide--active');
            renderSlides();
            renderBtns();
          }  
        }
    
        const renderSlides = () => {
            let slides = document.querySelectorAll('.slide');
            if (!slides) {
              return;
            }
            let activeSlide = document.querySelector('.slide--active');
            if (!activeSlide) {      
              activeSlide = slides.item(0);
              activeSlide.classList.add('slide--active');
            }
            [].forEach.call(slides, function(slide) {
              slide.classList.remove('prev', 'next')
            });
          
            let prevSlide = activeSlide.previousElementSibling;
            prevSlide && prevSlide.classList.add('prev');
          
            let nextSlide = activeSlide.nextElementSibling;
            nextSlide && nextSlide.classList.add('next');
            
        }
    
        const renderSlider = (element) => {
          const slider = document.querySelector(element);
          if (slider) {
            let nextButton = document.querySelector("#forvard");
            nextButton.addEventListener('click', function() {
              nextSlide();
            })
    
            let prevButton = document.querySelector("#back");
            prevButton.addEventListener('click', function() {
              prevSlide();
            })
            renderSlides();
          }
        }
      },
    };
    </script>
    
    <style scoped>
    .container {
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin: 50px auto 0;
      width: 500px;
      height: 300px; }
    
    .controls {
      display: flex;
      justify-content: center; }
      .controls div {
        padding: 12px 14px;
        cursor: pointer;
        border: 1px solid #000;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        margin: 0 5px;
        border-radius: 10px; }
        .controls div.disabled {
          opacity: 0;
          cursor: default; }
    
    .slider {
      position: relative;
      width: 100%;
      height: 100%; }
    
    .slide {
      position: absolute;
      top: 25%;
      left: 10%;
      width: 80%;
      height: 50%;
      background-color: red;
      border: 1px solid #fff;
      border-radius: 15px;
      opacity: 0;
      transition: all 0.7s ease-out; }
      .slide--active {
        opacity: 1;
        z-index: 9; }
    
    .prev,
    .next {
      opacity: .3; }
    
    .prev {
      transform: translate(0, -30%) scale(0.8); }
    
    .next {
      transform: translate(0, 30%) scale(0.8); }
    </style>
    