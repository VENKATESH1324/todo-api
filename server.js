var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id:1,
	description: 'go to grocery store',
	completed: false
},
{
	id:2,
	description:'go to smiths marketplace',
	completed: false
},
{
	id:3,
	description: 'go to shop n go',
	completed:false
}];

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

app.listen(PORT,function(){

	console.log('express server listening on PORT'+PORT);
});