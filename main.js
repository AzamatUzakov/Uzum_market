import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getData } from './modules/http';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


getData('/goods')
    .then(res => console.log(res.data))



