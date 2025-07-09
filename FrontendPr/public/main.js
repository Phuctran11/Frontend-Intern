
const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon= document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener('click', (e) =>{
    if(toggleTopMenuIcon.contains(e.target)){
        //Click to toggle top menu icon
        topMenu.classList.toggle("hidden");
    } else{
        //Click outside of top menu icon
        if(topMenu.classList.contains("hidden")){
            return;
        }
        topMenu.classList.add("hidden");
        toggleTopMenuIcon.classList.remove("rotate-90");
    }
})

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });