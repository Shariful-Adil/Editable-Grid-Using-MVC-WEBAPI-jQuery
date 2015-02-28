$(function () {


    //--Vertical collapsible navigation------------------------//
    var menu_ul = $('.vmenu > li > ul'),
	           menu_a = $('.vmenu > li > a');

    menu_ul.hide();

    menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('mactive')) {
            menu_a.removeClass('mactive');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('mactive').next().stop(true, true).slideDown('normal');
        }
        else {
            $(this).removeClass('mactive');
            $(this).next().stop(true, true).slideUp('normal');
        }
    });



    //===== Animated dropdown for the right links group on breadcrumbs line =====//

    $('.breadLinks ul li').click(function () {
        $(this).children("ul").slideToggle(150);
    });
    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("has"))
            $('.breadLinks ul li').children("ul").slideUp(150);
    });


    //===== Form elements styling =====//

    $("select, .check, .check :checkbox, input:radio, input:file").uniform();


    //===== Chosen plugin =====//

    $(".select").chosen(); 
	
	//===== File manager =====//	
	
	//===== ShowCode plugin for <pre> tag =====//

	/* $('.code').sourcerer('js html css php'); */ // Display all languages
	
	/* $(".loginPic").hover(
		function() { 
		
		$('.logleft, .logback').animate({left:10, opacity:1},200); 
		$('.logright').animate({right:10, opacity:1},200); },
		
		function() { 
		$('.logleft, .logback').animate({left:0, opacity:0},200);
		$('.logright').animate({right:0, opacity:0},200); }
	); */
	
	//===== WYSIWYG editor =====//
	
	/* $("#editor").cleditor({
		width:"100%", 
		height:"250px",
		bodyStyle: "margin: 10px; font: 12px Arial,Verdana; cursor:text",
		useCSS:true
	}); */
	
	//===== Dual select boxes =====//
	/* $.configureBoxes(); */	
	
	//===== Autotabs. Inline data rows =====//

	/* $('.onlyNums input').autotab_magic().autotab_filter('numeric');
	$('.onlyText input').autotab_magic().autotab_filter('text');
	$('.onlyAlpha input').autotab_magic().autotab_filter('alpha');
	$('.onlyRegex input').autotab_magic().autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
	$('.allUpper input').autotab_magic().autotab_filter({ format: 'alphanumeric', uppercase: true });
	
	 */
	//===== Masked input =====//
	/* $.mask.definitions['~'] = "[+-]";
	$(".maskDate").mask("99/99/9999",{completed:function(){alert("Callback when completed");}});
	$(".maskPhone").mask("(999) 999-9999");
	$(".maskPhoneExt").mask("(999) 999-9999? x99999");
	$(".maskIntPhone").mask("+33 999 999 999");
	$(".maskTin").mask("99-9999999");
	$(".maskSsn").mask("999-99-9999");
	$(".maskProd").mask("a*-999-a999", { placeholder: " " });
	$(".maskEye").mask("~9.99 ~9.99 999");
	$(".maskPo").mask("PO: aaa-999-***");
	$(".maskPct").mask("99%");
	 */
	
	//===== Tags =====//	
	/* $('.tags').tagsInput({width:'100%'}); */
	
	
	//===== Input limiter =====//
	/* $('.lim').inputlimiter({
		limit: 100,
		boxId: 'limitingtext',
		boxAttach: false
	});
	 */
	
	//===== Placeholder =====//
	
	/* $('input[placeholder], textarea[placeholder]').placeholder();
	 */
	
	//===== Autogrowing textarea =====//
	
	/* $('.auto').elastic();
	$('.auto').trigger('update');
 */

	//===== Full width sidebar dropdown =====//
	
	$('.fulldd li').click(function () {
		$(this).children("ul").slideToggle(150);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("has"))
		$('.fulldd li').children("ul").slideUp(150);
	});
	
	
	//===== Top panel search field =====//
	
	/* $('.userNav a.search').click(function () {
		$('.topSearch').fadeToggle(150);
	});
	 */
	
	//===== 2 responsive buttons (320px - 480px) =====//
	
	$('.iTop').click(function () {
		$('#sidebar').slideToggle(100);
	});
	
	$('.iButton').click(function () {
		$('.altMenu').slideToggle(100);
	});



	//===== Tabs =====//
		
	$.fn.contentTabs = function(){ 
	
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("activeTab").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	
		$("ul.tabs li").click(function() {
			$(this).parent().parent().find("ul.tabs li").removeClass("activeTab"); //Remove any "active" class
			$(this).addClass("activeTab"); //Add "active" class to selected tab
			$(this).parent().parent().find(".tab_content").hide(); //Hide all tab content
			var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
			$(activeTab).show(); //Fade in the active content
			return false;
		});
	
	};
	/* $("div[class^='widget']").contentTabs(); */ //Run function on any div with class name of "Content Tabs"


	//===== Dynamic data table =====//
	
	/* oTable = $('.dTable').dataTable({
		"bJQueryUI": false,
		"bAutoWidth": false,
		"sPaginationType": "full_numbers",
		"sDom": '<"H"fl>t<"F"ip>'
	});
	 */

	//===== Dynamic table toolbars =====//		
	
	$('#dyn .tOptions').click(function () {
		$('#dyn .tablePars').slideToggle(200);
	});	
	
	$('#dyn2 .tOptions').click(function () {
		$('#dyn2 .tablePars').slideToggle(200);
	});	
	
	
	$('.tOptions').click(function () {
		$(this).toggleClass("act");
	});
	

	//== Adding class to :last-child elements ==//
		
	/* $(".subNav li:last-child a, .formRow:last-child, .userList li:last-child, table tbody tr:last-child td, .breadLinks ul li ul li:last-child, .fulldd li ul li:last-child, .niceList li:last-child").addClass("noBorderB")
 */
	
	//===== Add classes for sub sidebar detection =====//
	
	if ($('div').hasClass('secNav')) {
		$('#sidebar').addClass('with');
		//$('#content').addClass('withSide');
	}
	else {
		$('#sidebar').addClass('without');
		$('#content').css('margin-left','100px');//.addClass('withoutSide');
		$('#footer > .wrapper').addClass('fullOne');
		};


	//===== Collapsible elements management =====//
	
	$('.exp').collapsible({
		defaultOpen: 'current',
		cookieName: 'navAct',
		cssOpen: 'subOpened',
		cssClose: 'subClosed',
		speed: 200
	});

	$('.opened').collapsible({
		defaultOpen: 'opened,toggleOpened',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});
	
	$('.closed').collapsible({
		defaultOpen: '',
		cssOpen: 'inactive',
		cssClose: 'normal',
		speed: 200
	});
	
	
	//===== Accordion =====//		
	
	$('div.menu_body:eq(0)').show();
	$('.acc .whead:eq(0)').show().css({color:"#2B6893"});
	
	$(".acc .whead").click(function() {	
		$(this).css({color:"#2B6893"}).next("div.menu_body").slideToggle(200).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().css({color:"#404040"});
	});



	//===== Breadcrumbs =====//
	
	$('#breadcrumbs').xBreadcrumbs();
	
	
		//===== Sparklines =====//
	
	/* $('.balBars').sparkline(
	'html', {type: 'bar', barColor: '#db6464', height: '18px'}
	 ); */
	 

	//===== User nav dropdown =====//		
	
	$('a.leftUserDrop').click(function () {
		$('.leftUser').slideToggle(200);
	});
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("leftUserDrop"))
		$(".leftUser").slideUp(200);
	});
	
	
	//===== Tooltips =====//

	/* $('.tipN').tipsy({gravity: 'n',fade: true, html:true});
	$('.tipS').tipsy({gravity: 's',fade: true, html:true});
	$('.tipW').tipsy({gravity: 'w',fade: true, html:true});
	$('.tipE').tipsy({gravity: 'e',fade: true, html:true}); */
	
	


	//===== Spinner options =====//
	
	var itemList = [
		{url: "http://ejohn.org", title: "John Resig"},
		{url: "http://bassistance.de/", title: "J&ouml;rn Zaefferer"},
		{url: "http://snook.ca/jonathan/", title: "Jonathan Snook"},
		{url: "http://rdworth.org/", title: "Richard Worth"},
		{url: "http://www.paulbakaus.com/", title: "Paul Bakaus"},
		{url: "http://www.yehudakatz.com/", title: "Yehuda Katz"},
		{url: "http://www.azarask.in/", title: "Aza Raskin"},
		{url: "http://www.karlswedberg.com/", title: "Karl Swedberg"},
		{url: "http://scottjehl.com/", title: "Scott Jehl"},
		{url: "http://jdsharp.us/", title: "Jonathan Sharp"},
		{url: "http://www.kevinhoyt.org/", title: "Kevin Hoyt"},
		{url: "http://www.codylindley.com/", title: "Cody Lindley"},
		{url: "http://malsup.com/jquery/", title: "Mike Alsup"}
	];

	var opts = {
		's1': {decimals:2},
		's2': {stepping: 0.25},
		's3': {currency: '$'},
		's4': {},
		's5': {
			//
			// Two methods of adding external items to the spinner
			//
			// method 1: on initalisation call the add method directly and format html manually
			init: function(e, ui) {
				for (var i=0; i<itemList.length; i++) {
					ui.add('<a href="'+ itemList[i].url +'" target="_blank">'+ itemList[i].title +'</a>');
				}
			},

			// method 2: use the format and items options in combination
			format: '<a href="%(url)" target="_blank">%(title)</a>',
			items: itemList
		}
	};

	for (var n in opts)
		$("#"+n).spinner(opts[n]);

	$("button").click(function(e){
		var ns = $(this).attr('id').match(/(s\d)\-(\w+)$/);
		if (ns != null)
			$('#'+ns[1]).spinner( (ns[2] == 'create') ? opts[ns[1]] : ns[2]);
	});
	


	//===== jQuery UI dialog =====//
	
    $('#dialog').dialog({
        autoOpen: false,
        width: 400,
        buttons: {
            "Gotcha": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
	
    // Dialog Link
    $('#dialog_open').click(function () {
        $('#dialog').dialog('open');
        return false;
    });
	
	// Dialog
    $('#formDialog').dialog({
        autoOpen: false,
        width: 400,
        buttons: {
            "Nice stuff": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
	
    // Dialog Link
    $('#formDialog_open').click(function () {
        $('#formDialog').dialog('open');
        return false;
    });
	
	// Dialog
    $('#customDialog').dialog({
        autoOpen: false,
        width: 650,
        buttons: {
            "Very cool!": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
	
    // Dialog Link
    $('#customDialog_open').click(function () {
        $('#customDialog').dialog('open');
        return false;
    });

	
	
	//===== Vertical sliders =====//
	
	$( "#eq > span" ).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true,
			orientation: "vertical"
		});
	});
	
	
	//===== Modal =====//
	
    $('#dialog-modal').dialog({
		autoOpen: false, 
		width: 400,
		modal: true,
		buttons: {
				"Yep!": function() {
					$( this ).dialog( "close" );
				}
			}
		});
		
    $('#modal_open').click(function () {
        $('#dialog-modal').dialog('open');
        return false;
    });
	
	
	//===== jQuery UI stuff =====//
	
	// default mode
/* 	$('#progress1').anim_progressbar(); */
	
	// from second #5 till 15
	var iNow = new Date().setTime(new Date().getTime() + 5 * 1000); // now plus 5 secs
	var iEnd = new Date().setTime(new Date().getTime() + 15 * 1000); // now plus 15 secs
	/* $('#progress2').anim_progressbar({start: iNow, finish: iEnd, interval: 1}); */
	
	// Progressbar
    $("#progress").progressbar({
        value: 80
    });
	
    // Modal Link
    $('#modal_link').click(function () {
        $('#dialog-message').dialog('open');
        return false;
    });
	
	// Datepicker
    $('.inlinedate').datepicker({
        inline: true,
		showOtherMonths:true
    });
	
	$( ".datepicker" ).datepicker({ 
		defaultDate: +7,
		showOtherMonths:true,
		autoSize: true,
		appendText: '(dd-mm-yyyy)',
		dateFormat: 'dd-mm-yy'
	});	
	
	$(function() {
			var dates = $( "#fromDate, #toDate" ).datepicker({
				defaultDate: "+1w",
				changeMonth: false,
				showOtherMonths:true,
				numberOfMonths: 3,
				onSelect: function( selectedDate ) {
					var option = this.id == "fromDate" ? "minDate" : "maxDate",
						instance = $( this ).data( "datepicker" ),
						date = $.datepicker.parseDate(
							instance.settings.dateFormat ||
							$.datepicker._defaults.dateFormat,
							selectedDate, instance.settings );
					dates.not( this ).datepicker( "option", option, date );
				}
			});
		});
	
	
	$( ".uSlider" ).slider(); /* Usual slider */
	
	
	$( ".uRange" ).slider({ /* Range slider */
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#rangeAmount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#rangeAmount" ).val( "$" + $( ".uRange" ).slider( "values", 0 ) +" - $" + $( ".uRange" ).slider( "values", 1 ));
	

	$( ".uMin" ).slider({ /* Slider with minimum */
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( "#minRangeAmount" ).val( "$" + ui.value );
		}
	});
	$( "#minRangeAmount" ).val( "$" + $( ".uMin" ).slider( "value" ) );


	$( ".uMax" ).slider({ /* Slider with maximum */
		range: "max",
		min: 1,
		max: 100,
		value: 20,
		slide: function( event, ui ) {
			$( "#maxRangeAmount" ).val( ui.value );
		}
	});
	$( "#maxRangeAmount" ).val( $( ".uMax" ).slider( "value" ) );	




	//===== Add class on #content resize. Needed for responsive grid =====//
	
	$('#content').resize(function () {
	  var width = $(this).width();
		if (width < 769) {
			$(this).addClass('under');
		}
		else { $(this).removeClass('under') }
	}).resize(); // Run resize on window load
	
	
	//===== Button for showing up sidebar on iPad portrait mode. Appears on right top =====//
				
	$("ul.userNav li a.sidebar").click(function() { 
		$(".secNav").toggleClass('display');
});



	




	
		//Nice scroll
		$("html").niceScroll();//Nice scroll

		//date range picker
		$('#rangeBa, #rangeBb').daterangepicker({ dateFormat: "dd-mm-yy" });	
		
		$(".collapse").collapse()
	
});

	
