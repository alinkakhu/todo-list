
const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const errorMes = document.querySelector('.error')
let newTask;
function prepare(){
  btn.addEventListener('click',  addOption)
}
function addOption(e){
  
    e.preventDefault()
const value = input.value
if(value){
newTask = document.createElement('li')
  newTask.textContent = value;
 
  ul.appendChild(newTask)
  const div = document.createElement('div');
  newTask.appendChild(div)
  const del= document.createElement('button')
  newTask.classList.add('tools')
  del.classList.add('delete')
  div.appendChild(del)
  del.innerHTML = '<i class="fas fa-times"></i>'
  
  const complete = document.createElement('button')
  div.appendChild(complete)
  complete.innerHTML ='<i class="fas fa-check"></i>'
  complete.classList.add('complete')
  const edit = document.createElement('button')
  div.appendChild(edit)
  edit.textContent = 'EDIT'
  edit.classList.add('edit')
 input.value = ""
 errorMes.textContent=""
 complete.addEventListener('click',function(e){
  e.target.closest('li').classList.add('done')
 })
 del.addEventListener('click',function(e){
 console.log('fsjsfd')
 e.target.closest('li').remove()
const allTask = document.querySelectorAll('li')
if(allTask.length === 0){
  errorMes.textContent = 'Nie masz zadań'
}
 })
 edit.addEventListener('click',function(e){
   document.querySelector('.popup').style.display ='flex'
   const correct = document.querySelector('.popup-tresc')
   const todo = correct.value
   console.log(todo)
 
   document.querySelector('.zgoda').addEventListener('click',function(){
     e.target.closest('li').firstChild.textContent = correct.value;
     todo.textContent = ''
     document.querySelector('.popup').style.display ='none'
   })
   document.querySelector('.ann').addEventListener('click',function(){
    document.querySelector('.popup').style.display ='none'
   })
 })
}
else {
  errorMes.textContent = "Wpisz zadanie!"
 } 

}




btn.addEventListener('click', addOption)
