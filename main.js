let upIcon = document.querySelector(".up-icon");

let up = function()
{
    if(this.scrollY >= 500)
    {
        upIcon.style.visibility = "visible";
    }
    else
    {
        upIcon.style.visibility = "hidden";
    }
}


window.addEventListener('scroll', up);

/***********************************************************************************************************/

let modeStatus = true;
let darkStyle = document.querySelector(".body-class");
let darkStyleHeader = document.querySelector(".header-container");
let darkStylereveal = document.querySelector(".reveal");
let darkStyleMenu = document.querySelector(".our-menu");

let darkMode = function()
{

    if (modeStatus == true)
    {
        modeStatus = false;
        darkStyle.classList.add('dark-mode');
        darkStyleHeader.classList.add('dark-mode');
        darkStyleHeader.classList.add('dark-header');
        darkStylereveal.classList.add('revealMode');
        darkStyle.style.color = "white";
        darkStyleMenu.classList.add('menu-mode');
    }
    else
    {
        modeStatus = true;
        darkStyle.classList.remove('dark-mode');
        darkStyleHeader.classList.remove('dark-mode');
        darkStyleHeader.classList.remove('dark-header');
        darkStylereveal.classList.remove('revealMode');
        darkStyle.style.color = "black";
        darkStyleMenu.classList.remove('menu-mode');
    }
    
}

let menuStatus = false;
let menuHeader = document.querySelector(".header-container");
let nav = document.querySelector(".navigation");

let openMenu = function()
{
    if (menuStatus == false)
    {
        menuStatus = true;
        menuHeader.style.height= "300px";
        nav.style.visibility = "visible";

    }
    else
    {
        menuStatus = false;
        menuHeader.style.height= "60px";
        nav.style.visibility = "hidden";
        
    }
}
