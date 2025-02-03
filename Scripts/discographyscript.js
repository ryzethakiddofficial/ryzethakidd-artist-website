document.querySelectorAll('.nav-btn').forEach(button =>
   {
      button.addEventListener('click', () =>
      {
         const target = button.getAttribute('data-target');
         const activeSection = document.querySelector('.release-section.active');
         if (activeSection)
         {
            activeSection.style.opacity = 0;
            setTimeout(() =>
            {
               activeSection.classList.remove('active');
               activeSection.style.display = 'none';
               document.querySelectorAll('.nav-btn').forEach(btn =>
               {
                  btn.classList.remove('active')
               });
               button.classList.add('active');
               const newSection = document.getElementById(target);
               newSection.style.display = 'block';
               setTimeout(() =>
               {
                  newSection.classList.add('active');
                  newSection.style.opacity = 1
               }, 50)
            }, 500)
         }
         else
         {
            const newSection = document.getElementById(target);
            newSection.classList.add('active');
            newSection.style.display = 'block';
            newSection.style.opacity = 1;
            button.classList.add('active')
         }
      })
   })