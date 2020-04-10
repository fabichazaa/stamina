$(function(){
    		$("[data-toggle='tooltip']").tooltip();
    		$("[data-toggle='popover']").popover();
    		$('.carousel').carousel({
    			interval: 2000
    		});
    		$('#contact').on('show.bs.modal', function (e) {
 				console.log('Modal is showing');
 				$('#contactButton').removeClass('btn-outline-success');
 			 	$('#contactButton').addClass('btn-primary');
 			 	$('#contactButton').prop('disabled', true);
	
			})
			$('#contact').on('show.bs.modal', function (e) {
 				console.log('Modal is shown');
			})
			$('#contact').on('hide.bs.modal', function (e) {
 				console.log('Modal is hiding');
			})
			$('#contact').on('hidden.bs.modal', function (e) {
 				console.log('Modal is  hidden');
 			 	$('#contactButton').prop('disabled', false);
 			 	$('#contactButton').removeClass('btn-primary');
 			 	$('#contactButton').addClass('btn-outline-success');

			})
    	});