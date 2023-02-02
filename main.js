
const types = ['load', 'resize'];

 types.forEach(function(type){
   window.addEventListener(type, () => {
 
     let elem = document.getElementById('kw-wrapper');
     let wh = window.innerHeight;
 
     elem.style.height = wh + 'px';
 
   });
 });
 
 
 
 // //this needs to be cleaned up
 // if (!window.suppress) {
 //   if($('.accordion-n').length){
 //     var allPanels = $('.accordion-n > dd');
 //     var allLines = $('.accordion-n > dt'); 
 //     var allButton = $('.accordion-n > dt > a > span'); 
 //     $('.accordion-n > dt > a').click(function() {
 //         $this = $(this);
 //         $target =  $this.parent().next();
 //         $button = $this.find('span');
 //         if($this.parent().hasClass('open')){
 //           $this.parent().removeClass('open');
 //         }
 //         if(!$target.hasClass('active')){
 //            allPanels.removeClass('active').slideUp();
 //            allButton.removeClass('rotate');
 //            allLines.removeClass('open')
 //            $target.addClass('active').slideDown();
 //            $button.addClass('rotate');
 //            $this.parent().addClass('open').siblings().removeClass('open');
 //         }
 //         else if($target.hasClass('active')){
 //            allPanels.removeClass('active').slideUp();
 //            allButton.removeClass('rotate');
 //         }
 //         
 //       return false;
 //     });
 //   }
 // }