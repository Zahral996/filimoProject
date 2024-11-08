async function Slider(){
    let Sliderswiper = ""
    let data = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let res = await data.json()
    Sliderswiper = res.Homehero.slider.map(elem=>{
        return `<div class="swiper-slide">
                 <img src=${elem.src}>
                 <div class="black-overlay"></div>
                 </div>`
        
    })
    document.querySelector("#slider .swiper-wrapper").insertAdjacentHTML("afterbegin", Sliderswiper.join(""))

    let heading = ""
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    heading = resHeading.Homehero.heading.map(elem=>{
        return `<div class="heading">
            <h5>${elem.text1}</h5>
            <h2>${elem.text2}</h2>
             </div>`     
})
document.querySelector("#slider .content .heading").insertAdjacentHTML("afterbegin", heading.join(""))

let features = ""
let dataFeatures = await fetch("https://zahral996.github.io/jsonserver/db.json")
let resFeatures = await dataFeatures.json()
features = resFeatures.Homehero.features.map(elem=>{
    return`<div class="feature">
              <span>${elem.icon}</span>
              <p>${elem.text}</p>
            </div>`
})
document.querySelector("#slider .content .features").insertAdjacentHTML("afterbegin", features.join(""))

let subscribtion = ""
let dataSubscribtion = await fetch("https://zahral996.github.io/jsonserver/db.json")
let resSubscribtion = await dataSubscribtion.json()
subscribtion = resSubscribtion.Homehero.subscribtion.map(elem=>{
    return `<div class="subscribtion">
              <button>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg></span>
                <a href="${elem.href}">${elem.name}</a>
              </button>
            </div>
          </div>`     
})
document.querySelector("#slider .content .subscribtions").insertAdjacentHTML("afterbegin", subscribtion.join(""))

let offer = ""
let dataOffer = await fetch("https://zahral996.github.io/jsonserver/db.json")
let resOffer = await dataOffer.json()
offer = resOffer.Homehero.offer.map(elem=>{
    return `<span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="lightgray" class="bi bi-gift" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
              </svg>
            </span>
            <p>${elem.text}</p>`     
})
document.querySelector("#slider .content .offer").insertAdjacentHTML("afterbegin", offer.join(""))

}  
export default Slider