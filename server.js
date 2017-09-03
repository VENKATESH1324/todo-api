var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('Todo API Root');

});

app.get('/todos',function(req,res){
	res.json(todos);
});

app.get('/todos/:id',function(req,res){
	//res.send('asking for todo with id = '+req.params.id)
	var todoId = parseInt(req.params.id,10); //this is always a string, so we need to convert it into number first before we can use it.
	var matchedTodo;

	todos.forEach(function(todo){
		if(todoId === todo.id){
			matchedTodo = todo;
			
		}

	});
	if(matchedTodo){
		res.json(matchedTodo);
	}else{
		res.status(404).send();
	}
	
});

//post method for making the todo array via a POST request

app.post('/todos',function(req,res){
	var body = req.body;

	console.log("description is : " + body.description);

	body.id = todoNextId++;
	todos.push(body);
	
	console.log(body);

	res.json(body);
	



});




app.listen(PORT,function(){

	console.log('express server listening on PORT'+PORT);
});