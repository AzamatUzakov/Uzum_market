import Swiper from 'swiper';
import { getData } from '/modules/http';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



let goods_id = JSON.parse(localStorage.getItem("goods_id"))
let medias = goods_id.media

console.log(medias);

const swiper = new Swiper('.mySwiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let aside_img_box = document.querySelector('.aside_img_box')
let swiper_wrapper = document.querySelector('.img_box')
let titles = document.querySelector('.titles h1')
let price =document.querySelector('.prise h2')
let description = document.querySelector('.description')

titles.innerHTML = goods_id.title
price.innerHTML = goods_id.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")+" 00 сум"
description.innerHTML= goods_id.description
for (let item of medias) {

    let items = document.createElement('img')
    let swiper_img = document.createElement('img')
    items.classList.add('item')
    swiper_img.classList.add('sw_img')

    items.src = item
    swiper_img.src = item
    aside_img_box.append(items)
    swiper_wrapper.append(swiper_img)
    
}




