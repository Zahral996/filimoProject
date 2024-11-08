async function Footer(){
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#footer .heading").insertAdjacentHTML("afterbegin", `  <img src="${resHeading.Footer.heading.src}" alt="">`)

    let features = ""
    let dataFeatures = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resFeatures = await dataFeatures.json()
    features = resFeatures.Footer.features.map(elem=>{
        return`<div class="feature">
                <span>${elem.icon}</span>
                <p>${elem.text}</p>
                </div>`
    })
    document.querySelector("#footer .features").insertAdjacentHTML("afterbegin", features.join(""))

        
    let dataSubscribtion = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resSubscribtion = await dataSubscribtion.json()
    document.querySelector("#footer .subscribtion").insertAdjacentHTML("afterbegin", `
        <button>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
        </svg></span>
        <a href="${resSubscribtion.Footer.subscribe.href}">${resSubscribtion.Footer.subscribe.name}</a>
    </button>`)

}

export default Footer