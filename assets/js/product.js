$(document).ready(function() {
    $('#imageGallery, #imageGalleryQuick').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        vertical: true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });  
    
    $(".product-reviews .single-review:not(:last-child)").css("border-bottom", "1px solid #E2E4FD");
});