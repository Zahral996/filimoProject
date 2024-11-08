async function FreeMovies() {
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#free .heading").insertAdjacentHTML("afterbegin", `<h2>${resHeading.FreeMovies.heading.text}</h2>`)


    let freeMovie = ""
    let data = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let res = await data.json()
    freeMovie = res.FreeMovies.movies.map(elem=>{
        return `<div class="swiper-slide">
              <a href="${elem.href}">
                <img src="${elem.src}" alt="">
                <p>${elem.title}</p>
                <div class="badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#1CB561" class="bi bi-play-btn" viewBox="0 0 16 16">
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                  </svg>
                  <span>رایگان</span>
                </div></a>
            </div>`
        
    })
    document.querySelector("#swiper2 .swiper-wrapper").insertAdjacentHTML("afterbegin", freeMovie.join("")) 


    let movies = document.querySelectorAll("#swiper2 .swiper-slide img")

    function removeActiveState(){
        movies.forEach((movie)=>{
            movie.classList.remove("active-movie")   
        })
    }
    
    movies.forEach((movie)=>{
        movie.addEventListener("click", function(e){
            e.preventDefault()
            removeActiveState()
            movie.classList.toggle("active-movie")
        
        })
    })
    
    
}
export default FreeMovies