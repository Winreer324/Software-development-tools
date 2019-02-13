let cinema;

const fetchFilm = async () =>{
    let input = document.getElementById("text"); 

    document.getElementById("lol").innerHTML = '';
    // document.getElementById("images").innerHTML = '';
    // document.getElementById("title").innerHTML = '';
    // document.getElementById("year").innerHTML = '';
    // document.getElementsByClassName("testT").innerHTML = '';

    if(input.value == null || input.value == ""){alert("Пустые строки");}

    let url = "http://www.omdbapi.com/?apikey=d5677312&s="+input.value; 
    
    console.log(input.value);
    console.log(url); 
    try{
        let responce = await fetch(url);
        let json = await responce.json();
        console.log(json)
        if(json.Error){ throw new Error(json.Error)} 
        cinema = json;
        for (let i = 0; i < cinema.Search.length; i++) {
      
            let div = document.createElement("div"); 
            div.className = "testT";
            let img = document.createElement("img"); 
            let h2 = document.createElement("h2"); 
            let p = document.createElement("p"); 
            // h2.style.display = "inline-block";
            if (cinema.Search[i].Poster == 'N/A') {
                continue;
            };
            img.src = cinema.Search[i].Poster; 
            h2.innerHTML = cinema.Search[i].Title; 
            p.innerHTML = cinema.Search[i].Year;
            // img.style.display = "block";
            div.style.display = "flex";
            div.style.height = "500px";
            div.style.width = "300px";
            div.style.margin = "10px";
            div.style.flexWrap = "wrap";
            // div.style.display = "inline-block";
            // div.style.margin = "10px";
            // img.style.display = "flex";
            // img.style.justifyContent = "center";
            // img.style.alignItems = "center";
            // img.style.flexWrap = "wrap";
            // console.log(cinema.Search[i].Title);
            // console.log(cinema.Search[i].Year);

            // img.appendChild(img);
            // h2.appendChild(h2);
            // img.append();

            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
            document.getElementById("lol").appendChild(div)
            // document.getElementById("lol").appendChild(h2);
            // document.getElementById("lol").appendChild(p);

            // document.getElementById("lol images").appendChild(img);
            // document.getElementById("lol title").appendChild(h2);
            // document.getElementById("lol year").appendChild(p);
        } 
    console.log(json); 

    } catch(e){
        alert(e);
    }
} 