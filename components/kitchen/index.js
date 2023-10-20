let categories = document.querySelectorAll('#catigoria_hrefs')
let all_catigories_btn = document.querySelector(".all")
let main_href = document.querySelector('.main')
let electriks_href = document.querySelector('.kitchen')


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
    let orders_opt = document.createElement('option')
    let added_opt = document.createElement('option')

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

    title_sort_cont_h1.innerHTML = "Кухня"
    sort_box_p.innerHTML = "Сортировка"
    cheap_opt.innerHTML = "Подешевле"
    moreExpensive_opt.innerHTML = "Подароже"
    highRating_opt.innerHTML = "Высокий рейтинг"
    orders_opt.innerHTML = "Много заказов"
    added_opt.innerHTML = "Добавлены не давно"
    filter_p.innerHTML = "Фильтры"

    filter_img.src = "/public/filter.png"


    selected.id = "sort";
    selected.name = "sort";

    cheap_opt.value = "chaper";
    cheap_opt.text = "Подешевле";

    moreExpensive_opt.value = "moreExspensive";
    moreExpensive_opt.text = "Подароже";

    highRating_opt.value = "highRating";
    highRating_opt.text = "Высокий рейтинг";

    orders_opt.value = "orders";
    orders_opt.text = "Много заказов";

    added_opt.value = "added";
    added_opt.text = "Добавлены не давно";

    sort_cont.append(title_sort_cont, hr)
    title_sort_cont.append(title_sort_cont_h1, sort_box)
    sort_box.append(sort_box_p, selected, filter_box)
    selected.append(cheap_opt, moreExpensive_opt, highRating_opt, orders_opt, added_opt)
    filter_box.append(filter_img, filter_p)
}
sort()





categories.forEach(btn => {
    btn.onclick = () => {
        categories.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
    }
});
all_catigories_btn.onclick = () => {
    electriks_href.remove()
    /*     localStorage.setItem("all_catigor", location.assign('/components/technic/index.html'))
     */
}


main_href.onclick = () => {
    location.assign('/')
}
window.onload = function () {
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right,#dadae5  ${percent1}% , #7000ff ${percent1}% , #7000ff ${percent2}%, #dadae5 ${percent2}%)`;
}
