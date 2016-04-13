var express = require('express');

	app = express();

var env = process.env.NODE_ENV || 'development';
app.use(express.static('public/'));

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log(env+ ' server listen on port ' + port);
})



