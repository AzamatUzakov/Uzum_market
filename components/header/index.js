
let body_2 = document.querySelector('.body_2')
let body_3 = document.querySelector('.body_3')


 
 
   
// Вызовите функцию checkWidth при загрузке страницы или при изменении размера окна браузера

function headers_1() {

    let conteners = document.createElement('div')
    let header_flex_cont = document.createElement('div')

    let uzum_icon = document.createElement('div')
    let uzum_icon_img = document.createElement('img')

    let cotalog_inp_flex_box = document.createElement('div')
    let catalog_cont = document.createElement('div')
    let search_box = document.createElement('div')
    let search_inp = document.createElement('input')
    let search_icons = document.createElement('div')
    let search_icons_img = document.createElement('img')

    let enter_favorite_bascet_cont = document.createElement('div')
    let enter_box = document.createElement('div')
    let enter_box_img = document.createElement('img')
    let enter_box_p = document.createElement('p')

    let favorite_box = document.createElement('div')
    let favorite_box_img = document.createElement('img')
    let favorite_box_p = document.createElement('p')
    let favorite_box_quantity_number = document.createElement('div')

    let bascet_box = document.createElement('div')
    let bascet_box_img = document.createElement('img')
    let bascet_box_p = document.createElement('p')
    let bascet_box_quantity_number = document.createElement('div')

    conteners.classList.add('contners')
    header_flex_cont.classList.add('header_flex_cont')
    cotalog_inp_flex_box.classList.add('cotalog_inp_flex_box')
    catalog_cont.classList.add('catalog_cont')
    search_box.classList.add('search_box')
    search_inp.classList.add('search_inp')
    search_icons.classList.add('search_icons')
    enter_favorite_bascet_cont.classList.add('enter_favorite_bascet_cont')

    enter_box.classList.add('flex_class')
    favorite_box.classList.add('flex_class')
    bascet_box.classList.add('flex_class')

    enter_box_p.classList.add('p')
    favorite_box_p.classList.add('p')
    bascet_box_p.classList.add('p')


    uzum_icon_img.src = `/public/uzum_img.svg`
    search_icons_img.src = "/public/search.svg"
    enter_box_img.src = "/public/user.svg"
    favorite_box_img.src = "/public/favorite.svg"
    bascet_box_img.src = "/public/basket.svg"

    catalog_cont.innerHTML = "Каталог"
    enter_box_p.innerHTML = "Войти"
    favorite_box_p.innerHTML = "Избранное"
    bascet_box_p.innerHTML = "Корзина"
    search_inp.placeholder = "Искать товары"



    body_2.append(conteners)
    conteners.append(header_flex_cont)
    header_flex_cont.append(uzum_icon, cotalog_inp_flex_box, enter_favorite_bascet_cont)
    uzum_icon.append(uzum_icon_img)
    cotalog_inp_flex_box.append(catalog_cont, search_box)
    search_box.append(search_inp, search_icons)
    search_icons.append(search_icons_img)
    enter_favorite_bascet_cont.append(enter_box, favorite_box, bascet_box)
    enter_box.append(enter_box_img, enter_box_p)
    favorite_box.append(favorite_box_img, favorite_box_p, favorite_box_quantity_number)
    bascet_box.append(bascet_box_img, bascet_box_p, bascet_box_quantity_number)
   
   
}
headers_1()










function headers_2() {


    let conteners = document.createElement('div')
    let header_flex_cont = document.createElement('div')
    let burger_favorite_icon_flex_cont = document.createElement('div')
    let burger_and_uzum_icon_cont = document.createElement('div')
    let burger_and_uzum_icon_cont_img = document.createElement('div')
    let uzum_img = document.createElement('div')

    let enter_favorite_bascet_flex_cont = document.createElement('div')
    let enter_box = document.createElement('div')
    let enter_box_img = document.createElement('img')

    let favorite_box = document.createElement('div')
    let favorite_box_img = document.createElement('img')
    let favorite_box_quantity_number = document.createElement('div')

    let bascet_box = document.createElement('div')
    let bascet_box_img = document.createElement('img')
    let bascet_box_quantity_number = document.createElement('div')

    let input = document.createElement('input')

    conteners.classList.add('conteners')
    header_flex_cont.classList.add('header_flex_cont')
    burger_favorite_icon_flex_cont.classList.add('burger_favorite_icon_flex_cont')
    burger_and_uzum_icon_cont.classList.add('burger_and_uzum_icon_cont')
    uzum_img.classList.add('uzum_img')
    enter_favorite_bascet_flex_cont.classList.add('enter_favorite_bascet_flex_cont')
    enter_box.classList.add('flex_class')
    favorite_box.classList.add('flex_class')
    bascet_box.classList.add('flex_class')
    favorite_box_quantity_number.classList.add('quantity_number')
    bascet_box_quantity_number.classList.add('quantity_number')
    input.classList.add('inp_search')

    burger_and_uzum_icon_cont_img.style.backgroundImage = '/public/uzum_img.svg'
    /* input.style.backgroundImage='/public/search_gray.png */

    input.placeholder = 'Искать товары'
    enter_box_img.src = "/public/user.svg"
    favorite_box_img.src = "/public/favorite.svg"
    bascet_box_img.src = "/public/basket.svg"


    favorite_box_quantity_number.innerHTML = "2"
    bascet_box_quantity_number.innerHTML = "7"


    body_3.append(conteners)
    conteners.append(header_flex_cont)
    header_flex_cont.append(burger_favorite_icon_flex_cont, input)
    burger_favorite_icon_flex_cont.append(burger_and_uzum_icon_cont, enter_favorite_bascet_flex_cont)
    burger_and_uzum_icon_cont.append(burger_and_uzum_icon_cont_img, uzum_img)
    enter_favorite_bascet_flex_cont.append(enter_box, favorite_box, bascet_box)
    enter_box.append(enter_box_img)
    favorite_box.append(favorite_box_img, favorite_box_quantity_number)
    bascet_box.append(bascet_box_img, bascet_box_quantity_number)


}

headers_2()