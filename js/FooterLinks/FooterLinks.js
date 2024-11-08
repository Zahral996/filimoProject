async function FooterLinks() {
    let links=""
    let data = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let res = await data.json()
    links = res.FooterLinks.links.map((elem)=>{
        return `<li><a href="${elem.href}">${elem.name}</a></li>`
        
    })
    document.querySelector("#footer-link .my-links").insertAdjacentHTML("afterbegin", links.join(""))


    let dataOther = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resOther = await dataOther.json()
    document.querySelector("#footer-link .otherlinks").insertAdjacentHTML("afterbegin", `
        <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg></span><a href="#">${resOther.FooterLinks.otherlinks.other.name}</a>`)

    let otherLinks=""
    let dataOtherLinks= await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resOtherLinks = await dataOtherLinks.json()
    otherLinks = resOtherLinks.FooterLinks.otherlinks.links.map((elem)=>{
        return `<li><a href="${elem.href}">${elem.name}</a></li>`
        
    })    
    document.querySelector("#footer-link .rules ul").insertAdjacentHTML("afterbegin", otherLinks.join(""))

    let dataMedia = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resMedia = await dataMedia.json()
    document.querySelector("#footer-link .social-media").insertAdjacentHTML("afterbegin", `
        <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></span>
        <a class="social-name" href="">${resMedia.FooterLinks.socialMedia.social.name}</a>`)


    let socialLinks=""
    let dataSocial = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resSocila = await dataSocial.json()
    socialLinks = resSocila.FooterLinks.socialMedia.medias.map((elem)=>{
        return `<li><a href="${elem.href}">${elem.name}</a></li>`
        
    })
    let mediaLinks = document.querySelector("#footer-link .social-media .medias .media")
    mediaLinks.insertAdjacentHTML("afterbegin", links.join("")) 


}
export default FooterLinks