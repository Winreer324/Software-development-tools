let cinema;
let cinemaPopup;
let titlePopup; 

let favoritesBool = false;
let check = true;
let content = document.getElementById("content");
let back = document.getElementById("back");
back.style.display = 'none';

let favorites = document.getElementById("favorites");

/// click popup
let lol = document.getElementById("lol");
lol.addEventListener("click",  function (e){
    let target = e.target; 
     
    titlePopup = target.innerHTML; 
    console.log("titlePopup ="+ titlePopup);  
    fetchFilmThis();   
})
 
// click search
const fetchFilm = async () => {
    event.preventDefault() 
    showHide()
    content.style.display = ''; 
    check = true;

    let input = document.getElementById("text"); 

    document.getElementById("lol").innerHTML = ''; 

    // if(input.value == null || input.value == ""){alert("Пустые строки");}

    let url = "http://www.omdbapi.com/?apikey=d5677312&s="+input.value; 
     
    try{
        let responce = await fetch(url);
        let json = await responce.json();
 
        if(json.Error){ throw new Error(json.Error)} 
        cinema = json;
        // create [i] elements with data 
        for (let i = 0; i < cinema.Search.length; i++) {
      
            let div = document.createElement("div"); 
            div.className = "testT";
            let img = document.createElement("img")
            img.className = "images";
            let h2 = document.createElement("h2");
            h2.style.color = "darkblue";
            h2.style.textDecoration = "underline";
            h2.className = "title"; 
            h2.id = "title"; 
            let p = document.createElement("p");
            p.className = "desc"; 
            let favorites = document.createElement("div");
            favorites.id = "favorites"; 

            if (cinema.Search[i].Poster == 'N/A') {
                continue;
            };

            img.src = cinema.Search[i].Poster; 
            h2.innerHTML = cinema.Search[i].Title; 
            p.innerHTML = cinema.Search[i].Year; 
            div.style.display = "flex";
            div.style.height = "500px";
            div.style.width = "300px";
            div.style.margin = "10px";
            div.style.flexWrap = "wrap"; 

            div.appendChild(img);
            div.appendChild(h2); 

            // chech favorites
            let  str = cinema.Search[i].Title; 
            for(let data in localStorage){ 
                if(data == str){
                    div.appendChild(favorites);
                    favorites.style.background = "blue";
                } 
            }
            
            div.appendChild(p);
            document.getElementById("lol").appendChild(div) 
        } 
     
    } catch(e){
        alert(e);
    }
} 
// create popup
const fetchFilmThis = async () =>{ 

    document.getElementById("popupFilm").innerHTML = '';
     
    check = true;
    document.getElementById("lol").style.display = 'none'; 
    document.getElementById("popupFilm").style.display = 'block';
    
    back.style.display = 'block'; 
 
    let url = "http://www.omdbapi.com/?t="+titlePopup+"&apikey=d5677312"; 
 
    console.log(url);   
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
        console.log(json)
        if(json.Error){ throw new Error(json.Error)} 
        cinemaPopup = json; 
      
        let div = document.createElement("div");  
        let filmPoster = document.createElement("img")
        let filmTitle = document.createElement("h2");
        let favorites = document.createElement("div");
        favorites.id = "favorites";
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
        filmTitle.innerHTML = cinemaPopup.Title; 
        // console.log(h2.innerHTML = cinemaPopup.Title); 
        filmPlot.innerHTML = "Plot: " + cinemaPopup.Plot; 
        filmYear.innerHTML = "Year: " + cinemaPopup.Year;
        filmimdbRating.innerHTML = "imdbRating: " + cinemaPopup.imdbRating;
        filmimdbVotes.innerHTML = "imdbVotes: " + cinemaPopup.imdbVotes;
        // console.log(p.innerHTML = cinemaPopup.Year);

        div.appendChild(filmPoster);
        div.appendChild(filmTitle);  
        
        console.log(filmTitle.innerHTML)
        // chech in popup favorites
        for(let item in localStorage){ 
            if(item == filmTitle.innerHTML){
                div.appendChild(favorites);
                favorites.style.background = "blue";
            } 
            else div.appendChild(favorites);
        }

        div.appendChild(filmPlot);
        div.appendChild(filmYear);
        div.appendChild(filmimdbRating);
        div.appendChild(filmimdbVotes);
        document.getElementById("popupFilm").appendChild(div)
 
        // add favorites
        favorites.addEventListener("click", function(){ 
            console.log("title popup = " + filmTitle.innerHTML)

            favoritesBool = true;
            for(let item in localStorage){ 
                if(item == filmTitle.innerHTML){
                    favoritesBool = false;
                    console.log("delete = " + filmTitle.innerHTML);
                    localStorage.removeItem(filmTitle.innerHTML); 
                }  else if(favoritesBool)
                {localStorage.setItem(filmTitle.innerHTML, filmTitle.innerHTML);}
            } 
          
        }); 
    } catch(e){
        alert(e);
    }
} 

function showHide(){ 
    if(check){
        content.style.display = 'flex'; 
        check = false;
        back.style.display = 'none';
        document.getElementById("lol").style.display = 'block'; 
        document.getElementById("popupFilm").style.display = 'none';
    }
    else if(!check){
        content.style.display = ''; 
        check = true;  
    } 
}

