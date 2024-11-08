async function Children(){
    let dataPoster = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resPoster = await dataPoster.json()
    document.querySelector("#children .pic").insertAdjacentHTML("afterbegin", `
        <img src="${resPoster.Children.poster.src}" alt="">`)

    let dataContent = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resContent = await dataContent.json()
    document.querySelector("#children .content").insertAdjacentHTML("afterbegin", `
        <h2>${resContent.Children.content.title}</h2>
          <p>${resContent.Children.content.text}</p>
          <div class="btns">
            <button class="btn"><a href="${resContent.Children.content.firstBtn.href}">${resContent.Children.content.firstBtn.name}</a></button>
            <button class="btn"><a href="${resContent.Children.content.secondBtn.href}">${resContent.Children.content.secondBtn.name}</a></button>
          </div>`)
}    



export default Children