jQuery(document).ready(function(){
	jQuery("a[rel=lightbox]").colorbox();
	jQuery("a[rel=videobox]").colorbox({iframe:true,width:700,height:480, current: "Vídeo {current} de {total}"});
//	jQuery('#slider-default').nivoSlider({effect: 'fold', directionNav: true, controlNav: false, pauseTime: 5000, slices: 1, boxCols: 1, boxRows: 1});


jQuery('#slider-default').nivoSlider({
effect: 'fade',
directionNav: true,
controlNav: false,
pauseTime: 6000
  });
	jQuery('#iaccordion > div').hide();
  	jQuery('#iaccordion > h3').click(function() {
		var $nextDiv = jQuery(this).next();
		var $visibleSiblings = $nextDiv.siblings('div:visible');
		if ($visibleSiblings.length ) {
			$visibleSiblings.slideUp('slow', function() {
				$nextDiv.slideToggle('slow');
		  	});
		} else {
		   $nextDiv.slideToggle('slow');
		}
	});
	jQuery('#mycarousel').jcarousel({
        auto: 2,
        wrap: 'last',
        initCallback: mycarousel_initCallback
    });
});
jQuery(window).bind("load", function() {
	var maxHeight = 0;
	jQuery('.packthumb').each(function() {
		maxHeight = 0;
		jQuery('ul li', this).each(function () {
			maxHeight = jQuery(this).height() > maxHeight ?jQuery(this).height() : maxHeight;
		}).height(maxHeight);
    });
	maxHeight = 0;
	jQuery('#produtosMenu').each(function() {
		maxHeight = 0;
		jQuery('li', this).each(function () {
			maxHeight = jQuery(this).height() > maxHeight ?jQuery(this).height() : maxHeight;
		}).height(maxHeight);
    });
    maxHeight = 0;
	jQuery('.listagemProduto').each(function() {
		maxHeight = 0;
		jQuery('li', this).each(function () {
			maxHeight = jQuery(this).height() > maxHeight ?jQuery(this).height() : maxHeight;
		}).height(maxHeight);
    });
	
});
function mycarousel_initCallback(carousel){carousel.clip.hover(function(){carousel.stopAuto();},function(){carousel.startAuto();});};