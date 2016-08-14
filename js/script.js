$(document).ready(function(){
	nav.init();
	
	regulate.init();

	
$('#portf').trigger('click');

	setTimeout(function(){$('.img-hover').addClass('shine'); $('h1').addClass('fadeIn');},1000);
	$('.bounceInDown').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(){
			$('.img-hover').removeClass('animated');
	});


	/* Apply fancybox to multiple items */
	
	$("a.g").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		
	});
	
});

var regulate = {
	counter:0,
	init:function(){
		regulate.selector = $('.img-hover');
		
		regulate.selector.each(function(){
			
			regulate.addAnimation(this);
		});
	},
	addAnimation:function(selector){
		regulate.counter++;
		$(selector).addClass('animated bounceInDown effect'+ regulate.counter);
	}
}

var nav = {
	content:$('#content-holder'),
	init:function(){
		
		
		$('nav ul').children('li').each(function(){
			$(this).find('a').click(function(e){
				if ($(this).data('content') == 'portfolio'){

				
					e.preventDefault();
					nav.clearMenu();
					$(this).addClass('active');
					nav.loadContent($(this).data('content'));
				}
				
			});
		});

	},
	clearMenu:function(){
		$('nav ul').children('li').each(function(){
			$(this).find('a').removeClass('active');
		});
	},
	loadContent:function(html){
		loadClone = $('#' + html).clone();
		nav.content.empty().hide().append(loadClone).fadeIn();
		nav.content.children().removeClass('hidden');
	}
}
