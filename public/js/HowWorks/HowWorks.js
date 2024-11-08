async function HowWorks(){
   
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#how-watch .content .heading").insertAdjacentHTML("afterbegin", `
        <h2>${resHeading.HowWorks.heading.title}</h2>
        <p>${resHeading.HowWorks.heading.text}</p>`)

    try{
        let optionsInfo = ""
        let dataOption = await fetch("https://zahral996.github.io/jsonserver/db.json");
        let resOption = await dataOption.json()
        optionsInfo = resOption.HowWorks.options.map((elem)=>{
        return `
            <div class="option">
              <div class="icon">
                <span>${elem.icon}</span>
              </div>
              <div class="text">
                <h5>${elem.title}</h5>
                <p>${elem.types}</p>
              </div>
            </div>`
        })
        document.querySelector("#how-watch .content .options").insertAdjacentHTML("afterbegin", optionsInfo)
    } catch (error) {
        console.error('Error fetching data:', error);
    }


       
    let dataSub= await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resSub = await dataSub.json()
    document.querySelector("#how-watch .content .btn").insertAdjacentHTML("afterbegin", `
        <a href="${resSub.HowWorks.btn.href}">${resSub.HowWorks.btn.name}</a>
        `)   
   
    

    let dataBanner = await fetch('https://zahral996.github.io/jsonserver/db.json')
    let resBanner = await dataBanner.json()
    document.querySelector("#how-watch .banner").insertAdjacentHTML("afterbegin", `<img src=${resBanner.HowWorks.banner.src} alt="">`)



}    
export default HowWorks;