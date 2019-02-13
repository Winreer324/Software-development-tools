let cinema;
let cinemaPopup;
let popup;

let check = true;
let content = document.getElementById("content");
let back = document.getElementById("back");
back.style.display = 'none';

let lol = document.getElementById("lol");
lol.addEventListener("click",  function (e){
    let target = e.target; 
    
    console.log(this.value)
    console.log(target.innerHTML) 

    popup = target.innerHTML;
    console.log(target.hasAttribute("h2"))
    // popup.replace(' ', '&') 
    console.log("popup = "+popup)
      
        fetchFilmThis();  
})





//  todo сделать вывод
// возврат контент (типа скрывать его при переходе, и возвращать по клику на кнопку назад ) 
// добавить возможность в избранные 
// locastorege
// todo выводит несколько попапов (мб нужно очистить)

const fetchFilm = async () => {
    event.preventDefault()

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
            let img = document.createElement("img")
            img.className = "images";
            let h2 = document.createElement("h2");
            h2.style.color = "darkblue";
            h2.style.textDecoration = "underline";
            h2.className = "title"; 
            let p = document.createElement("p");
            p.className = "desc"; 

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
    // console.log(json); 

    } catch(e){
        alert(e);
    }
} 

const fetchFilmThis = async () =>{
    event.preventDefault()

    document.getElementById("popupFilm").innerHTML = '';
    
    console.log("popup") 
    check = true;
    document.getElementById("lol").style.display = 'none'; 
    document.getElementById("popupFilm").style.display = 'block';
    
    back.style.display = 'block';
    // document.getElementById("lol").innerHTML = ''; 
    // document.getElementById("content").innerHTML = ''; 

    // if(input.value == null || input.value == ""){alert("Пустые строки");}
 
    let url = "http://www.omdbapi.com/?t="+popup+"&apikey=d5677312"; 
 
    console.log(url);  
    // console.log(input.value);
    /**
     * 
     * 
     * Actors: "Yûko Sanpei, Kokoro Kikuchi, Ryûichi Kijima, Junko Takeuchi"
Awards: "N/A"
BoxOffice: "N/A"
Country: "Japan"
DVD: "N/A"
Director: "Hiroyuki Yamashita"
Genre: "Animation, Action, Adventure, Comedy"
Language: "Japanese"
Metascore: "N/A"
Plot: "It's been some years since the end of the Shinobi War. Naruto Uzumaki is the 7th Hokage of Konohagakure, in this new era. His son, Boruto Uzumaki, will soon enter the Chûnin exams, alongside Sarada Uchiha and the mysterious Mitsuki."
Poster: "https://m.media-amazon.com/images/M/MV5BNDIwYjg5YzItZTJmMC00YjJhLWFiNjYtMDU5MmQxOTQxODM2XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SX300.jpg"
Production: "N/A"
Rated: "PG"
Ratings: [{…}]
Released: "28 Mar 2017"
Response: "True"
Runtime: "95 min"
Title: "Boruto: Naruto the Movie"
Type: "movie"
Website: "N/A"
Writer: "Masashi Kishimoto (original author), Masashi Kishimoto (screenplay), Ukyô Kodachi (screenplay cooperation)"
Year: "2015"
imdbID: "tt4618398"
imdbRating: "8.0"
imdbVotes: "6,816"
     * 
     *  */
    try{
        let responce = await fetch(url);
        let json = await responce.json();
        // console.log(json)
        if(json.Error){ throw new Error(json.Error)} 
        cinemaPopup = json; 
      
        let div = document.createElement("div");  
        let filmPoster = document.createElement("img")
        let filmTitle = document.createElement("h2");
        let filmPlot = document.createElement("h4"); 
        let filmYear = document.createElement("p");
        let filmimdbRating = document.createElement("p");
        let filmimdbVotes = document.createElement("p");

        // filmPoster.className = "images";
        // div.className = "testT"; 
        // filmTitle.style.color = "darkblue"; 
        // filmTitle.style.textDecoration = "underline";
        // filmTitle.className = "title";  
        // filmYear.className = "desc"; 

        // if (cinemaPopup.Poster == 'N/A') {
        //     cinemaPopup.Poster = ""
        // };  
        
        filmPoster.src = cinemaPopup.Poster; 
        // console.log(img.src = cinemaPopup.Poster); 
        filmTitle.innerHTML = "Title: " + cinemaPopup.Title; 
        // console.log(h2.innerHTML = cinemaPopup.Title); 
        filmPlot.innerHTML = "Plot: " + cinemaPopup.Plot; 
        filmYear.innerHTML = "Year: " + cinemaPopup.Year;
        filmimdbRating.innerHTML = "imdbRating: " + cinemaPopup.imdbRating;
        filmimdbVotes.innerHTML = "imdbVotes: " + cinemaPopup.imdbVotes;
        // console.log(p.innerHTML = cinemaPopup.Year);

        div.appendChild(filmPoster);
        div.appendChild(filmTitle);
        div.appendChild(filmPlot);
        div.appendChild(filmYear);
        div.appendChild(filmimdbRating);
        div.appendChild(filmimdbVotes);
        document.getElementById("popupFilm").appendChild(div)

    console.log(json); 

    } catch(e){
        alert(e);
    }
} 

function showHide(){ 
    if(check){
        content.style.display = 'flex';
        // content.innerHTML = "";
        console.log(check)
        check = false;
        back.style.display = 'none';
        document.getElementById("lol").style.display = 'block'; 
        document.getElementById("popupFilm").style.display = 'none';
    }
    else if(!check){
        content.style.display = '';
        console.log(check)
        check = true;  
    }
}