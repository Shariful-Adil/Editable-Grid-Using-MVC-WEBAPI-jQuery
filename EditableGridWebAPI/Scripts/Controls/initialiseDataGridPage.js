$(function() {
	//--Vertical collapsible navigation------------------------//
	 var menu_ul = $('.vmenu > li > ul'),
	           menu_a  = $('.vmenu > li > a');
	    
	    menu_ul.hide();
	
	    menu_a.click(function(e) {
	        e.preventDefault();
	        if(!$(this).hasClass('mactive')) {
	            menu_a.removeClass('mactive');
	            menu_ul.filter(':visible').slideUp('normal');
	            $(this).addClass('mactive').next().stop(true,true).slideDown('normal');
	        } 
			else {
	            $(this).removeClass('mactive');
	            $(this).next().stop(true,true).slideUp('normal');
	        }
	    });
		//Nice scroll
		$("html").niceScroll();//Nice scroll

		
	$('.breadLinks ul li').click(function () {
		$(this).children("ul").slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("has"))
		$('.breadLinks ul li').children("ul").slideUp(150);
	});
	
	
	
//	$('.fulldd li').click(function () {
//		$(this).children("ul").slideToggle(150);
//	});
//	$(document).bind('click', function(e) {
//		var $clicked = $(e.target);
//		if (! $clicked.parents().hasClass("has"))
//		$('.fulldd li').children("ul").slideUp(150);
//	});
//	
	
	//===== Form elements styling =====//
	
//	$("select, .check, .check :checkbox, input:radio, input:file").uniform();

//oTable = $('.dTable').dataTable({
//    "bJQueryUI": false,
//    "bAutoWidth": false,
//    "sPaginationType": "full_numbers",
//    "sDom": '<"H"fl>t<"F"ip>'
//});
//		
});

	
