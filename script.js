// Show back-to-top button when scrolling
window.onscroll = function() {
   const backToTop = document.querySelector('.back-to-top');
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
       backToTop.style.display = 'block';
   } else {
       backToTop.style.display = 'none';
   }
};
