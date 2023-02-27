const types = ['load', 'resize'];

types.forEach(function(type) {
   window.addEventListener(type, () => {

      let elem = document.getElementById('kw-wrapper');
      let wh = window.innerHeight;

      elem.style.height = wh + 'px';

   });
});

