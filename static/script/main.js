const $ = (selector = '') => document.querySelector(selector)

$('#closer').addEventListener('click', () => {
    $('#modalRegister').classList.toggle('hidden')
})

$('#open').addEventListener('click', () => {
    $('#modalCondiciones').classList.toggle('hidden')
})

$('#openUpgrade').addEventListener('click', () => {
    $('#modalUpgrade').classList.toggle('hidden')
})

$('#closerUpgrade').addEventListener('click', () => {
    $('#modalUpgrade').classList.toggle('hidden')
})


$('#openCondiciones').addEventListener('click', () => {
    $('#modalCondiciones').classList.toggle('hidden')
})

$('#closeCondiciones').addEventListener('click', () => {
    $('#modalCondiciones').classList.toggle('hidden')
})

$('#openRegisterFromConditions').addEventListener('click', () => {
    $('#modalRegister').classList.toggle('hidden')
    $('#modalCondiciones').classList.toggle('hidden')
})


$('#year').innerHTML = new Date().getFullYear()