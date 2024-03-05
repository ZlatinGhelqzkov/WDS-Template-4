document.addEventListener('DOMContentLoaded', function() {
    var swiperWrapper = document.getElementById('intro-swiper-wrapper');
  
    // Loop through the JSON data
    jsonData.forEach(function(data) {
      // Create a new swiper slide element
      var swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide', 'card');
  
      // Create and append the image element
      var img = document.createElement('img');
      img.src = data.img_source;
      swiperSlide.appendChild(img);
  
      // Create and append the country information
      var countryDiv = document.createElement('div');
      countryDiv.classList.add('country');
  
      var countryName = document.createElement('h4');
      countryName.textContent = data.country_name;
  
      var description = document.createElement('p');
      description.classList.add('description');
      description.textContent = data.description;
  
      countryDiv.appendChild(countryName);
      countryDiv.appendChild(description);
  
      swiperSlide.appendChild(countryDiv);
  
      // Create and append the "read more" link
      var slideLink = document.createElement('a');
      slideLink.classList.add('slide-link');
      slideLink.href = '#';
      slideLink.textContent = 'read more';
  
      swiperSlide.appendChild(slideLink);
  
      // Append the swiper slide to the wrapper
      swiperWrapper.appendChild(swiperSlide);
    });
  
    //Checking if the swiper is empty, because we need atleast one element to init the swiper
    if(swiperWrapper.children.length > 0){
        var introSwiper = new Swiper('.intro-swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 0,
          
          
            // Navigation arrows
            navigation: {
              nextEl: '.intro-next',
            },
            breakpoints: {
              576:{
                slidesPerView: 2.5,
              },
              768:{
                slidesPerView: 3,
              },
              1280:{
                slidesPerView: 5,
              }
            }
          });
    }
    // Initialize Swiper after dynamically creating the elements
    
  });


