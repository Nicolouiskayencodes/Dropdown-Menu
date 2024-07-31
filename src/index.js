import './style.css';

const dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(element => {
  const dropdownToggle = element.querySelector('.dropdown-toggle');
  const dropdownContent = element.querySelector('.dropdown-content');
  dropdownToggle.addEventListener('click', function(){
    dropdown.forEach(drop => {
      const otherDropdownContent = drop.querySelector('.dropdown-content');
      otherDropdownContent.style.display = 'none';
    })
    if (dropdownContent.style.display === 'none'){
      dropdownContent.style.display = 'block';
      const buttons = dropdownContent.querySelectorAll('button');
      console.log(buttons);
      buttons.forEach(button => {
        button.addEventListener('click', function(){
          dropdownContent.style.display = 'none';
        })
      })
    } else {
      dropdownContent.style.display = 'none';
    }
  })
});