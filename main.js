let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
/*بفتح السيرش المنيو بتتقفل*/
/* بتفضل موجوده وانا بسكرول عادي */


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
/* بفتح المنيو السيرش بتتقفل*/
/* بتفضل موجوده برضو وانا بسكرول */


window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}
/* سواء فتحت دي او دي فهم بيختفوا اول ما ابدأ اسكرول */





let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
header.classList.toggle('shadow', window.scrollY > 0);
});
/* دا بييضيفلي زي تاثير ظل كدا على الهيدر بيخليه مميز اثناء ما انا بسكرول لتحت وبيختفي اول ما ارجع لاول صفحه عادي*/