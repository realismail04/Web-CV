/*
	/*
	Real Ismail
	syedismailreal04@gmail.com
	

	
	Hey I'm Ismail And This Is My Porfolio Website
	@Theismail

*//*
	Real Ismail
	syedismailreal04@gmail.com
	
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

// COUNTER 

$.fn.jQuerySimpleCounter = function(options) {
	var settings = $.extend({
	  start: 0,
	  end: 100,
	  easing: 'swing',
	  duration: 400,
	  complete: ''
	}, options);
  
	var thisElement = $(this);
  
	$({
	  count: settings.start
	}).animate({
	  count: settings.end
	}, {
	  duration: settings.duration,
	  easing: settings.easing,
	  step: function() {
		var mathCount = Math.ceil(this.count);
		thisElement.text(mathCount);
	  },
	  complete: function() {
		var mathCount = this.count > settings.maxNumber ? settings.maxNumber + '+' : this.count;
		thisElement.text(mathCount);
	  }
  
	});
  };
/*
	Real Ismail
	syedismailreal04@gmail.com
	
*/

$('#counter1').jQuerySimpleCounter({
	end: 50,
	duration: 2000,
	maxNumber: 12
  });
$('#counter2').jQuerySimpleCounter({
	end: 150,
	duration: 2000,
	maxNumber: 100
  });
$('#counter3').jQuerySimpleCounter({
	end: 150,
	duration: 2000,
	maxNumber: 110
  });
