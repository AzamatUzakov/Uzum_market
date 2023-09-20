
let goods_conteners = document.querySelector('.goods_conteners')
let goods_flex_box = document.querySelector('.goods_flex_box')
let more = document.querySelector('.add_btn')
let limit = 7




let check_arr_length = getBtnText()
function getBtnText() {
    return goods_flex_box.length - limit > 12 ? "Показать ещё 12" : `Показать ещё ${goods_flex_box.length - 7}`

}




more.onclick = () => {

    if (more.innerText === "Скрыть") {
        goods_products(goods_flex_box.slice(0, limit))
        more.innerHTML = getBtnText()
        return
    }

    if ((goods_flex_box.length - limit) > 20) {
        goods_products(goods_flex_box.slice(0, limit + 20))
        more.innerHTML = getBtnText()

    } else {
        goods_products(goods_flex_box)
        more.innerHTML = "Скрыть"

    }
}




export function goods_products(arr) {
 
    console.log(arr);
    for (let item of arr.slice(0, limit)) {
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
        title_p.innerHTML = item.title
        grade.innerHTML = '⭐️'
        grade_p.innerHTML = item.rating
        grade_p_num.innerHTML = `(${item.salePercentage} оценка)`
        promotion.innerHTML = "32000 сум"
        price_flex_cont_p.innerHTML = price_replace + " 00"
        credit.innerHTML = loan_per_month + " 00 сум/мес"
        more.innerHTML = getBtnText()


        console.log(loan_per_month);
        heart_position_img.src = "/public/love.png"
        shop_box_img.src = "/public/shopping-cart 1.png"
        poster_img_box_img.src = item.media[0]


        goods_flex_box.append(goods_main_box)
        goods_main_box.append(poster_box, title, grade, credit, promotion, price_flex_cont)
        poster_box.append(heart_position, poster_img_box)
        heart_position.append(heart_position_img)
        poster_img_box.append(poster_img_box_img)
        title.append(title_p)
        grade.append(grade_p, grade_p_num)
        price_flex_cont.append(price_flex_cont_p, shop_box)
        shop_box.append(shop_box_img)





    }
}

