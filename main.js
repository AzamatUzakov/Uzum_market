import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getData } from './modules/http';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { goods_products } from './components/goods';

new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


getData('/goods')
    .then(res => goods_products(res.data))
    



    
