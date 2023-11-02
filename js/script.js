const iOS = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
if (iOS){
    document.head.querySelector('meta[name="viewport"]').content = "width=device-width, initial-scale=1, maximum-scale=1";
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector("#car-type-images");
    const slides = slider.querySelectorAll(".swiper-slide");
    const thumbs = slider.querySelector(".gallery-thumbs .swiper-wrapper");
    const swiperNext = slider.querySelector(".swiper-next");

    for (let slide of slides) {
        const div = document.createElement("div");
        div.className = "swiper-slide";
        div.innerHTML += slide.innerHTML;
        thumbs.append(div);
    }

    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
    });


    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        speed: 500,
        effect: 'coverflow',
        autoplay: {
            delay: 3000,
        },
        loop: true,
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    swiperNext.addEventListener("click", () => {
        swiper.slideNext();
    })

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    const picker = new AirDatepicker('.date-range-picker input', {
        range: true,
        isMobile: window.innerWidth <= 991,
        autoClose: window.innerWidth <= 991,
        multipleDatesSeparator: ' - ',
        selectedDates: [new Date(), tomorrow]
    });
})


