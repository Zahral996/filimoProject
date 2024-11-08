async function Best(){
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#best").insertAdjacentHTML("afterbegin", `
    <div class="best-heading">
        <h2>${resHeading.BestFilimo.bestHeading.title}</h2>
        <div class="switch">
        <button class="series-btn">${resHeading.BestFilimo.bestHeading.switch.firstBtn}</button>
        <button class="movies-btn">${resHeading.BestFilimo.bestHeading.switch.secondBtn}</button></div></div>`)


    let seriesInfo = ""
    let data = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let res = await data.json()
    seriesInfo = res.BestFilimo.series.map((elem)=>{
        return `<div class="serie">
        <img src="${elem.src}" alt="">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="86" height="12" fill="none"><defs/><g clip-path="url(#clip0)"><path fill="url(#paint0_radial)" fill-rule="evenodd" d="M33.41 1a1 1 0 01-1 1 1 1 0 01-1.02-1 1 1 0 011.01-1 1 1 0 011.01 1zm-6.92 9.99a1 1 0 01-.85 1c-.41.07-1-.13-1.17-.82-.16.65-.71.89-1.17.82a1 1 0 010-1.98c.4-.07 1 .12 1.17.81.16-.65.71-.88 1.16-.81a1 1 0 01.86.98zm-10.87-.64a1.02 1.02 0 00-.97-.33 1 1 0 00.05 1.97c.46.06 1-.19 1.16-.83a1.01 1.01 0 001.2.82 1 1 0 00-.05-1.97c-.46-.07-1 .18-1.16.83a1.08 1.08 0 00-.23-.49zm6.3-2.27a2.88 2.88 0 004.25 0v.01h.02c0 .02.02.03.03.04.57.59 1.28.89 2.11.88H32.81a2.8 2.8 0 002.56-2.39c.03-.23.03-.46.03-.7-.01-.18-.02-.37-.06-.55a2.82 2.82 0 00-3.04-2.26c-.74.06-1.37.37-1.86.92-.45.5-.7 1.08-.72 1.74V7.3c0 .1.05.15.16.14.13-.01.27-.03.4-.06.26-.06.51-.15.73-.32.1-.07.15-.16.15-.29V5.9l.03-.3a1.4 1.4 0 011.61-1.06c.57.1 1.06.56 1.14 1.13.03.18.03.36.02.55-.01.58-.3 1-.82 1.26-.22.1-.44.12-.68.12H28.3a1.39 1.39 0 01-1.4-1.39 325.47 325.47 0 010-2.06v-.01-.1a.24.24 0 00-.1-.2l-.04-.03c-.06-.04-.13-.09-.2-.12-.29-.16-.6-.23-.93-.26-.12-.01-.17.03-.17.15a2.26 2.26 0 000 .08v2.77a1.4 1.4 0 01-2.8-.23V3.89v-.77-.52V.68a.32.32 0 00-.14-.29 2.32 2.32 0 00-1.15-.38c-.1 0-.15.05-.15.15v6.06c0 .81-.74 1.5-1.63 1.36a1.39 1.39 0 01-1.17-1.37V5.04v-.47-.14-.34c0-.12-.05-.22-.15-.28a7.54 7.54 0 01-.07-.05c-.08-.04-.16-.1-.24-.13-.24-.1-.5-.17-.77-.2-.18-.02-.22.01-.22.2V6.41a1.4 1.4 0 01-1.54 1.18 1.4 1.4 0 01-1.25-1.36 2.77 2.77 0 00-1.64-2.57 2.72 2.72 0 00-1.2-.27h-1.26a525.03 525.03 0 01-.93 0c-.1 0-.2.04-.25.13a16.91 16.91 0 01-.19.3c-.12.26-.18.52-.2.8-.03.17 0 .2.19.2h1.03a2760.32 2760.32 0 011.75.01c.76.07 1.42.78 1.23 1.67-.11.53-.45.9-.98 1.04-.54.15-1.01.02-1.4-.37a1.26 1.26 0 01-.38-.93v-.25-.31c0-.13-.04-.22-.15-.29a6.9 6.9 0 01-.08-.04c-.08-.05-.16-.1-.24-.13a2.75 2.75 0 00-.8-.2c-.12-.02-.18.04-.18.16v.42a132.66 132.66 0 01-.02.89c-.12.56-.58 1-1.15 1.1a1.41 1.41 0 01-1.64-1.42 17.21 17.21 0 01-.05-.44A2.84 2.84 0 00.01 6c-.06.74.14 1.4.6 1.97a6.88 6.88 0 00.73.75c.06.06.13.08.21.07l.3-.07c.31-.1.58-.26.83-.46.09-.07.1-.14 0-.23a86 86 0 00-.67-.66l-.2-.2c-.3-.32-.41-.7-.36-1.12a1.4 1.4 0 011.57-1.2 1.39 1.39 0 011.09 1.98 1.7 1.7 0 01-.37.47L1.56 9.45l-.6.6c-.1.1-.1.16.01.24.19.15.39.28.6.38.15.06.3.11.47.13.12.02.21-.01.3-.1a1847.81 1847.81 0 012.6-2.58l.03-.03c.58.6 1.29.93 2.13.92.84 0 1.53-.33 2.1-.93.59.61 1.3.93 2.13.93.84 0 1.54-.33 2.11-.93.59.61 1.29.93 2.13.93.84 0 1.54-.33 2.11-.93.58.6 1.28.93 2.13.93.84 0 1.54-.33 2.12-.93z" clip-rule="evenodd"/><path fill="#fff" d="M43.35 11.3c-.3 0-.6-.02-.92-.05a4.6 4.6 0 01-.92-.17 2.9 2.9 0 01-.8-.37 1.83 1.83 0 01-.6-.62 3.16 3.16 0 01-.48-1.83v-.13-.12c.03-.47.11-.97.25-1.5.13-.54.33-1.13.6-1.78a42.63 42.63 0 01.75.31c-.25.63-.44 1.22-.58 1.78-.13.55-.2 1.04-.2 1.46 0 .56.12 1.01.34 1.35.1.14.22.27.35.36a2.2 2.2 0 00.88.39 3.82 3.82 0 00.93.1 16.72 16.72 0 00.84-.03 6.67 6.67 0 001.3-.25c.24-.07.45-.16.64-.26.18-.1.34-.22.45-.36.13-.14.19-.3.19-.48 0-.05-.02-.11-.07-.18a.87.87 0 00-.19-.22 2.72 2.72 0 00-.89-.47 22.64 22.64 0 00-1-.28A4.56 4.56 0 0044 7.9H44l.06-.82h3.92c.11 0 .2.04.29.12.08.08.12.17.12.29 0 .11-.04.21-.12.3a.4.4 0 01-.3.1h-1.53a2.2 2.2 0 01.61.7c.06.1.1.2.11.28a1 1 0 01.04.23c0 .28-.07.53-.2.75-.13.22-.3.4-.5.57-.22.16-.46.3-.73.41a5.7 5.7 0 01-1.66.42c-.28.03-.53.05-.75.05zm8.32-4.18a5.27 5.27 0 001.55.08 10.13 10.13 0 001.55-.24c.23-.06.44-.14.62-.22a1.58 1.58 0 00.79-.7c.08-.16.13-.3.14-.46a1.06 1.06 0 00-.29-.83 1.66 1.66 0 00-.5-.3 1.48 1.48 0 00-1-.02 3.6 3.6 0 00-.98.52l-.45.37a7.07 7.07 0 00-.9.99 7.92 7.92 0 00-.53.8zm-4.27.37c0-.12.05-.21.13-.29a.4.4 0 01.29-.12c.22 0 .4-.02.57-.05.15-.04.28-.08.4-.13a1.13 1.13 0 00.41-.36c.13-.17.23-.38.3-.6a13.01 13.01 0 00.25-1.14c.02-.13.05-.25.09-.36l.78.24-.03.15a7.38 7.38 0 00-.1.8 1.84 1.84 0 00.43 1.24 7.59 7.59 0 011.05-1.55 8.3 8.3 0 011.17-1.1 4.33 4.33 0 011.41-.63c.25-.05.5-.07.73-.05a2.07 2.07 0 011.35.64 2.26 2.26 0 01.48 1.49 1.94 1.94 0 01-.75 1.42c-.23.19-.48.35-.77.47a5.1 5.1 0 01-1.78.46 15.68 15.68 0 01-1.83.02 3.06 3.06 0 01-.77-.13 2.26 2.26 0 01-.65-.34c-.2-.15-.42-.36-.64-.63-.23.32-.52.56-.86.72-.34.15-.74.23-1.2.24h-.04a.4.4 0 01-.3-.12.39.39 0 01-.12-.3zm13.2.4c-.36 0-.67-.04-.93-.12a1.65 1.65 0 01-.66-.4c-.11-.1-.2-.22-.25-.35a2.02 2.02 0 01-.17-1v-.1-.46a34.54 34.54 0 000-1.83 39.45 39.45 0 00-.16-3.26l.82-.14a17.34 17.34 0 01.16 2.36 40.39 40.39 0 01.01 1.5 30.04 30.04 0 010 1.7V6.04c0 .16 0 .31.02.44.01.13.07.23.16.32.09.1.21.16.37.21.16.05.36.08.6.08h.04c.11 0 .2.04.29.12.08.08.12.18.12.29 0 .11-.04.21-.12.3a.4.4 0 01-.3.1zm-.35-.4a.4.4 0 01.12-.29.4.4 0 01.28-.12h.05c.43 0 .72-.05.89-.13a1.2 1.2 0 00.46-.4c.12-.17.22-.37.3-.6a8.99 8.99 0 00.3-1.17l.08-.34.78.24-.12.45a4.69 4.69 0 000 1.16c.04.11.09.22.15.32s.15.2.26.27a5.5 5.5 0 01.58-.95 10.44 10.44 0 011.01-1.2 4.78 4.78 0 012.1-1.13 2.77 2.77 0 011.15.02 2 2 0 01.96.56c.2.2.32.4.38.65.07.24.1.48.08.72-.02.26-.1.53-.23.8-.13.26-.31.5-.54.73h1.46a.4.4 0 01.29.12c.08.08.12.18.12.3 0 .1-.04.2-.12.28a.4.4 0 01-.3.12h-1.3c-.39 0-.69-.01-.92-.03a1.8 1.8 0 01-.56-.14c-.37.1-.74.18-1.11.24a7 7 0 01-2.58-.09 3.45 3.45 0 01-.61-.2c-.19-.1-.36-.2-.5-.33a1.15 1.15 0 01-.33-.46c-.28.37-.58.63-.9.77-.33.16-.75.24-1.28.24a.4.4 0 01-.4-.4zm4.35-.38a24.9 24.9 0 001.16.1 9.34 9.34 0 001.63-.18c.26-.05.5-.13.74-.22.23-.1.44-.22.61-.36a1.28 1.28 0 00.45-1.41.75.75 0 00-.17-.29 1.34 1.34 0 00-.66-.36 1.47 1.47 0 00-.35-.02c-.12 0-.24.02-.36.04-.3.04-.58.15-.88.32-.3.17-.56.37-.8.6a6.12 6.12 0 00-1.17 1.44l-.2.34zm5.73.38c0-.12.04-.21.12-.29a.38.38 0 01.28-.12h.4c.3 0 .6-.01.88-.05.28-.03.53-.09.74-.18.22-.09.39-.22.51-.38.12-.17.18-.4.17-.67a5.91 5.91 0 00-.11-.83l-.09-.36a10.78 10.78 0 00.78-.22 5.33 5.33 0 01.2 1.13 54.07 54.07 0 00.1.8c.04.14.08.27.14.39.07.1.16.2.28.27.12.07.28.1.48.1a.4.4 0 01.3.12c.08.08.12.17.12.29a.4.4 0 01-.4.4 1.9 1.9 0 01-.47-.05 1.9 1.9 0 01-.38-.15 1.9 1.9 0 01-.58-.51c-.14.13-.3.24-.5.33a6.1 6.1 0 01-2.16.39h-.4a.4.4 0 01-.4-.4zm2.56-4.82l-.76.76-.77-.77.76-.76.77.77zm1.85 0l-.76.77-.77-.77.76-.76.77.77zm.12 4.82c0-.12.04-.21.13-.29a.4.4 0 01.29-.12h1.03c.47 0 .95-.05 1.43-.14a12.13 12.13 0 002.81-.92c.46-.2.9-.4 1.34-.62l-1.56-.65a56.07 56.07 0 00-.94-.42 2.82 2.82 0 00-.8-.19.98.98 0 00-.37.08c-.12.04-.23.1-.34.18a3.36 3.36 0 00-.8 1l-.7-.42a3.52 3.52 0 011.3-1.41 1.9 1.9 0 011.4-.19 4.32 4.32 0 011.05.37 24.6 24.6 0 011.1.52l.49.24.5.24c.17.08.36.15.58.23a11.04 11.04 0 00.17.82 9.04 9.04 0 00-.73.34l-.3.15-1.23.56a15.5 15.5 0 01-2.87.9c-.51.1-1.02.15-1.53.15h-1.03a.4.4 0 01-.3-.12.38.38 0 01-.12-.3zm4.28-6.2l-.77.77-.77-.77.77-.77.77.78zm5.17 6.6a38.91 38.91 0 00.1-2.33 51.59 51.59 0 00-.12-3.95 27.08 27.08 0 00-.15-1.6l.82-.12v.03l.01.09a11.49 11.49 0 00.05.4 13.83 13.83 0 01.11 1.38 29.83 29.83 0 01.09 2.2 33.09 33.09 0 01-.01 2.33c-.02.51-.04 1.05-.08 1.62l-.82-.04z"/></g><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="rotate(44.98 2.81 8.02) scale(19.8838 58.6076)" gradientUnits="userSpaceOnUse"><stop stop-color="#FDC13B"/><stop offset=".66" stop-color="#F89F3E"/><stop offset="1" stop-color="#F4843F"/></radialGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h86v12H0z"/></clipPath></defs></svg></span>
      </div>`
    })

    document.querySelector("#series .series-container").insertAdjacentHTML("afterbegin", seriesInfo.join("")) 

    let moviesInfo = ""
    let dataMovies = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resMovies = await dataMovies.json()
    moviesInfo = resMovies.BestFilimo.movies.map(elem=>{
        return `<div class="movie">
            <img src="${elem.src}" alt="">
          </div>`
        
    })
    document.querySelector("#movies").insertAdjacentHTML("afterbegin", moviesInfo.join("")) 

    let seriesDive = document.querySelector("#series")
    let moviesDive = document.querySelector("#movies")
    let bestSeries = document.querySelectorAll("#series .serie")
    let bestMovies = document.querySelectorAll("#movies .movie")
    bestSeries[0].classList.add("active-state");
    bestMovies[0].classList.add("active-state");

    let seriesBtn = document.querySelector("#best .best-heading .switch .series-btn")
    let moviesBtn = document.querySelector("#best .best-heading .switch .movies-btn")

    let posterContainer = document.querySelector("#poster")
    let seriesContainer = document.querySelector("#filimo-series")
    let moviesContainer = document.querySelector("#filimo-movies")

    bazande()
    seriesBtn.addEventListener("click", function(){
       removeActive(bestMovies);
        moviesDive.style.display = "none";
        seriesDive.style.display = "flex";
        moviesBtn.style.backgroundColor = "black";
        seriesBtn.style.backgroundColor = "#313131";
        moviesContainer.innerHTML= ''
        seriesContainer.classList.add("series-active")
        bestSeries[0].classList.add("active-state");
        bazande()
    })
    moviesBtn.addEventListener("click", function(){
        removeActive(bestSeries);
        seriesDive.style.display = "none";
        moviesDive.style.display = "flex";
        seriesBtn.style.backgroundColor = "black";
        moviesBtn.style.backgroundColor = "#313131";
        seriesContainer.innerHTML = ''
        moviesContainer.classList.add("movie-active")
        bestMovies[0].classList.add("active-state");
        tehran()
    
    })

    function removeActive(best) {
        best.forEach((item) => {
            item.classList.remove("active-state");
        });

    }
    

    bestMovies.forEach((movie) => {
        movie.addEventListener("click", function() {
            removeActive(bestMovies);
            movie.classList.add("active-state");
        });
    })


    bestSeries.forEach((serie, index) => {
      serie.setAttribute('data-id', `serie-${index + 1}`);
      serie.addEventListener("click", function() {
          removeActive(bestSeries);
          serie.classList.add("active-state");   
          let filimoSeriesContainer = document.querySelector('div.filimo-series');
          filimoSeriesContainer.innerHTML = '';
          const serieId = serie.getAttribute('data-id');
          switch (serieId) {
              case 'serie-1':
                  bazande();
                  break;
              case 'serie-2':
                  joker(); 
                  break;
              case 'serie-3':
                  shamIran(); 
                  break;
              case 'serie-4':
                  sargije(); 
                  break;
              case 'serie-5':
                  lalayi(); 
                  break;
              case 'serie-6':
                  karmani(); 
                  break;
              default:
                 bazande();
          }
          
          
         
          
      });

  });

  bestMovies.forEach((movie, index) => {
    movie.setAttribute('data-id', `movie-${index + 1}`);
    movie.addEventListener("click", function() {
        removeActive(bestSeries);
        movie.classList.add("active-state");   
        let filimoMoviesContainer = document.querySelector('div.filimo-movies');
        filimoMoviesContainer.innerHTML = '';
        const moviesId = movie.getAttribute('data-id');
        switch (moviesId) {
            case 'movie-1':
                tehran();
                break;
            case 'movie-2':
                pariya(); 
                break;
            case 'movie-3':
                Bibadan(); 
                break;
            case 'movie-4':
                Havaie(); 
                break;
            default:
               tehran();
        }
        
        
       
        
    });

});


    async function bazande(){
      let dataDefault = await fetch("https://zahral996.github.io/jsonserver/db.json")
      let resDefault = await dataDefault.json()
      document.querySelector("#poster .filimo-series").insertAdjacentHTML("afterbegin", `<div class="selected-series">
              <img class="poster-filimo" src="${resDefault.BestFilimo.bazande.src}" alt="">
              <div class="series-content">
               <h2>${resDefault.BestFilimo.bazande.title}</h2>
              <p class="director">${resDefault.BestFilimo.bazande.director}</p>
              <div class="types">
                <span>${resDefault.BestFilimo.bazande.types.firstType}</span>
                <span>${resDefault.BestFilimo.bazande.types.secondType}</span>
              </div>
              <p class="explanation">${resDefault.BestFilimo.bazande.explanation}</p>
              <button><a href="${resDefault.BestFilimo.bazande.btn.href}">${resDefault.BestFilimo.bazande.btn.name}</a></button>
              <p>${resDefault.BestFilimo.bazande.detail}</p>
             </div>
            </div>`)   
  }

    async function joker(){
      let dataDefault = await fetch("https://zahral996.github.io/jsonserver/db.json")
      let resDefault = await dataDefault.json()
      document.querySelector("#poster .filimo-series").insertAdjacentHTML("afterbegin", `<div class="selected-series">
              <img class="poster-filimo" src="${resDefault.BestFilimo.Joker.src}" alt="">
             <div class="series-content">
               <h2>${resDefault.BestFilimo.Joker.title}</h2>
              <p class="director">${resDefault.BestFilimo.Joker.director}</p>
              <div class="types">
                <span>${resDefault.BestFilimo.Joker.types.firstType}</span>
                <span>${resDefault.BestFilimo.Joker.types.secondType}</span>
              </div>
              <p class="explanation">${resDefault.BestFilimo.Joker.explanation}</p>
              <button><a href="${resDefault.BestFilimo.Joker.btn.href}">${resDefault.BestFilimo.Joker.btn.name}</a></button>
              <p>${resDefault.BestFilimo.Joker.detail}</p>
             </div>
            </div>`)   
  }

    async function shamIran(){
        let dataDefault = await fetch("https://zahral996.github.io/jsonserver/db.json")
        let resDefault = await dataDefault.json()
        document.querySelector("#poster .filimo-series").insertAdjacentHTML("afterbegin", `<div class="selected-series">
                <img class="poster-filimo" src="${resDefault.BestFilimo.ShamIrani.src}" alt="">
                <div class="series-content">
                  <h2>${resDefault.BestFilimo.ShamIrani.title}</h2>
                  <p class="director">${resDefault.BestFilimo.ShamIrani.director}</p>
                  <div class="types">
                    <span>${resDefault.BestFilimo.ShamIrani.types.firstType}</span>
                    <span>${resDefault.BestFilimo.ShamIrani.types.secondType}</span>
                  </div>
                  <p class="explanation">${resDefault.BestFilimo.ShamIrani.explanation}</p>
                  <button><a href="${resDefault.BestFilimo.ShamIrani.btn.href}">${resDefault.BestFilimo.ShamIrani.btn.name}</a></button>
                  <p>${resDefault.BestFilimo.ShamIrani.detail}</p>
                </div>
              </div>`)   
    }
    async function sargije(){
        let dataDefault = await fetch("https://zahral996.github.io/jsonserver/db.json")
        let resDefault = await dataDefault.json()
        document.querySelector("#poster .filimo-series").insertAdjacentHTML("afterbegin", `<div class="selected-series">
                <img class="poster-filimo" src="${resDefault.BestFilimo.Sargije.src}" alt="">
               <div class="series-content">
                 <h2>${resDefault.BestFilimo.Sargije.title}</h2>
                <p class="director">${resDefault.BestFilimo.Sargije.director}</p>
                <div class="types">
                  <span>${resDefault.BestFilimo.Sargije.types.firstType}</span>
                  <span>${resDefault.BestFilimo.Sargije.types.secondType}</span>
                </div>
                <p class="explanation">${resDefault.BestFilimo.Sargije.explanation}</p>
                <button><a href="${resDefault.BestFilimo.Sargije.btn.href}">${resDefault.BestFilimo.Sargije.btn.name}</a></button>
                <p>${resDefault.BestFilimo.Sargije.detail}</p>
               </div>
              </div>`)   
    } 
    async function lalayi(){
        let dataDefault = await fetch("https://zahral996.github.io/jsonserver/db.json")
        let resDefault = await dataDefault.json()
        document.querySelector("#poster .filimo-series").insertAdjacentHTML("afterbegin", `<div class="selected-series">
                <img class="poster-filimo" src="${resDefault.BestFilimo.Lalayi.src}" alt="">
                <div class="series-content">
                  <h2>${resDefault.BestFilimo.Lalayi.title}</h2>
                  <p class="director">${resDefault.BestFilimo.Lalayi.director}</p>
                  <div class="types">
                    <span>${resDefault.BestFilimo.Lalayi.types.firstType}</span>
                    <span>${resDefault.BestFilimo.Lalayi.types.secondType}</span>
                </div>
                <p class="explanation">${resDefault.BestFilimo.Lalayi.explanation}</p>
                <button><a href="${resDefault.BestFilimo.Lalayi.btn.href}">${resDefault.BestFilimo.Lalayi.btn.name}</a></button>
                <p>${resDefault.BestFilimo.Lalayi.detail}</p>
                </div>
              </div>`)   
    } 
    async function karmani(){
        let dataDefault = await fetch("https://zahral996.github.io/jsonserver/db.json")
        let resDefault = await dataDefault.json()
        document.querySelector("#poster .filimo-series").insertAdjacentHTML("afterbegin", `<div class="selected-series">
                <img class="poster-filimo" src="${resDefault.BestFilimo.Karmani.src}" alt="">
                <div class="series-content">
                   <h2>${resDefault.BestFilimo.Karmani.title}</h2>
                  <p class="director">${resDefault.BestFilimo.Karmani.director}</p>
                  <div class="types">
                    <span>${resDefault.BestFilimo.Karmani.types.firstType}</span>
                    <span>${resDefault.BestFilimo.Karmani.types.secondType}</span>
                  </div>
                  <p class="explanation">${resDefault.BestFilimo.Karmani.explanation}</p>
                  <button><a href="${resDefault.BestFilimo.Karmani.btn.href}">${resDefault.BestFilimo.Karmani.btn.name}</a></button>
                  <p>${resDefault.BestFilimo.Karmani.detail}</p>
                </div>
              </div>`)   
    } 

    async function tehran(){
      let data = await fetch("https://zahral996.github.io/jsonserver/db.json")
      let res = await data.json()
      document.querySelector("#poster .filimo-movies").insertAdjacentHTML("afterbegin" , `<div class="best-movies-filimo">
            <div class="content">
              <h2>${res.BestFilimo.Tehran.title}</h2>
              <p class="director">${res.BestFilimo.Tehran.director}</p>
              <div class="types">
                <span>${res.BestFilimo.Tehran.types.firstType}</span>
                <span>${res.BestFilimo.Tehran.types.secondType}</span>
              </div>
              <p class="explanation">${res.BestFilimo.Tehran.explanation}</p>
              <button><a href="${res.BestFilimo.Tehran.btn.href}">${res.BestFilimo.Tehran.btn.name}</a></button>
              <p>${res.BestFilimo.Tehran.detail}</p>
            </div>
            <div class="poster-episodes">
              <img src="${res.BestFilimo.Tehran.src}" alt="">
            </div>
          </div>`)
    }
    async function pariya(){
      let data = await fetch("https://zahral996.github.io/jsonserver/db.json")
      let res = await data.json()
      document.querySelector("#poster .filimo-movies").insertAdjacentHTML("afterbegin" , `<div class="best-movies-filimo">
            <div class="content">
              <h2>${res.BestFilimo.paria.title}</h2>
              <p class="director">${res.BestFilimo.paria.director}</p>
              <div class="types">
                <span>${res.BestFilimo.paria.types.firstType}</span>
                <span>${res.BestFilimo.paria.types.secondType}</span>
              </div>
              <p class="explanation">${res.BestFilimo.paria.explanation}</p>
              <button><a href="${res.BestFilimo.paria.btn.href}">${res.BestFilimo.paria.btn.name}</a></button>
              <p>${res.BestFilimo.paria.detail}</p>
            </div>
            <div class="poster-episodes">
              <img src="${res.BestFilimo.paria.src}" alt="">
            </div>
          </div>`)
    }
    async function Bibadan(){
      let data = await fetch("https://zahral996.github.io/jsonserver/db.json")
      let res = await data.json()
      document.querySelector("#poster .filimo-movies").insertAdjacentHTML("afterbegin" , `<div class="best-movies-filimo">
            <div class="content">
              <h2>${res.BestFilimo.bibadan.title}</h2>
              <p class="director">${res.BestFilimo.bibadan.director}</p>
              <div class="types">
                <span>${res.BestFilimo.bibadan.types.firstType}</span>
                <span>${res.BestFilimo.bibadan.types.secondType}</span>
              </div>
              <p class="explanation">${res.BestFilimo.bibadan.explanation}</p>
              <button><a href="${res.BestFilimo.bibadan.btn.href}">${res.BestFilimo.bibadan.btn.name}</a></button>
              <p>${res.BestFilimo.bibadan.detail}</p>
            </div>
            <div class="poster-episodes">
              <img src="${res.BestFilimo.bibadan.src}" alt="">
            </div>
          </div>`)
    }
    async function Havaie(){
      let data = await fetch("https://zahral996.github.io/jsonserver/db.json")
      let res = await data.json()
      document.querySelector("#poster .filimo-movies").insertAdjacentHTML("afterbegin" , `<div class="best-movies-filimo">
            <div class="content">
              <h2>${res.BestFilimo.havayi.title}</h2>
              <p class="director">${res.BestFilimo.havayi.director}</p>
              <div class="types">
                <span>${res.BestFilimo.havayi.types.firstType}</span>
                <span>${res.BestFilimo.havayi.types.secondType}</span>
              </div>
              <p class="explanation">${res.BestFilimo.havayi.explanation}</p>
              <button><a href="${res.BestFilimo.havayi.btn.href}">${res.BestFilimo.havayi.btn.name}</a></button>
              <p>${res.BestFilimo.havayi.detail}</p>
            </div>
            <div class="poster-episodes">
              <img src="${res.BestFilimo.havayi.src}" alt="">
            </div>
          </div>`)
    }
  
}
export default Best