
function f(){ 
	let input = document.getElementById("someText");

	if(input.value == null || input.value == ""){alert("Пустые строки");}

	let url = "http://www.omdbapi.com/?apikey=d5677312&s="+input.value; 
	httpGet(url) 
	.then( (result) => {
		console.log(input.value);
		console.log(url);
		cinema = JSON.parse(result); 
	
		for (let i = 0; i < cinema.Search.length; i++) {
			let img = document.createElement("img"); 
			img.src = cinema.Search[i].Poster; 
			console.log(result);
	 		document.getElementById("images").appendChild(img);
		}

	})
	.catch( (e)=>{
		alert("Ничего не найдено ... :( \r"+e);	
	})
	; 
}
var cinema;
function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
        user = JSON.parse(this.response); 

    	return user.Search; 
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        
        reject(error);
      }
    };

    xhr.onerror = function() { 
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}