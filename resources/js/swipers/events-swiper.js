document.addEventListener('DOMContentLoaded', function() {
    var eventsSwiperWrapper = document.getElementById('events-swiper-wrapper');

    // Loop through the event data and create swiper slides
    eventsData.forEach(function(event) {
        var swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide', 'event');

        var title = document.createElement('h5');
        title.classList.add('event-title');
        title.textContent = event.title;

        var date = document.createElement('p');
        date.classList.add('event-date');
        date.textContent = event.date;

        var info = document.createElement('p');
        info.classList.add('event-info');
        info.textContent = event.info;

        swiperSlide.appendChild(title);
        swiperSlide.appendChild(date);
        swiperSlide.appendChild(info);

        eventsSwiperWrapper.appendChild(swiperSlide);
    });

    if(eventsSwiperWrapper.children.length > 0){
        var eventsSwiper = new Swiper(".events-swiper", {
            loop:true,
            pagination: true,
            slidesPerView: 1,
            navigation: {
            nextEl: ".events-next",
            prevEl: ".events-prev",
            },
            breakpoints:{
              567:{
                slidesPerView: 2,
              },
              768:{
                slidesPerView: 3,
              },
              1280:{
                slidesPerView: 4,
              }
            },  
        });  
     };

eventsSwiper.updateAutoHeight();

});
