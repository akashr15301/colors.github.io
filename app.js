const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navbarLogo');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu= () => {
   const elem=document.querySelector('.highlight');
   const homeMenu=document.querySelector('#homePage');
   const aboutMenu=document.querySelector('#aboutPage');
   const servicesMenu=document.querySelector('#servicesPage');
   let scrollPos=window.scrollY
   

   //adds the highlight class to my menu items
   if(window.innerWidth >960 && scrollPos <600){
     homeMenu.classList.add('highlight');
     aboutMenu.classList.remove('highlight');
     return;
   }
   else if(window.innerWidth >960 && scrollPos <1400) {
     aboutMenu.classList.add('highlight');
     homeMenu.classList.remove('highlight');
     servicesMenu.classList.remove('highlight');
     return;
   }
   else if(window.innerWidth >960 && scrollPos <2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if((elem && window.innerWidth < 960 && scrollPos<600) || elem) {
    elem.classList.remove('highlight');
  }

}

window.addEventListener('click',highlightMenu);
window.addEventListener('scroll',highlightMenu);

// close mobile menu

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

