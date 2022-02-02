const container = document.querySelector(".card-wrapper");
const lists = document.querySelectorAll(".card-profile ul li");

let response = await fetch("./src/data.json");
let datas = await response.json();

container.innerHTML =
  container.innerHTML +
  datas.map((data) => {
    let lowerTitle =
      data.title == "Self Care" ? "self-care" : data.title.toLowerCase();
    let imgUrl = `./images/icon-${lowerTitle}.svg`;
    return `
    <div class="card ${data.title} ">
      <div class="head">
        <img class ="icon" src=${imgUrl} alt="${lowerTitle}">
      </div>
      <div class="text">
        <div class="head-text">
          <h2>${data.title} </h2>
           <span>...</span>
        </div>
        <h2>${data.timeframes.daily.current}hrs </h2>
        <p>Last week - ${data.timeframes.daily.previous}hrs</p>
      </div>
    </div>
  `;
  });

container.addEventListener("click", (event) => {
  container.innerHTML =
    container.innerHTML +
    datas.map((data) => {
      let lowerTitle =
        data.title == "Self Care" ? "self-care" : data.title.toLowerCase();
      let imgUrl = `./images/icon-${lowerTitle}.svg`;
      return `
      <div class="card ${data.title} ">
        <div class="head">
          <img class ="icon" src=${imgUrl} alt="${lowerTitle}">
        </div>
        <div class="text">
          <div class="head-text">
            <h2>${data.title} </h2>
             <span>...</span>
          </div>
          <h2>${data["timeframes"][`${event.target.id}`]["current"]}hrs </h2>
          <p>Last week - ${
            data["timeframes"][`${event.target.id}`]["previous"]
          }hrs</p>
        </div>
      </div>
    `;
    });
});
