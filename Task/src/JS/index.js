const btn = document.getElementById('send-btn');

function setButton() {
  const firstName = document.getElementById('first-name').value.length,
  lastName = document.getElementById('last-name').value.length,
  email = document.getElementById('email').value.length,
  adress = document.getElementById('adress').value,
  zipCode = document.getElementById('zip-code').value.length,
  city = document.getElementById('city').value.length,
  state = document.getElementById('state').value.length,
  country = document.getElementById('country').value,
  cardNum = document.getElementById('card-number').value.length,
  cardHolder = document.getElementById('card-holder').value.length,
  cvv = document.getElementById('cvv').value.length;

  if(firstName == 0 || lastName == 0 || adress == 0 || email == 0 || zipCode == 0
  || city == 0 || state == 0 || country == 'Select country' || cardNum == 0 || cardHolder == 0
  || cvv == 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false
  }
}

function toggleMobileMenu() {
  const menuList = document.getElementById('mobile-menu-list');
  
  if(menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
}