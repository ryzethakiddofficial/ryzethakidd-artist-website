function showPopup()
{
   const popup = document.getElementById("notice-popup");
   popup.style.display = "flex"
}

function closePopup()
{
   const popup = document.getElementById("notice-popup");
   popup.style.display = "none"
}
window.addEventListener("load", showPopup)