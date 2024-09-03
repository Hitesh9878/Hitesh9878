function opentab(tabName) {
  const tabLinks = document.querySelectorAll(".tab-links");
  tabLinks.forEach(link => link.classList.remove("active-link"));
  const clickedTab = document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`);
  clickedTab.classList.add("active-link");
  const tabContents = document.querySelectorAll(".tab-contents");
  tabContents.forEach(content => content.style.display = "none");
  const targetContent = document.getElementById(tabName);
  targetContent.style.display = "block";
}
function openPopup(imageUrl) {
  var popup = document.getElementById('popup');
  var popupImage = document.getElementById('popupImage');
  popup.style.display = 'block';
  popupImage.src = imageUrl;
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycby0OYvSETLZyzQ6Dwpvk8l_dh4-3Q_yVOpu0nAsoOrTpGOI12eMvacN4HX4_Vc46ILqXw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
          msg.innerHTML= ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  function goToHomePage() {
    // Redirect to the home page
    window.location.href = "#header";
  }