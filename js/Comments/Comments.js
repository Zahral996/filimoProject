async function Comments(){
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#comments .heading-comment").insertAdjacentHTML("afterbegin", `<h2>${resHeading.Comments.heading.text}</h2>`)

    let filimoComments = ""
    let data = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let res = await data.json()
    filimoComments = res.Comments.comment.map(elem=>{
        return `<div class="swiper-slide">
              <div class="profile">
                <img src="./public/images/comment/profile1.webp" alt="">
                <p>${elem.name}</p>
              </div>
              <div class="comment">
                <p>${elem.text}</p>
              </div>
            </div>`
        
    })
    document.querySelector("#swiper3 .swiper-wrapper").insertAdjacentHTML("afterbegin", filimoComments.join("")) 

}
export default Comments