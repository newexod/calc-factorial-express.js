var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	console.log(req.body)
	function factorial(n) {
		var result = 1;
		for(var i = 1; i <= n; i++) {
			result *= i;
		}

		return result;
	}
	res.json({
		number: factorial(req.body.number)
	});

	// res.json(factorial(req.body.number));
})

module.exports = router;