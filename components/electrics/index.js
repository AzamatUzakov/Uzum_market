let categories = document.querySelectorAll('#catigoria_hrefs')
let all_catigories_btn = document.querySelector(".all")
let main_href = document.querySelector('.main')
let electriks_href = document.querySelector('.electriks')
console.log(all_catigories_btn);



categories.forEach(btn => {
    btn.onclick = () => {
        categories.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
    }
});
all_catigories_btn.onclick = () => {
    electriks_href.remove()
}
main_href.onclick = () => {
location.assign('/')
}
