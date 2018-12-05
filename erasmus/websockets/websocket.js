lbtn = document.getElementById("leftbtn");
rbtn = document.getElementById("rightbtn");
car = document.getElementById("car");

position=10

rbtn.addEventListener("click",
function (){
	send(10);
}
);

lbtn.addEventListener("click",
function (){
	send(-10);
}
);

var wsUri = "wss://echo.websocket.org/";
websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onclose = function(evt) { onClose(evt) };
websocket.onmessage = function(evt) { onMessage(evt) };
websocket.onerror = function(evt) { onError(evt) };

function onOpen(evt)
  {
    
  }

  function onClose(evt)
  {
    console.log("dis");
  }

  function onMessage(evt)
  {
    console.log("Received: "+ evt.data);
    move(evt.data)
  }

  function onError(evt)
  {
    console.log("ERROR:"+ evt.data);
  }


function send(v){
	console.log(v);
	//move(v);
	websocket.send(v);
}

function move(v){
	console.log('moving:'+v+'__');
	position +=parseInt(v);
	console.log('new pos:'+position);
	car.style.left=position;
}