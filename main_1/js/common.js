$(document).ready(function() {
	$('.modal__form__phone').mask("+7 (999) 99-99-999");
});
var modal = document.getElementById('phone-modal');
var	btn = document.getElementById("modal-button");
var	span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
	modal.style.display = "block";
}
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}

function modal__main() {
	modal.style.display = "block";
}

if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); }
			else { closeMenu(); }

	});


	$('#my-menu ul li a').on(click, function(e){
		var href = this.href;
		e.preventDefault();
		closeMenu();
		window.open(href,"_self");
	});


	function openMenu(){

		$('div.circle').addClass('expand');

		$('div.burger').addClass('open');
		$('div.x, div.y, div.z').addClass('collapse');
		$('#my-menu li').addClass('animate');

		setTimeout(function(){
			$('div.y').hide();
			$('div.x').addClass('rotate30');
			$('div.z').addClass('rotate150');
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45');
			$('div.z').addClass('rotate135');
		}, 120);



	}

	function closeMenu(){

		$('div.burger').removeClass('open');
		$('div.x').removeClass('rotate45').addClass('rotate30');
		$('div.z').removeClass('rotate135').addClass('rotate150');
		$('div.circle').removeClass('expand');
		$('#my-menu li').removeClass('animate');

		setTimeout(function(){
			$('div.x').removeClass('rotate30');
			$('div.z').removeClass('rotate150');
		}, 50);
		setTimeout(function(){
			$('div.y').show();
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);

	}
