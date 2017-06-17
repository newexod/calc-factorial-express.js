$(function() {
	$('#fact').submit(function(e) {
		e.preventDefault();

		var data = {
			number: $('#number').val()
		}

		$.post('factorial', data, function(data) {
			$('#factorial-res').text(data.number);
			$('.res').show(2000);
		})
	})
})