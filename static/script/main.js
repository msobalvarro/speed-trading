const $ = (selector = '') => document.querySelector(selector)

$('#openCondiciones').addEventListener('click', () => {
    $('#modalCondiciones').classList.toggle('hidden')
})

$('#closeCondiciones').addEventListener('click', () => {
    $('#modalCondiciones').classList.toggle('hidden')
})

$('#year').innerHTML = new Date().getFullYear()