const checkboxes  = document.querySelectorAll('input[type="radio"]');
const  removeValidClass  =() =>{
    checkboxes.forEach(checkbox =>checkbox.parentElement.classList.remove('valid') );
}
checkboxes.forEach(checkbox => {
  checkbox.parentElement.addEventListener('click', ()=> {
      removeValidClass();
      checkbox.parentElement.classList.add('valid');
      // checkbox.checked
  })
  checkbox.addEventListener('input', (evt=>{
    if(evt.target.checked) {
      removeValidClass();
      evt.target.parentElement.classList.add('valid');
    }
  }))
})
console.log(checkboxes);

