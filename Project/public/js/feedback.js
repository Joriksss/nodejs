const phoneMask = IMask(document.getElementById('phone'), {
    mask: '+{7} (000) 000-00-00'
  });
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const inputField = document.getElementById('inputField');
    inputField.value = '';
});
  