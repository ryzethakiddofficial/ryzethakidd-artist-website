function openTab(tabName)
{
   const tabContents = document.querySelectorAll('.tab-content');
   const tabButtons = document.querySelectorAll('.tab-btn');
   tabContents.forEach(content => content.classList.remove('active'));
   tabButtons.forEach(btn => btn.classList.remove('active'));
   document.getElementById(tabName).classList.add('active');
   document.querySelector(`.tab-btn[onclick="openTab('${tabName}')"]`).classList.add('active')
}