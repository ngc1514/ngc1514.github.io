function renderChat(response){
	var chat = "";
	for(var data of JSON.parse(response).reverse())
	{
		chat += data.message + "<br>";
	}
	document.getElementById("chat").innerHTML = chat;
}

function loadChat(){
	ajaxGetRequest("/chat", renderChat);
}

function checkEnter(keyUpEvent)
{
	var comment = $("#message").val();
	if(/\S/.test(comment))
	{
		if(keyUpEvent.keyCode === 13)
		{
			sendMessage();
			if(event.preventDefault)
			{
				event.preventDefault(); 
			}
			return false;	
		}
	}
	else{
		alert("Please enter a valid input!")
	}

}

function sendMessage()
{
	//$("#message").val().trim().length < 1
	var comment = $("#message").val();
	if(/\S/.test(comment))
	{
		alert("Please enter a valid input!")
	}
	else{
		messageElement.value = "";
		var toSend = JSON.stringify({"message": message});
		ajaxPostRequest("/send", toSend, renderChat);
	}
}

function ajaxGetRequest(path, callback){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (this.readyState === 4 && this.status === 200){
			callback(this.response);
		}
	};
	request.open("GET", path);
	request.send();
}

function ajaxPostRequest(path, data, callback){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (this.readyState === 4 && this.status === 200){
			callback(this.response);
		}
	};
	request.open("POST", path);
	request.send(data);
}