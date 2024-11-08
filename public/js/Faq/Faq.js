async function Faq(){
    let dataHeading = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resHeading = await dataHeading.json()
    document.querySelector("#faq .heading").insertAdjacentHTML("afterbegin", ` 
        <h4>${resHeading.Faq.heading.title}</h4>
        <p>${resHeading.Faq.heading.text}</p>`)

    let questionBox = ""
    let dataq = await fetch("https://zahral996.github.io/jsonserver/db.json")
    let resq = await dataq.json()
    questionBox = resq.Faq.accardeon.map(elem=>{
        return`<div class="accardeon">
              <span class="close"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F9AD03" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg></span>
              <h5>${elem.question}</h5>
              <p>${elem.answer}</p>
          </div>`
    })
    document.querySelector("#faq .question-boxes").insertAdjacentHTML("afterbegin", questionBox.join("")) 


    let accardeon = document.querySelectorAll("#faq .question-boxes .accardeon")
    
    function removeP() {
        accardeon.forEach((accar) => {
            [...accar.children].forEach((elem) => {
                if (elem.localName === "p") {
                    elem.classList.remove("active");
                }
            });
            
            const title = accar.querySelector("h5");
            if (title) {
                title.classList.remove("active-title");
            }
            const close = accar.querySelector(".close")
            if(close){
                close.classList.remove("active-close")
            }
        });
    }


    accardeon.forEach((accar) => {
        accar.addEventListener("click", function() {
            [...accar.children].forEach((elem) => {
                if (elem.localName === "p") {
                    const isActive = elem.classList.contains("active");
                    
                    removeP();

                    const title = accar.querySelector("h5");
                    const close =accar.querySelector(".close")
                    
                    if (!isActive) {
                        elem.classList.add("active");
                        title.classList.add("active-title"); 
                        close.classList.add("active-close")
                    } else {
                        title.classList.remove("active-title"); 
                        close.classList.remove("active-close");
                    }
                }
            });
        });
    });
}
export default Faq