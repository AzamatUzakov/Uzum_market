import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getData } from './modules/http';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { goods_products, createBlock } from './components/goods';

new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let createBlock_contener = document.querySelector('.createBlock_contener')
let furniture_box = []
let pc_box = []
let tv_box = []
let audio_box = []
let kitchen_box = []

getData('/goods')
    .then(res => {
        for (let item of res.data) {

            if (item.type === "furniture") {
                furniture_box.push(item)
            } else if (item.type === "PC") {
                pc_box.push(item)
            } else if (item.type === "audio") {
                audio_box.push(item)
            } else if (item.type === "TV") {
                tv_box.push(item)
            } else if (item.type === "kitchen") {
                kitchen_box.push(item)
            }

        }
        console.log(res.data);


        createBlock( furniture_box, createBlock_contener, 'furniture')
        createBlock( pc_box, createBlock_contener, 'PC')
        createBlock( tv_box, createBlock_contener, 'TV')
        createBlock( audio_box, createBlock_contener, 'Audio')
        createBlock( kitchen_box, createBlock_contener, 'Kitchen')
    })



console.log(kitchen_box);

