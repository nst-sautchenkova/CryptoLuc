$(document).ready(function () {
  $('.menu>ul>li').hover(
    function() {
      $('ul', this).slideDown();
    },
    function() {
      $('ul', this).slideUp();
    }
  );
});


//MODAL
$('.modal-block').on('click', function(){
	var	id =  this.id;
  $(".modal[data-id='#"+id+"']").toggleClass('open');
  $(".modal-ov").show("slow");
  $("body").addClass("open");
  
});

$(".close").click(function () {
	$(".modal-content").addClass('zoom');
	$(".modal-content.zoom").css({'transform':'scale(0)'});
	$(".modal-ov").hide("slow");
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('zoom');
		$(".modal-content").css({'transform':'scale(1)'});
	}
	setTimeout(func, 300);
	
});


$('#img-gall').on('click', function(){
  $("body").addClass("open-hidden");
});



//animate
AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
	
});

$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.js-animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
			// var elem = $(this);
			// startLine1(elem);
		}
	});
});
	

//	accordion
$(document).on("ready", function () {
	$(".faq-accordion .accordion").click(function () {
	if ($(this).hasClass('active')) {
        $(this).removeClass('active');
		$(this).parent().toggleClass('active');
		$(this).siblings("").hide("slow");
    } else {
        $(this).addClass('active');
		$(this).parent().toggleClass('active');
		$(this).siblings().show("slow");
    }
   
	});
	
});	


$(document).on("ready", function () {
	$("header .middle .reg-block").click(function () {
		$("header .middle .reg-block").toggleClass('open');
	});
	
});	

/*MENU*/
$(document).on("ready", function () {
    $("header .middle .menu .cd-nav-trigger").click(function () {
        $("header .middle .menu").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('header .middle .menu .bar').toggleClass('animate');
    });
});



//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('.spinner');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});
  
 
  
//change-value 
//.payer
$(document).on("ready", function () {
    $(".payer .change-value").click(function () {
        $(".payer .change-value").removeClass("active");
		$(this).addClass("active");
		var idp  = $(this).attr('id');
		var valp = document.getElementById('p-value');
		valp.innerHTML = idp;
    });	
}); 
//.advcash
$(document).on("ready", function () {
    $(".advcash .change-value").click(function () {
        $(".advcash .change-value").removeClass("active");
		$(this).addClass("active");
		var ida  = $(this).attr('id');
		var vala = document.getElementById('a-value');
		vala.innerHTML = ida;
    });	
});   
//
$(document).on("ready", function () {
    $(".currency-v li").click(function () {
		$(".currency-v li").removeClass("active");
		$(this).addClass("active");
		var idv  = $(this).attr('id');
		var elvv = document.getElementById('rezult-choose5');
		elvv.value = idv;
    });	
});

$(document).on("ready", function () {
    $("#balance .btn-block").click(function () {
		$("#balance .btn-block").toggleClass("open");
		$("#balance .show-block").slideToggle('fast');
    });
});





function link() {
  var copyText = document.getElementById("link");
  copyText.select();
  document.execCommand("Copy");
}

//menu-admin
$(document).on("ready", function () {
    $("#a-menu .cd-nav-trigger").click(function () {
        $("#a-menu").toggleClass("menu-open");
		$('#a-menu .bar').toggleClass('animate');
		$(".admin header").toggleClass("menu-open");
    });
});