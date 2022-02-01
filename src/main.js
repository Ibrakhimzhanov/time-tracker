const container = document.querySelector(".container");
const lists = document.querySelectorAll(".card-profile ul li");

// Events

let response = await fetch("./src/data.json");
let datas = await response.json();

function getData(data, type) {
  for (const item of data) {
    let title = item.title;
    if (item.title === "Self Care") {
      title = "selfcare";
    }
    let date;
    switch (type) {
      case "weekly":
        date = "Last Week";
        break;
      case "monthly":
        date = "Last Month";
        break;
      default:
        date = "Yesterday";
    }
  }
}
getData(datas, "test");

container.innerHTML += datas.map((data) => {
  return `
    <div class="card ${data["title"]} ">
    ${console.log(datas)}
      <div class="head">
        <img class ="icon" src=${data["img"]} alt="...">
      </div>
      <div class="text">
        <div class="head-text">
          <h2>${data["title"]} </h2>
           <span>...</span>
        </div>
        <h2>${data["timeframes"]["daily"]["current"]}hrs </h2>
        <p>Last week - ${data["timeframes"]["daily"]["previous"]}hrs</p>
      </div>
    </div>
  `;
});
