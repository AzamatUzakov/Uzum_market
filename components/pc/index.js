import { getData } from '/modules/http';


let categories = document.querySelectorAll('#catigoria_hrefs')
let all_catigories_btn = document.querySelector(".all")
let main_href = document.querySelector('.main')
let electriks_href = document.querySelector('.pc')
let aside_case = document.querySelector('.aside_box')
let cat_p = document.querySelectorAll('.cat')
let elem_items = document.querySelectorAll('.elem')
let itemBtns = document.querySelectorAll('.item')
let white_btn = document.querySelector('.white')
let black_btn = document.querySelector('.black')
let orange_btn = document.querySelector('.orange')
let blue_btn = document.querySelector('.blue')
let green_btn = document.querySelector('.green')
let red_btn = document.querySelector('.red')
let gray_btn = document.querySelector('.gray')
let to_main_p = document.querySelector('.to_main')
let kit_p = document.querySelector('.kit')
let tovar = document.querySelector('.tovar')
let bird_img = document.querySelector('.bird_img')
let clear_btns = document.querySelector('.clear_btns')









categories.forEach(btn => {
    btn.onclick = () => {
        categories.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
    }
});


itemBtns.forEach(btn => {
    btn.onclick = () => {
        itemBtns.forEach(btn => btn.classList.remove('act'))
        btn.classList.add('act')
    }
});

all_catigories_btn.onclick = () => {
    electriks_href.remove()
    /*     localStorage.setItem("all_catigor", location.assign('/components/technic/index.html'))
     */
}

cat_p.forEach(btn => {
    btn.onclick = () => {
        cat_p.forEach(btn => btn.classList.remove('active_p'))
        btn.classList.add('active_p')
    }
});


main_href.onclick = () => {
    location.assign('/')
}

to_main_p.onclick = () => {
    location.assign('/')
    console.log('click');
}

let all_products = []
let kitchen_arr = []
let white_color_arr = []
let gray_color_arr = []
let max_prise = []
let min_price = []
let max_rating = []

getData('/goods')
    .then(res => {
        for (let item of res.data) {
            if (item.type === "PC") {
                kitchen_arr.push(item)
            }
            all_products.push(item)
        }




        for (let item of kitchen_arr) {
            // console.log(item);
            item.colors.forEach(el => {
                if (el === "black") {
                    white_color_arr.push(item)
                }
                else if (el === "blue") {
                    gray_color_arr.push(item)
                }


            });

console.log(item);

            max_prise.push(item)
            min_price.push(item)
            max_rating.push(item)

        }



        reload(kitchen_arr)

        black_btn.onclick = () => {
            reload(white_color_arr)
        }
        blue_btn.onclick = () => {
            reload(gray_color_arr)
        }

        kit_p.onclick = () => {
            reload(kitchen_arr)
        }
        tovar.onclick = () => {
            reload(kitchen_arr)
        }
        all_catigories_btn.onclick = () => {
            location.assign('/')
        }

        /* console.log(location.assign);
        if (location.origin === all_catigories_btn) {
            reload(all_products)
        } */


        max_prise.sort((a, b) => (-a.price) - (-b.price));
        min_price.sort((a, b) => (+a.price) - (+b.price));
        max_rating.sort((a, b) => (-a.rating) - (-b.rating));

        /*      console.log(max_prise);
             console.log(min_price); */
        console.log(max_rating);


    }
    )



clear_btns.onclick = () => {
    location.reload()
}

function sort() {
    let sort_cont = document.querySelector('.sort_cont')

    let title_sort_cont = document.createElement('div')
    let title_sort_cont_h1 = document.createElement('h1')
    let sort_box = document.createElement('div')
    let sort_box_p = document.createElement('p')

    let selected = document.createElement("select")
    let cheap_opt = document.createElement('option')
    let moreExpensive_opt = document.createElement('option')
    let highRating_opt = document.createElement('option')
    let popular_opt = document.createElement('option')

    let filter_box = document.createElement('div')
    let filter_img = document.createElement('img')
    let filter_p = document.createElement('p')
    let hr = document.createElement('hr')


    title_sort_cont.classList.add('title_sort_cont')
    title_sort_cont_h1.classList.add('h1')
    sort_box.classList.add('sort_box')
    sort_box_p.classList.add('p')
    selected.classList.add('select')
    filter_box.classList.add('filter_img')
    filter_p.classList.add('fill')
    hr.classList.add('hr')

    title_sort_cont_h1.innerHTML = "PC"
    sort_box_p.innerHTML = "Сортировка"
    cheap_opt.innerHTML = "Подешевле"
    moreExpensive_opt.innerHTML = "Подароже"
    highRating_opt.innerHTML = "Высокий рейтинг"

    filter_p.innerHTML = "Фильтры"

    filter_img.src = "/public/filter.png"


    selected.id = "sort";
    selected.name = "sort";



    popular_opt.value = "popular";
    popular_opt.text = "Популярные"

    cheap_opt.value = "chaper";
    cheap_opt.text = "Подешевле";

    moreExpensive_opt.value = "moreExspensive";
    moreExpensive_opt.text = "Подароже";

    highRating_opt.value = "highRating";
    highRating_opt.text = "Высокий рейтинг";


    sort_cont.append(title_sort_cont, hr)
    title_sort_cont.append(title_sort_cont_h1, sort_box)
    sort_box.append(sort_box_p, selected, filter_box)
    selected.append(popular_opt, cheap_opt, moreExpensive_opt, highRating_opt)
    filter_box.append(filter_img, filter_p)


    selected.onchange = () => {
        if (selected.value === popular_opt.value) {
            reload(kitchen_arr)
            history.pushState(null, null, `/${popular_opt.value}`);

        }
        else if (selected.value === moreExpensive_opt.value) {
            reload(max_prise)

            history.pushState(null, null, '/components/kitchen/index.html' + `/?${moreExpensive_opt.value}`);

        } else if (selected.value === cheap_opt.value) {
            reload(min_price)
            history.pushState(null, null, `/${cheap_opt.value}`);

        } else if (selected.value === highRating_opt.value) {
            reload(max_rating)
            history.pushState(null, null, `/${highRating_opt.value}`);

        }
    }


    console.log(selected.value === "chaper");
}
sort()



function reload(arr) {
    aside_case.innerHTML = ""

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



