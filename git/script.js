const btn = document.querySelector('button')
const div = document.querySelector('.item2')
btn.addEventListener('click', function(){
    console.log('hi')
div.classList.toggle('hide')
})