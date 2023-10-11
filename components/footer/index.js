


let footer = document.querySelector('footer')
function one_var() {


    let one_variant = document.createElement('div')


    let about_us_contener = document.createElement('div')
    let about_us_contener_h1 = document.createElement('h1')
    let about_us_contener_a_1 = document.createElement('a')
    let about_us_contener_BR = document.createElement('br')
    let about_us_contener_a_2 = document.createElement('a')

    let for_users_contner = document.createElement('div')
    let for_users_contner_h1 = document.createElement('h1')
    let for_users_contner_a_1 = document.createElement('a')
    let for_users_contner_BR = document.createElement('br')
    let for_users_contner_a_2 = document.createElement('a')

    let for_entrepreneurs_contner = document.createElement('div')
    let for_entrepreneurs_contner_h1 = document.createElement('h1')
    let for_entrepreneurs_contner_a_1 = document.createElement('a')
    let for_entrepreneurs_contner_BR = document.createElement('br')
    let for_entrepreneurs_contner_a_2 = document.createElement('a')


    let application_box = document.createElement('div')
    let flex_width_1200px = document.createElement('div')
    let flex_width_1200px_h1 = document.createElement('h1')
    let apllication_flex_box = document.createElement('div')

    let apple_item = document.createElement('div')
    let apple_item_img = document.createElement('img')
    let apple_item_p = document.createElement('p')

    let google_play_item = document.createElement('div')
    let google_play_item_img = document.createElement('img')
    let google_play_item_p = document.createElement('p')

    let uzum_networks_cont = document.createElement('div')
    let uzum_networks_cont_h1 = document.createElement('h1')
    let networks = document.createElement('div')
    let networks_img_INST = document.createElement('img')
    let networks_img_TG = document.createElement('img')
    let networks_img_YOU = document.createElement('img')
    let networks_img_FC = document.createElement('img')

    let down = document.createElement('div')
    let down_hr = document.createElement('hr')
    let down_flex = document.createElement('div')

    let down_title = document.createElement('div')
    let down_title_p_1 = document.createElement('p')
    let down_title_p_2 = document.createElement('p')


    let addres = document.createElement('div')
    let addres_a = document.createElement('a')

    one_variant.classList.add('one_variant')

    about_us_contener_h1.classList.add('h1')
    about_us_contener_a_1.classList.add('a')
    about_us_contener_a_2.classList.add('a')

    for_users_contner_h1.classList.add('h1')
    for_users_contner_a_1.classList.add('a')
    for_users_contner_a_2.classList.add('a')

    for_entrepreneurs_contner_h1.classList.add('h1')
    for_entrepreneurs_contner_a_1.classList.add('a')
    for_entrepreneurs_contner_a_2.classList.add('a')

    application_box.classList.add('application_box')
    flex_width_1200px_h1.classList.add('h1')
    apllication_flex_box.classList.add('apllication_flex_box')

    apple_item.classList.add('w')
    apple_item_p.classList.add('p')

    google_play_item.classList.add('w')
    google_play_item_p.classList.add('p')

    uzum_networks_cont.classList.add('uzum_networks_cont')
    uzum_networks_cont_h1.classList.add('h1')
    networks.classList.add('networks')

    down.classList.add('down')
    down_flex.classList.add('down_flex')

    down_title.classList.add('down_title')
    down_title_p_1.classList.add('p')
    down_title_p_2.classList.add('p')


    about_us_contener_h1.innerHTML = "О нас"
    about_us_contener_a_1.innerHTML = "Пункт выдачи"
    about_us_contener_a_2.innerHTML = "Вакансии"

    for_users_contner_h1.innerHTML = "Пользователям"
    for_users_contner_a_1.innerHTML = "Связаться с нами"
    for_users_contner_a_2.innerHTML = "Вопрос - ответ"

    for_entrepreneurs_contner_h1.innerHTML = "Для предпринимателей"
    for_entrepreneurs_contner_a_1.innerHTML = "Продовайте на Uzum"
    for_entrepreneurs_contner_a_2.innerHTML = "Вход для продовцов"

    flex_width_1200px_h1.innerHTML = "Скачать приложение"
    apple_item_p.innerHTML = "AppStore"
    google_play_item_p.innerHTML = "Google Play"

    uzum_networks_cont_h1.innerHTML = "Uzum в соцсетях"

    down_title_p_1.innerHTML = "Соглашение о конфиденциальности"
    down_title_p_2.innerHTML = "Пользовательское соглашение"
    addres_a.innerHTML = "«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»"


    about_us_contener_a_1.href = "#"
    about_us_contener_a_2.href = "#"
    for_users_contner_a_1.href = "#"
    for_users_contner_a_2.href = "#"
    for_entrepreneurs_contner_a_1.href = "#"
    for_entrepreneurs_contner_a_2.href = "#"
    addres_a.href = "#"


    apple_item_img.src = "/public/apple-logo_32.png"
    google_play_item_img.src = "/public/google-play_32.png"
    networks_img_INST.src = "/public/instagram.png"
    networks_img_TG.src = "/public/telegram.png"
    networks_img_YOU.src = "/public/youtube.png"
    networks_img_FC.src = "/public/facebook.png"

    footer.append(one_variant)
    one_variant.append(about_us_contener, for_users_contner, for_entrepreneurs_contner, application_box, down)
    about_us_contener.append(about_us_contener_h1, about_us_contener_a_1, about_us_contener_BR, about_us_contener_a_2)
    for_users_contner.append(for_users_contner_h1, for_users_contner_a_1, for_users_contner_BR, for_users_contner_a_2)
    for_entrepreneurs_contner.append(for_entrepreneurs_contner_h1, for_entrepreneurs_contner_a_1, for_entrepreneurs_contner_BR, for_entrepreneurs_contner_a_2)
    application_box.append(flex_width_1200px, uzum_networks_cont)
    flex_width_1200px.append(flex_width_1200px_h1, apllication_flex_box)
    apllication_flex_box.append(apple_item, google_play_item)
    apple_item.append(apple_item_img, apple_item_p)
    google_play_item.append(google_play_item_img, google_play_item_p)
    uzum_networks_cont.append(uzum_networks_cont_h1, networks)
    networks.append(networks_img_INST, networks_img_TG, networks_img_YOU, networks_img_FC)
    down.append(down_hr, down_flex)
    down_flex.append(down_title, addres)
    down_title.append(down_title_p_1, down_title_p_2)
    addres.append(addres_a)
}
one_var()



function two_var() {

    let clone_arrow_one = document.createElement('img')
    let clone_arrow_two = document.createElement('img')

    let two_variant = document.createElement('div')
    let about_us_contener_two_V = document.createElement('div')
    let about_us_contener_two_V_h1 = document.createElement('h1')
    let about_us_contener_two_V_img = document.createElement('img')
    let up_hr = document.createElement('hr')

    let defoult_height = document.createElement('div')
    let defoult_height_a_1 = document.createElement('a')
    let defoult_height_BR = document.createElement('br')
    let defoult_height_a_2 = document.createElement('a')

    let for_users_contner_two_V = document.createElement('div')
    let for_users_contner_two_V_h1 = document.createElement('h1')
    let for_users_contner_two_V_img = document.createElement('img')
    let down_hr = document.createElement('hr')

    let defoult_height_two = document.createElement('div')
    let defoult_height_two_a_1 = document.createElement('a')
    let defoult_height_two_BR = document.createElement('br')
    let defoult_height_two_a_2 = document.createElement('a')

    let for_entrepreneurs_contner_two_V = document.createElement('div')
    let for_entrepreneurs_contner_two_V_h1 = document.createElement('h1')
    let for_entrepreneurs_contner_two_V_img = document.createElement('img')

    let defoult_height_three = document.createElement('div')
    let defoult_height_three_a_1 = document.createElement('a')
    let defoult_height_three_BR = document.createElement('br')
    let defoult_height_three_a_2 = document.createElement('a')

    let download_box = document.createElement('div')
    let download_box_h1 = document.createElement('h1')

    let aplication_flex_box = document.createElement('div')
    let apple_box = document.createElement('div')
    let apple_box_img = document.createElement('img')

    let title_case_one = document.createElement('div')
    let title_case_one_p = document.createElement('p')
    let title_case_one_h1 = document.createElement('h1')

    let google_box = document.createElement('div')
    let google_box_img = document.createElement('img')

    let title_case_two = document.createElement('div')
    let title_case_two_p = document.createElement('p')
    let title_case_two_h1 = document.createElement('h1')

    let uzum_network_box_two_V = document.createElement('div')
    let uzum_network_box_two_V_h1 = document.createElement('h1')

    let app = document.createElement('div')
    let ins_tg_box = document.createElement('div')
    let ins_tg_box_img_INST = document.createElement('img')
    let ins_tg_box_img_TG = document.createElement('img')

    let you_fc = document.createElement('div')
    let you_fc_img_YOU = document.createElement('img')
    let you_fc_img_FC = document.createElement('img')

    let down_two_V = document.createElement('div')
    let down_two_V_h1 = document.createElement('h1')
    let down_two_V_h2 = document.createElement('h2')
    let down_two_V_p = document.createElement('p')


    two_variant.classList.add('two_variant')
    about_us_contener_two_V.classList.add('T')
    for_users_contner_two_V.classList.add('T')
    for_entrepreneurs_contner_two_V.classList.add('T')

    about_us_contener_two_V_h1.classList.add('h1')
    for_users_contner_two_V_h1.classList.add('h1')
    for_entrepreneurs_contner_two_V_h1.classList.add('h1')
    download_box_h1.classList.add('h1')
    title_case_one_h1.classList.add('h1')
    title_case_two_h1.classList.add('h1')
    uzum_network_box_two_V_h1.classList.add('h1')
    down_two_V_h1.classList.add('h1')

    ins_tg_box.classList.add('ins_tg_box')
    you_fc.classList.add('you_fc')

    two_variant.classList.add('two_variant')
    two_variant.classList.add('two_variant')
    two_variant.classList.add('two_variant')

    about_us_contener_two_V_img.classList.add('img')
    for_users_contner_two_V_img.classList.add('img')
    for_entrepreneurs_contner_two_V_img.classList.add('img')

    defoult_height.classList.add('defoult_height')
    defoult_height_two.classList.add('defoult_height')
    defoult_height_three.classList.add('defoult_height')

    defoult_height_a_1.classList.add('a')
    defoult_height_a_2.classList.add('a')
    defoult_height_two_a_1.classList.add('a')
    defoult_height_two_a_2.classList.add('a')
    defoult_height_three_a_1.classList.add('a')
    defoult_height_three_a_2.classList.add('a')

    up_hr.classList.add('hr')
    down_hr.classList.add('hr')

    download_box.classList.add('download_box')
    aplication_flex_box.classList.add('aplication_flex_box')
    apple_box.classList.add('apple_box')
    title_case_one_p.classList.add('p')
    title_case_two_p.classList.add('p')

    google_box.classList.add('google_box')
    uzum_network_box_two_V.classList.add('uzum_network_box_two_V')
    down_two_V.classList.add('down_two_V')
    down_two_V_h2.classList.add('h2')
    down_two_V_p.classList.add('p')

    clone_arrow_one.classList.add("clone_arrow")
    clone_arrow_two.classList.add("clone_arrow")


    about_us_contener_two_V_h1.innerHTML = "О нас"
    for_users_contner_two_V_h1.innerHTML = "Пользователям"
    for_entrepreneurs_contner_two_V_h1.innerHTML = "Для предпринимателей"
    download_box_h1.innerHTML = "Скачать приложение"
    title_case_one_h1.innerHTML = "AppStore"
    title_case_two_h1.innerHTML = "Google Play"
    uzum_network_box_two_V_h1.innerHTML = "Uzum в соцсетях"
    down_two_V_h1.innerHTML = "Соглашение о конфиденциальности"
    down_two_V_h2.innerHTML = "Пользовательское соглашение"
    title_case_one_p.innerHTML = "Загрузите в"
    title_case_two_p.innerHTML = "Доступно в"
    down_two_V_p.innerHTML = "«2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»"
    defoult_height_a_1.innerHTML = "Пункт выдачи"
    defoult_height_a_2.innerHTML = "Вакансии"
    defoult_height_two_a_1.innerHTML = "Связаться с нами"
    defoult_height_two_a_2.innerHTML = "Вопрос - ответ"
    defoult_height_three_a_1.innerHTML = "Продовайте на Uzum"
    defoult_height_three_a_2.innerHTML = "Вход для продовцов"


    defoult_height_a_1.href = "#"
    defoult_height_a_2.href = "#"
    defoult_height_two_a_1.href = "#"
    defoult_height_two_a_2.href = "#"
    defoult_height_three_a_1.href = "#"
    defoult_height_three_a_2.href = "#"


    about_us_contener_two_V_img.src = "/public/next.png"
    for_users_contner_two_V_img.src = "/public/next.png"
    for_entrepreneurs_contner_two_V_img.src = "/public/next.png"
    apple_box_img.src = "/public/apple-logo_white.png"
    google_box_img.src = "/public/google-play_32.png"
    ins_tg_box_img_INST.src = "/public/instagram.png"
    ins_tg_box_img_TG.src = "/public/telegram.png"
    you_fc_img_YOU.src = "/public/youtube.png"
    you_fc_img_FC.src = "/public/facebook.png"

    clone_arrow_one.src = "/public/clone-arrow.png"
    clone_arrow_two.src = "/public/clone-arrow.png"


    footer.append(two_variant)
    two_variant.append(about_us_contener_two_V, defoult_height, for_entrepreneurs_contner_two_V, defoult_height_two, down_hr, for_entrepreneurs_contner_two_V, defoult_height_three, up_hr, download_box, uzum_network_box_two_V, down_two_V)
    about_us_contener_two_V.append(about_us_contener_two_V_h1, about_us_contener_two_V_img, clone_arrow_one)
    defoult_height.append(defoult_height_a_1, defoult_height_BR, defoult_height_a_2)
    for_users_contner_two_V.append(for_users_contner_two_V_h1, for_users_contner_two_V_img)
    defoult_height_two.append(defoult_height_two_a_1, defoult_height_two_BR, defoult_height_two_a_2)
    for_entrepreneurs_contner_two_V.append(for_entrepreneurs_contner_two_V_h1, for_entrepreneurs_contner_two_V_img, clone_arrow_two)
    defoult_height_three.append(defoult_height_three_a_1, defoult_height_three_BR, defoult_height_three_a_2)
    download_box.append(download_box_h1, aplication_flex_box)
    aplication_flex_box.append(apple_box, google_box)
    apple_box.append(apple_box_img, title_case_one)
    title_case_one.append(title_case_one_p, title_case_one_h1)
    google_box.append(google_box_img, title_case_two)
    title_case_two.append(title_case_two_p, title_case_two_h1)
    uzum_network_box_two_V.append(uzum_network_box_two_V_h1, app)
    app.append(ins_tg_box, you_fc)
    ins_tg_box.append(ins_tg_box_img_INST, ins_tg_box_img_TG)
    you_fc.append(you_fc_img_YOU, you_fc_img_FC)
    down_two_V.append(down_two_V_h1, down_two_V_h2, down_two_V_p)




    about_us_contener_two_V_img.onclick = () => {

        defoult_height_two.style.display = 'block'
        about_us_contener_two_V_img.style.display = 'none'
        clone_arrow_one.style.display = 'block'

        setTimeout(() => {
            defoult_height_two.style.height = 30 + 'px'

        }, 9);
    }
    clone_arrow_one.onclick = () => {
        defoult_height_two.style.display = 'none'
        about_us_contener_two_V_img.style.display = 'block'
        clone_arrow_one.style.display = 'none'
        setTimeout(() => {
            defoult_height_two.style.height = 0 + 'px'

        }, 9);
    }


    for_entrepreneurs_contner_two_V_img.onclick = () => {

        defoult_height_three.style.display = 'block'
        for_entrepreneurs_contner_two_V_img.style.display = 'none'
        clone_arrow_two.style.display = 'block'
        setTimeout(() => {
            defoult_height_three.style.height = 30 + 'px'

        }, 9);
    }


    clone_arrow_two.onclick = () => {
        defoult_height_three.style.display = 'none'
        for_entrepreneurs_contner_two_V_img.style.display = 'block'
        clone_arrow_two.style.display = 'none'
        setTimeout(() => {
            defoult_height_three.style.height = 0 + 'px'

        }, 9);
    }

}
two_var()