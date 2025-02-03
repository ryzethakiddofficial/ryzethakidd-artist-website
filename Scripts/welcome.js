document.addEventListener('DOMContentLoaded', () =>
   {
      const darkModePreference = localStorage.getItem('darkMode');
      const welcomeScreen = document.getElementById('welcome-screen');
      const welcomeMessage = document.getElementById('welcome-message');
      if (darkModePreference === 'enabled')
      {
         document.body.classList.add('dark-mode');
         welcomeScreen.classList.add('dark-mode')
      }
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited)
      {
         welcomeMessage.textContent = "Welcome!";
         localStorage.setItem('hasVisited', 'true')
      }
      else
      {
         welcomeMessage.textContent = "Welcome Back!"
      }
      setTimeout(() =>
      {
         welcomeScreen.classList.add('fade-out');
         setTimeout(() =>
         {
            welcomeScreen.style.display = 'none'
         }, 1000)
      }, 2000)
   });
   window.onload = function ()
   {
      setTimeout(function ()
      {
         document.getElementById('welcome-screen').classList.add('fade-out')
      }, 3700)
   }