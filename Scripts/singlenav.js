function showTab(tabName)
{
   const tabs = document.querySelectorAll('.tab-content');
   const buttons = document.querySelectorAll('.tab-button');
   tabs.forEach(tab =>
   {
      tab.classList.remove('active')
   });
   buttons.forEach(button =>
   {
      button.classList.remove('active')
   });
   document.getElementById(tabName).classList.add('active');
   event.target.classList.add('active')
}