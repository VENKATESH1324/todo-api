var express = require('express');
var app = express();
var PORT = process.env.PORT

app.get('/',function(){
	app.send('Todo API Root');

});

app.listen(PORT,function(){

	console.log('express server listening on PORT'+PORT);
});