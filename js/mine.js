
let body = document.querySelector('body')
let body_html = document.querySelector('.body_html')
let box_forms = document.querySelector('.box_forms')

// кастомный видос
let vid_glob = document.querySelector('.box_2')
let vid = document.querySelector('.box_2 video')
let vid_click = document.querySelector('.box_2 .player_play')
vid_glob.addEventListener('click', vidos)
vid.addEventListener('click', vidos)
vid_click.addEventListener('click', vidos)

function vidos() { // кастомный видио плеер
    if (vid.paused) {
        vid.play(); 
        vid_click.style.opacity = "0";
    }else {
        vid.pause(); 
        vid_click.style.opacity = "0.5";
    }
}

// кастомная форма
let box_2_form = document.querySelector('.box_2 .box_2_cont button')
let form_box = document.querySelector('.box_forms .box_2_form')
box_2_form.addEventListener('click', ()=>{ // зависит от ширины 
    if (window.innerWidth > 650) {
        if (form_box.style.display == 'flex') {
            form_box.style.display = 'none'
            body.style.overflow = 'auto'
            body_html.style.opacity = '1'
            box_forms.style.display = 'none'
            box_forms.style.zIndex = ''
            
        }else {
            form_box.style.display = 'flex'
            body.style.overflow = 'hidden' 
            body_html.style.opacity = '0.2'
            box_forms.style.display = 'block'
            box_forms.style.zIndex = '1'

        }
    }
    if (window.innerWidth <= 650) {
        if (form_box.style.display == 'grid') {
            form_box.style.display = 'none'
            body.style.overflow = 'auto'
            body_html.style.opacity = '1'
            box_forms.style.zIndex = ''
            box_forms.style.display = 'none'
        }else {
            form_box.style.display = 'grid'
            body.style.overflow = 'hidden'  
            body_html.style.opacity = '0.2'
            box_forms.style.zIndex = '1'
            box_forms.style.display = 'block'
        }
    }
    
    
})
let box_2_crest = document.querySelector('.box_2_form .crest_form')
box_2_crest.addEventListener('click', ()=>{
    form_box.style.display = 'none'
    body.style.overflow = 'auto'
    body_html.style.opacity = '1'
    box_forms.style.zIndex = ''
    box_forms.style.display = 'none'
})

let form = document.querySelector('.box_form form')

let hello = (event) => { // кнопка записи формы  - - - - -
    event.preventDefault()
    let inps = document.querySelectorAll('.box_form input')
    let values = {}
    inps.forEach(item => {
        let { name, value } = item;
        values[name] = value
    })
    console.log(values);
    for (let item of inps) {
        item.value = ''
    }
    // let json = JSON.stringify(values)
    // console.log(json);
    // console.log(JSON.parse(json));
    
}

form.addEventListener('submit',hello) // кнопка записи формы  - - - - -





// let form_btn = document.querySelector('form .btn')
// form_btn.addEventListener('submit',(eve)=>{
//     eve.preventDefault()
// })


// кастомная форма - 2
let box_2_form_form = document.querySelector('.box_forms .box_2_form form .btn')
let box_2_ten = document.querySelector('.box_forms .box_2_ten')
let crest_ten = document.querySelector('.box_forms .box_2_ten .crest_ten')

// проверка на наличие текста
let box_2_form_name = document.querySelector('.box_forms .box_2_form form .name')
let box_2_form_email = document.querySelector('.box_forms .box_2_form form .email')
let box_2_form_tel = document.querySelector('.box_forms .box_2_form form .tel')

function off_ten() { // форма 2
    box_2_ten.style.display = 'none'
    body.style.overflow = 'auto'
    body_html.style.opacity = '1'
    box_forms.style.zIndex = ''
    box_forms.style.display = 'none'
}

box_2_form_form.addEventListener('click', ()=>{ // проверка на наличие текста
    if (box_2_form_name.value.trim().length > 0) {
        if (box_2_form_email.value.trim().length > 0) {
            if (box_2_form_tel.value.trim().length > 0) {
                body.style.overflow = 'hidden'
                box_2_ten.style.display = 'block'
                form_box.style.display = 'none'
                body_html.style.opacity = '0.2'
                box_forms.style.zIndex = '1'
                box_forms.style.display = 'block'
                setTimeout(off_ten, 10000);
            }
        }
    }
    
    
})
crest_ten.addEventListener('click', ()=>{ // закрытие 2 окна формы
    box_2_ten.style.display = 'none'
    body.style.overflow = 'auto'
    body_html.style.opacity = '1'
    box_forms.style.zIndex = ''
    box_forms.style.display = 'none'
})

// block - 9 * * * * * * * * * * * * *

let btn_tsa = document.querySelector('.btn_tsa')
btn_tsa.addEventListener('click',()=>{
    let tbt = document.querySelector('.text_block_info .box_text_1 .text_span_and')
    let toc = document.querySelector('.text_block_info .box_text_1 .toc')
    let btn_tsa_p = document.querySelector('.text_block_info .btn_tsa p')
    let btn_tsa_img = document.querySelector('.text_block_info .btn_tsa img')
    if (tbt.style.display == 'block') { // скрыть
        toc.style.display = ''
        tbt.style.display = 'none'
        btn_tsa_p.innerHTML = 'Подробнее'
        btn_tsa_img.style.transform = 'rotate(0deg)'
    }else { // показать 
        toc.style.display = 'none'
        tbt.style.display = 'block'
        btn_tsa_p.innerHTML = 'Скрыть'
        btn_tsa_img.style.transform = 'rotate(180deg)'
    }
})
// transform: rotate(180deg);

// block - 12 * * * * * * * * * * * * *

let form_2 = document.querySelector('.box_forms_2 form')

let hello_2 = (event) => { // кнопка записи формы  - - - - -
    event.preventDefault()
    let inps = document.querySelectorAll('.box_forms_2 input')
    let values = {}
    inps.forEach(item => {
        let { name, value } = item;
        values[name] = value
    })
    console.log(values);
    for (let item of inps) {
        item.value = ''
    }    
}

form_2.addEventListener('submit',hello_2) // кнопка записи формы  - - - - -






