async function Menu() {
    let logo = ""
    let dataLogo = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resLogo = await dataLogo.json()
    logo = resLogo.Menu.logo.map((elem)=>{
        return `<img src="${elem.src}" alt="">`
        
    })
    document.querySelector("#logo").insertAdjacentHTML("afterbegin", logo.join(""))


    let menu=""
    let data = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let res = await data.json()
    menu = res.Menu.links.map((elem)=>{
        let isSearch = elem.name==="جستجو";
        return `<li class=${isSearch ? "searchMobile" : ''} >
                 <span>${elem.icon}</span>
                 <a class=${isSearch ? "not-active" : ''} href="${elem.href}">${elem.name}</a>
                </li>`
        
    })
    document.querySelector("#links ul").insertAdjacentHTML("afterbegin", menu.join(""))

    
    let login=""
    let dataLogin = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resLogin = await dataLogin.json()
    login = resLogin.Menu.login.map((elem)=>{
        return `<button class="login">
                  <a href="${elem.href}">${elem.name}</a>
                </button>`
        
    })
    document.querySelector("#btns").insertAdjacentHTML("afterbegin", login.join(""))

    let sub=""
    let dataSub = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resSub = await dataSub.json()
    sub = resSub.Menu.subscribe.map((elem)=>{
        return `<button class="subscribe">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" class="bi bi-play-btn" viewBox="0 0 16 16">
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg></span>  
                  <a href="${elem.href}">${elem.name}</a>
                </button>`
        
    })
    document.querySelector("#btns").insertAdjacentHTML("afterbegin", sub.join(""))
}

export default Menu