$(document).ready(function($) {

	function isPerspective(){
		return isStyleSupported(['perspective','webkitPerspective','MozPerspective','OPerspective','MsPerspective']);
	}

	// CSS detection;
	function isStyleSupported(array){
		var p,s,fake = document.createElement('div'),list = array;
		for(p in list){
			s = list[p]; 
			if(typeof fake.style[s] !== 'undefined'){
				fake = null;
				return true;
			}
		}
		return false;
	}

	var is3dsupport = isPerspective();
	var width = $(window).width();
	var devices = $('#devices');

	if(is3dsupport){
	   
		var icons = $('.devices-buttons').children();

		icons.click(function(e){
			e.preventDefault();

			var $this = $(this);
			icons.removeClass('active')

			var device = $this.data('device');
			$this.addClass('active');

			devices
			.removeClass()
			.addClass(device);

		});

		$('#devices-container').addClass('devices-init')

		


		function swapDemoClasses(){
			if(width >= 1260){
				stayOn(0,'tablet');
			} else if(width >= 880){
				stayOn(1,'mobile')
				
			} else if(width < 480){
				stayOn(2,'mobile')
			}
		}

		function stayOn(icon,device){
			if(!icons.eq(icon).hasClass('active')){
				icons.removeClass('active');
				icons.eq(icon).addClass('active');
				devices.removeClass().addClass(device);
			}
		}

		$(window).on('resize',function(){
           
			width = $(window).width();
			swapDemoClasses();
		});
	
	} else {
		//$('#devices-container').hide();
	}

});