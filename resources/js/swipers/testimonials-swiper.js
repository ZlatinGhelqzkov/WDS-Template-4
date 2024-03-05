document.addEventListener('DOMContentLoaded', function(){
var testimonialsWrapper = document.getElementById('testimonials-swiper-wrapper');
  testimonialsData.forEach(function(testimonial) {
    var slide = document.createElement('div');
    slide.className = 'swiper-slide testimonial-slide';

    // Left side (image)
    var img = document.createElement('img');
    img.src = testimonial.img_source;
    img.alt = testimonial.name;
    img.className = 'testimonial-swiper-image';
    slide.appendChild(img);

    // Right side (name and description)

    //wrapping div
    var testimonialContent = document.createElement('div');
    testimonialContent.className = 'testimonial-content';


    //name
    var name = document.createElement('h4');
    name.textContent = testimonial.name;
    name.className = 'testimonial-name';
    testimonialContent.appendChild(name);


    //description
    var description = document.createElement('p');
    description.textContent = testimonial.description;
    description.className = 'testimonial-description';
    testimonialContent.appendChild(description);

    //adding all content to slide
    slide.appendChild(testimonialContent);
    
    //Adding all content to the wrapper
    testimonialsWrapper.appendChild(slide);
  });

  if(testimonialsWrapper.children.length > 0){
      var testimonialsSwiper = new Swiper(".testimonials-swiper", {
          loop:true,
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
          nextEl: ".testimonials-next",
          },

          breakpoints: {
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
            }
          }
      });
  
  }

});
