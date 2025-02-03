document.addEventListener('DOMContentLoaded', function ()
{
   let secretCode = 'ryze';
   let input = '';
   window.addEventListener('keydown', function (event)
   {
      input += event.key.toLowerCase();
      if (input.includes(secretCode))
      {
         window.location.href = 'secret.html'
      }
      if (input.length > secretCode.length)
      {
         input = input.slice(-secretCode.length)
      }
   })
})