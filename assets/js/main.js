var res =
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
  ]

/*var taskInput = document.getElementById("newTask");
var addButton = document.getElementsByClassName("button")[0];

var resultado = "";
for (var i = 1; i == 9; i++){
   resultado += (&#8226 + res[i] + \n)
}
document.write(resultado + &#8226 + taskInput)*/

function Elementos(userId, id, title, completed){
  this.userId = userId,
  this.id = id,
  this.title = title,
  this.completed = completed
  this.sumar = function(){
    
 }
};

res.forEach(function(lista){
   document.write("<li>" + lista.title + "</li>"
    )})

function getTask(){
  var input = document.getElementById("tarea");
  var contTask = document.getElementsByClassName("tarealist");
  contTask[0].innerHTML += resultado + "<ul><li>" + input.value + "<br>";
  input.value = "";
}