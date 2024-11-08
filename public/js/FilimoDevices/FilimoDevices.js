async function FilimoDevices() {

  try {
    let picture = "";
    let dataPic = await fetch("https://zahral996.github.io/jsonserver/db.json");
    let resPic = await dataPic.json();
    picture = resPic.FilimoDevices;
    document.querySelector("#filimo-devices .picture").insertAdjacentHTML("afterbegin", `<img src="${picture.picture.src}" alt="">`);
} catch (error) {
    console.error('Error fetching data:', error);
}

  try {
      let titleInfo = "";
      let dataTitle = await fetch("https://zahral996.github.io/jsonserver/db.json");
      let resTitle = await dataTitle.json();
      titleInfo = resTitle.FilimoDevices;
      document.querySelector("#filimo-devices .descriptions .title").insertAdjacentHTML("afterbegin", `
          <div class="title">
              <h3>${titleInfo.title.title}</h3>
              <p>${titleInfo.title.description}</p>
          </div>
      `);
  } catch (error) {
      console.error('Error fetching data:', error);
  }

try{
  let deviceInfo = ""
  let dataDevice = await fetch("https://zahral996.github.io/jsonserver/db.json");
  let resDevice = await dataDevice.json()
  deviceInfo = resDevice.FilimoDevices.device.map(elem=>{
    return `<div>
            <div class="device">
              <span>${elem.icon}</span>
              <h5>${elem.name}<h5>
            </div>
            <span class="device-type">${elem.types}</span>
          </div>`
  })
  document.querySelector("#filimo-devices .descriptions .devices").insertAdjacentHTML("afterbegin", deviceInfo)
} catch (error) {
  console.error('Error fetching data:', error);
}

try {
  let sub = "";
  let dataSub= await fetch("https://zahral996.github.io/jsonserver/db.json");
  let resSub = await dataSub.json();
  sub = resSub.FilimoDevices;
  document.querySelector("#filimo-devices .descriptions .subscribtion-btn").insertAdjacentHTML("afterbegin", `<button class="btn"><a href="${sub.subscribtion.href}">${sub.subscribtion.name}</a></button>`);
} catch (error) {
  console.error('Error fetching data:', error);
}

}
export default FilimoDevices;