
/* ----------------------------------------------------
		Wow.js activation - animations on scroll
	----------------------------------------------------- */
$(function () {
	new WOW().init();
});


/* ----------------------------------------------------
		Navbar show/hide bg on scroll
	----------------------------------------------------- */
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			$("nav").removeClass("fixedNav");
		} else {
			$("nav").addClass("fixedNav");
		}
	})

	$(".navbar-toggler").click(function () {
		if ($(this).scrollTop() < 50 && $(".navbar-toggler").attr("aria-expanded") === "false") {
			$("nav").addClass("topNav");
		}
		else {
			$("nav").removeClass("topNav");
		}
	})
});

/* ----------------------------------------------------
		Smooth scrolling
	----------------------------------------------------- */
$(function () {
	$("a.smooth").click(function (event) {
		event.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top
		}, 1000);
	})
});


/* ----------------------------------------------------
		Background Typewriter effect in Home section
----------------------------------------------------- */
if (document.getElementsByClassName('demo').length > 0) {
	var i = 0;
	var txt = `
	const gulp        = require('gulp');
	const browserSync = require('browser-sync').create();
	const sass        = require('gulp-sass');

	// Compile Sass & Inject Into Browser
	gulp.task('sass', function() {
		return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
				.pipe(sass())
				.pipe(gulp.dest("src/css"))
				.pipe(browserSync.stream());
	});
	// Watch Sass & Serve
	gulp.task('serve', ['sass'], function() {
		browserSync.init({
				server: "./src",
				browser: "chrome"
		});
		gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
		gulp.watch("src/*.html").on('change', browserSync.reload);
	});
			`;
	var speed = 60;

	function typeItOut() {
		if (i < txt.length) {
			document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeItOut, speed);
			Prism.highlightAll();
		}
	}
	setTimeout(typeItOut, 1800);
}


/* ----------------------------------------------------
		Typed Text in Home Section
	----------------------------------------------------- */
var typed = new Typed('.typed-element', {
	strings: ["un projet", "des idées", "des questions", "besoin d'un site", "besoin de conseils", "besoin d'un audit", "besoin d'un développeur", "un souci technique", "wordpress", "un template à intégrer", "planté le serveur ?"],
	typeSpeed: 38,
	loop: true,
	backDelay: 15000
});


/* ----------------------------------------------------
		Colorize logos and skills, activate skillbars
----------------------------------------------------- */
$(window).on('activate.bs.scrollspy', function () {
	var active = $('.active').attr("href");
	if (active === "#skills-section") {
		$(".skills-bars").removeClass("greyed-out");
		$(".skills-cms").removeClass("greyed-out");
		// $(".skills-tools").removeClass("greyed-out");

		$('.skillbar-wrapper').each(function () {
			let percent = $(this).attr('data-percent');
			$(this).find('.skillbar-bg').animate({
				width: 100 - percent + "%"
			}, 4000);
		});
	}
	if (active === "#services-section") {
		$(".services-list").removeClass("greyed-out");
	}
	if (active === "#portfolio-section") {
		$(".portfolio-gallery").removeClass("greyed-out");
	}
});


/* ----------------------------------------------------
		Create lowpoly patterns on the background
----------------------------------------------------- */
// var bgColor = ['#000000', '#343a46']
// var aboutPattern = Trianglify({
// 	width: window.innerWidth,
// 	height: $("body").outerHeight(),
// 	cell_size: 200,
// 	variance: 0.95,
// 	x_colors: bgColor,
// 	y_colors: 'match_x',
// });
// // $("body").css({ 'background-image': 'url(' + aboutPattern.png() + ')' });


/* ----------------------------------------------------
		Google map in Contact section
----------------------------------------------------- */
var myCenter = new google.maps.LatLng(48.830257, 2.367825);
// var myCenter = new google.maps.LatLng(48.811255,2.401731);
var style = [
	{
		"featureType": "all",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 40
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 18
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 19
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#1a1e25"
			},
			{
				"lightness": 17
			}
		]
	}
];

function initialize() {
	var mapProp = {
		center: myCenter,
		zoom: 12,
		disableDefaultUI: true,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		draggable: true,
		styles: style,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
}
google.maps.event.addDomListener(window, "load", initialize);


/* ----------------------------------------------------
		Form validation
----------------------------------------------------- */
function validateMail(inputMail) {
	const email = inputMail.val();
	const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!regex.test(email)) {
		return false;
	} else {
		return true;
	}
}

$('#inputMail').on('blur', function () {

	if (!(validateMail($(this)))) {
		$(this).addClass('is-invalid');
	} else {
		$(this).removeClass('is-invalid');
	}
});

$('#inputName').on('blur', function() {
	const name = $(this).val();

	if (!name) {
		$(this).addClass('is-invalid');
	} else {
		$(this).removeClass('is-invalid');
	}
});

// $('#inputMail').on('blur', function () {
// 	const email = $(this).val();
// 	const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// 	if (!regex.test(email)) {
// 		$(this).addClass('is-invalid');
// 	} else {
// 		$(this).removeClass('is-invalid');
// 	}
// });

$('#inputSubject').on('blur', function () {
	const subject = $(this).val();

	if (!subject) {
		$(this).addClass('is-invalid');
	} else {
		$(this).removeClass('is-invalid');
	}
});

$('#inputMessage').on('blur', function () {
	const message = $(this).val();
	// const regex = /^([a-zA-Z]{2,})$/;

	if (!message) {
		$(this).addClass('is-invalid');
	} else {
		$(this).removeClass('is-invalid');
	}
});


/* ----------------------------------------------------
		JQuery Ajax - send contact form
----------------------------------------------------- */
$('#contact-form').on('submit', function (e) {
	e.preventDefault();

	const name = $('#inputName').val();
	const email = validateMail($('#inputMail'));
	const subject = $('#inputSubject').val();
	const message = $('#inputMessage').val();

	if (!name || !email || !subject || !message) {
		$('#msg').removeClass();
		$('#msg').addClass('alert alert-warning');
		$('#msg').html('Veuillez remplir tous les champs requis');

	} else {

		var contactData = {
			name: $('#inputName').val(),
			email: $('#inputMail').val(),
			site: $('#inputSite').val(),
			subject: $('#inputSubject').val(),
			message: $('#inputMessage').val()
		};
		var status = false;

		$.ajax({
			url: '/ajax',
			type: 'POST',
			cache: false,
			data: contactData,
			dataType: 'json',
			success: function (data) {
				status = true;
			}
			, error: function (jqXHR, textStatus, err) {
				status = false;
			}
		})

		if (status = true) {
			$('#msg').removeClass();
			$('#msg').addClass('alert alert-success');
			$('#msg').html($('#inputName').val() + ', votre message a bien été envoyé.');
		} else {
			$('#msg').removeClass();
			$('#msg').addClass('alert alert-danger');
			$('#msg').html('Votre message n\'a pas pu être envoyé.');
		}

	}

});

// $('#contact-form').on('submit', function(e) {
// 	e.preventDefault();

// 	$('#msg').html($('#inputName').val() + ', votre message a bien été envoyé.');

// 	var contactData = {
// 		name: $('#inputName').val(),
// 		email: $('#inputMail').val(),
// 		site: $('#inputSite').val(),
// 		subject: $('#inputSubject').val(),
// 		message: $('#inputMessage').val()
// 	};	

// 	$.ajax({
// 		url: '/ajax',
// 		type: 'POST',
// 		cache: false,
// 		data: contactData,
// 		dataType: 'json',
// 		success: function (data) {
// 			alert('Success!')
// 		}
// 		, error: function (jqXHR, textStatus, err) {
// 			alert('text status ' + textStatus + ', err ' + err)
// 		}
// 	})
// });            