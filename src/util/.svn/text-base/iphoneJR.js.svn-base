export const noScroll =  function(){

    document.addEventListener('touchmove', function (e) { 
        
        if($(e.target).parents('.g-scrollview').length >0||$(e.target).hasClass('g-scrollview')){
            e.stopPropagation();
            // e.preventDefault();
        }else{
            e.preventDefault();
        }
     }, false);


}