document.addEventListener("DOMContentLoaded", function ()
{
   const menuBtn = document.querySelector(".menu-btn");
   const navLinks = document.querySelector(".navbar .nav-links");
   if (!menuBtn || !navLinks)
   {
      console.error("Menu elements not found!");
      return
   }
   menuBtn.addEventListener("click", function (event)
   {
      navLinks.classList.toggle("active");
      event.stopPropagation();
      document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : ""
   });
   document.addEventListener("click", function (event)
   {
      if (!menuBtn.contains(event.target) && !navLinks.contains(event.target))
      {
         navLinks.classList.remove("active");
         document.body.style.overflow = ""
      }
   });
   navLinks.addEventListener("click", function (event)
   {
      if (!event.target.closest("a"))
      {
         navLinks.classList.remove("active");
         document.body.style.overflow = ""
      }
   })
})