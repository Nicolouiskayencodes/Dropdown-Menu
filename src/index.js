import './style.css';

const dropdown = document.querySelectorAll('.dropdown');
console.log(dropdown);
dropdown.forEach(element => {
  const dropdownToggle = element.querySelector('.dropdown-toggle');
  const dropdownContent = element.querySelector('.dropdown-content');
  dropdownToggle.addEventListener('click', function(){
    if (dropdownContent.style.display === 'none'){
      dropdownContent.style.display = 'block';
    } else {
      dropdownContent.style.display = 'none';
    }
  })
});