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
let price = document.querySelector('.prise h2')
let description = document.querySelector('.description')
let description_two = document.querySelector('.description_two p')

titles.innerHTML = goods_id.title
price.innerHTML = goods_id.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ") + " 00 сум"
description.innerHTML = goods_id.description
description_two.innerHTML = goods_id.description
for (let item of medias) {

    let items = document.createElement('img')
    let swiper_img = document.createElement('img')
    items.classList.add('item')
    swiper_img.classList.add('sw_img')

    items.src = item
    swiper_img.src = item
    aside_img_box.append(items)
    swiper_wrapper.append(swiper_img)


    items.onclick = () => {
        swiper_img.src = items
        console.log("clcic");
    }
}




let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.querySelector('.addition');
const decrementBtn = document.querySelector('.decrease');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
let tv_arr = []
let audio_arr = []
let pc_arr = []
let kitchen_arr = []
let furniture_arr = []
getData('/goods')
    .then(res => {
       // console.log(res.data);
        for (let item of res.data) {
            if (item.type === 'TV') {
                tv_arr.push(item)
            } else if (item.type === 'audio') {
                audio_arr.push(item)
            }else if (item.type === 'PC') {
                pc_arr.push(item)
            }else if (item.type === 'kitchen') {
                kitchen_arr.push(item)
            }else if (item.type === 'furniture') {
                furniture_arr.push(item)
            }
        }

        if (goods_id.type ==='TV') {
            reload(tv_arr)
        }else if (goods_id.type === 'furniture') {
            reload(furniture_arr)
        }else if (goods_id.type === 'audio') {
            reload(audio_arr)
        }else if (goods_id.type === 'PC') {
            reload(pc_arr)
        }else if (goods_id.type === 'kitchen') {
            reload(kitchen_arr)
        }

    })

    let aside_case = document.querySelector('.aside_box')
    function reload(arr) {
   // aside_case.innerHTML = ""
    for (let item of arr) {
        let goods_main_box = document.createElement('div')

        let poster_box = document.createElement('div')
        let heart_position = document.createElement('div')
        let heart_position_img = document.createElement('img')
        let poster_img_box = document.createElement('div')
        let poster_img_box_img = document.createElement('img')
        let title = document.createElement('div')
        let title_p = document.createElement('p')
        let grade = document.createElement('div')
        let grade_p = document.createElement('p')
        let grade_p_num = document.createElement('p')
        let credit = document.createElement('div')
        let promotion = document.createElement('div')
        let price_flex_cont = document.createElement('div')
        let price_flex_cont_p = document.createElement('p')
        let shop_box = document.createElement('div')
        let shop_box_img = document.createElement('img')

        goods_main_box.classList.add("goods_main_box")
        poster_box.classList.add("poster_box")
        heart_position.classList.add("heart_position")
        poster_img_box.classList.add("poster_img_box")
        poster_img_box_img.classList.add("poster_img")
        title.classList.add("title")
        grade.classList.add("grade")
        credit.classList.add("credit")
        promotion.classList.add("promotion")
        price_flex_cont.classList.add("price_flex_cont")
        shop_box.classList.add("shop_box")

        let date = new Date
        let month = date.getMonth()
        let price_replace = item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")

        let loan_per_month = Math.round(item.price / month)/* .toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
        loan_per_month */
        title_p.innerHTML = item.title.slice(0, 70)
        grade.innerHTML = '⭐️'
        grade_p.innerHTML = item.rating
        grade_p_num.innerHTML = `(${item.salePercentage} оценка)`
        promotion.innerHTML = "32000 сум"
        price_flex_cont_p.innerHTML = price_replace + " 00"
        credit.innerHTML = loan_per_month + " 00 сум/мес"


        heart_position_img.src = "/public/love.png"
        shop_box_img.src = "/public/shopping-cart 1.png"
        poster_img_box_img.src = item.media[0]







        aside_case.append(goods_main_box)
        goods_main_box.append(poster_box, title, grade, credit, promotion, price_flex_cont)
        poster_box.append(heart_position, poster_img_box)
        heart_position.append(heart_position_img)
        poster_img_box.append(poster_img_box_img)
        title.append(title_p)
        grade.append(grade_p, grade_p_num)
        price_flex_cont.append(price_flex_cont_p, shop_box)
        shop_box.append(shop_box_img)

        poster_img_box_img.onclick = () => {
            location.href = "/components/id/index.html?id=" + item.id
           localStorage.setItem('goods_id', JSON.stringify(item))
          //  JSON.parse(localStorage.getItem("goods_id"))

        }
    }
}
console.log(furniture_arr);
