// SHOW MENU

const showMenu = (toggleID, navId) =>{
const toggle = document.getElementById(toggleID),
nav = document.getElementById(navId)

    //validates that variable exist 
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            //add the show menu class to the div tag nav__menu
            nav.classList.toggle('show-menu')
        })
    }


}
showMenu('nav-toggle','nav-menu');

// REMOVE MENU MOBILE 

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
        //when we click on each nav link we remove the show menu class 
        navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION
