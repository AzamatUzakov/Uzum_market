
let createBlock_contener = document.querySelector('.createBlock_contener')



let goods_flex_box = document.createElement('div')



export function createBlock(arr, place, titles) {
    let limit = 5
    let chekArrLength = arr.length - limit > 5 ? "Покозать ещё 5" : `Покозать ещё ${arr.length - limit}`


    let main_contener = document.createElement('div')
    let title = document.createElement('h1')
    let box = document.createElement('div')
    let show_more = document.createElement('button')

    main_contener.classList.add('furniture')
    title.classList.add('h1')
    box.classList.add('s')
    show_more.classList.add('add_btn')

    title.innerHTML = titles
    show_more.innerHTML = chekArrLength
    goods_products(arr.slice(0, limit), box)


    place.append(main_contener)
    main_contener.append(title, box, show_more)


    show_more.onclick = () => {
        if (show_more.innerText === "скрыть") {
            limit = 5
            goods_products(arr.slice(0, limit), box)
            show_more.innerHTML = arr.length - limit > 5 ? "Покозать ещё 5" : `Покозать ещё ${arr.length - limit}`
            return

        }

        if ((arr.length - limit) > 5) {
            goods_products(arr.slice(0, limit + 5), box)
            show_more.innerHTML = arr.length - limit > 5 ? "Покозать ещё 5" : `Покозать ещё ${arr.length - limit}`


        } else {
            goods_products(arr, box)
            show_more.innerHTML = "скрыть"
        }

    }
}

export function goods_products(arr, box) {
    box.innerHTML = ""
    for (let item of arr) {

        let goods_main_box = document.createElement('div')

        let poster_box = document.createElement('div')
        let heart_position = document.createElement('div')
        let heart_position_img = document.createElement('img')
        let poster_img_box = document.createElement('div')
        let poster_img_box_img = document.createElement('img')
        let title = document.createElement('div')
        let title_p = document.createElement('a')
        let grade = document.createElement('div')
        let grade_p = document.createElement('p')
        let grade_p_num = document.createElement('p')
        let credit = document.createElement('div')
        let promotion = document.createElement('div')
        let price_flex_cont = document.createElement('div')
        let price_flex_cont_p = document.createElement('p')
        let shop_box = document.createElement('div')
        let shop_box_img = document.createElement('img')

        box.classList.add('goods_flex_box')
        goods_main_box.classList.add("goods_main_box")
        poster_box.classList.add("poster_box")
        heart_position.classList.add("heart_position")
        poster_img_box.classList.add("poster_img_box")
        poster_img_box_img.classList.add("poster_img")
        title.classList.add("title")
        title_p.classList.add('title')
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
        title_p.href = "#"

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




        // poster_img_box_img.href = "#"


        box.append(goods_main_box)
        goods_main_box.append(poster_box, title, grade, credit, promotion, price_flex_cont)
        poster_box.append(heart_position, poster_img_box)
        heart_position.append(heart_position_img)
        poster_img_box.append(poster_img_box_img)
        title.append(title_p)
        grade.append(grade_p, grade_p_num)
        price_flex_cont.append(price_flex_cont_p, shop_box)
        shop_box.append(shop_box_img)

        title_p.onclick = () => {
            title_p.href = "/components/id/index.html?id=" + item.id
            localStorage.setItem('goods_id', item.id)

        }

    }
}

