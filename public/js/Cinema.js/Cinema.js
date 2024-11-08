async function Cinema(){
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#cinema .heading").insertAdjacentHTML("afterbegin", `<h2>${resHeading.Cinema.heading.title}</h2>`)

    let features = ""
    let dataFeatures = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resFeatures = await dataFeatures.json()
    features = resFeatures.Cinema.features.map(elem=>{
        return`<div class="feature">
                <span>${elem.icon}</span>
                <p>${elem.text}</p>
                </div>`
    })
    document.querySelector("#cinema .features").insertAdjacentHTML("afterbegin", features.join(""))

    let moviesInfo = ""
    let dataMovie = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resMovie = await dataMovie.json()
    moviesInfo = resMovie.Cinema.movies.map(elem=>{
        return`<div class="movie">
             <div class="poster-cinema">
              <img src="${elem.src}" alt="">
             </div>
             <div class="details">
              <h2>${elem.title}</h2>
              <p>${elem.director}</p>
              <div class="type">
                <span>${elem.types.firstType}</span>
                <span>${elem.types.secondType}</span>
              </div>
                <div class="buy">
                <button>
                  <a href="${elem.btn.href}">${elem.btn.name}</a>
                </button>
              </div>
             </div>
            </div>`
    })
    document.querySelector("#cinema .movies").insertAdjacentHTML("afterbegin", moviesInfo.join(""))

}
export default Cinema