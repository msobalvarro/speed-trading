const $ = (selector = '') => document.querySelector(selector)

$('#closer').addEventListener('click', () => {
    $('#modal').classList.toggle('hidden')
})

$('#open').addEventListener('click', () => {
    $('#modal').classList.toggle('hidden')
})


$('#year').innerHTML = new Date().getFullYear()