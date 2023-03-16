let $modal = $('div.modal-dialog');
let break_lg = 992;
let has_lg = false;
$(window).on('resize', ()=>{
    let width = document.documentElement.scrollWidth;        
if(width >= break_lg && !($modal.hasClass('modal-lg'))){
    $modal.addClass('modal-lg');
    if($modal.has('modal-xl')){
        $modal.removeClass('modal-xl')
    }            
}
    
if(width < break_lg && !($modal.hasClass('modal-xl'))){
    $modal.addClass('modal-xl');
    if($modal.has('modal-lg')){
        $modal.removeClass('modal-lg')
    }            
}


});