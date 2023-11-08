import errorImg from "/assets/images/no_found.png";
let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

const cardList = document.querySelector(".card-list");
const filterArea = document.querySelector(".filter-area");
const filterData = document.querySelector(".filter-data");
// console.log(cardList);
function init() {
    let str = "";
    let count = 0;
    data.forEach(function (item, index) {
      let formattedPrice = item.price.toLocaleString();
      str += `
        <div class="card g-4">
          <div class="card-section">
            <span class="tag bg-secondary text-white">${item.area}</span>
            <img src="${item.imgUrl}" class="card-img-top" alt="${item.area}圖示">
            <span class="tag2 bg-primary text-white">${item.rate}</span>
          </div>
          <div class="card-body pb-14-cb h-100">
            <h5 class="fs-3 border-2-bottom pb-1 text-primary fw-med mb-0">${item.name}</h5>
            <p class="card-text pt-4 pb-22 text-light">
              ${item.description}
            </p>
            <ul class="p-0 m-0 d-flex justify-content-between align-items-center">
              <li class="d-flex text-primary">
                <span class="material-symbols-outlined">
                  error
                </span>
                <p class="fw-med">剩下最後${item.group}組</p>
              </li>
              <li class="d-flex text-primary align-items-center justify-content-center">
                <span class="me-1 fw-med">TWD</span>
                <p class="fs-2 font-Roboto fw-med">$${formattedPrice}</p>
              </li>
            </ul>
          </div>
        </div>
      `;
      count += 1;
    });
    filterData.textContent = `本次搜尋共 ${count} 筆資料`;
    cardList.innerHTML = str;
  }
    
init();

filterArea.addEventListener("change", function (e) {
  e.preventDefault();
  if (e.target.value == "") {
    console.log("你點擊到空的地方");
  }
  let str = "";
  let count = 0;
  data.forEach(function (item, index) {
    let formattedPrice = item.price.toLocaleString();
    if (e.target.value == item.area || e.target.value == "全部") {
      str += `
            <div class="card g-4">
            <div class="card-section">
              <span class="tag bg-secondary text-white">${item.area}</span>
              <img src="${item.imgUrl}" class="card-img-top" alt="${item.area}圖示">
              <span class="tag2 bg-primary text-white">${item.rate}</span>
            </div>
            <div class="card-body pb-14-cb h-100">
              <h5 class="fs-3 border-2-bottom pb-1 text-primary fw-med mb-0">${item.name}</h5>
              <p class="card-text pt-4 pb-22 text-light">
                ${item.description}
              </p>
              <ul class="p-0 m-0 d-flex justify-content-between align-items-center">
                <li class="d-flex text-primary">
                  <span class="material-symbols-outlined">
                    error
                  </span>
                  <p class="fw-med">剩下最後${item.group}組</p>
                </li>
                <li class="d-flex text-primary align-items-center justify-content-center">
                  <span class="me-1 fw-med">TWD</span>
                  <p class="fs-2 font-Roboto fw-med">$${formattedPrice}</p>
                </li>
              </ul>
            </div>
          </div>
            `;
      count += 1;
      
    } 
  });
  filterData.textContent = `本次搜尋共 ${count}筆資料`;
  cardList.innerHTML = str;
});
//判斷網址是否為真網址
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
const inputName = document.querySelector("#inputName");
const inputUrl = document.querySelector("#inputUrl");
const inputArea = document.querySelector("#inputArea");
const inputPrice = document.querySelector("#inputPrice");
const inputSet = document.querySelector("#inputSet");
const inputStar = document.querySelector("#inputStar");
const inputDescription = document.querySelector("#inputDescription");
const addBtn = document.querySelector("#addBtn");
const imgUrl2 = "/assets/images/no_found.png";


// console.log(addBtn);
function addData() {
  addBtn.addEventListener("click", function (e) {
    // console.log(data);
    if (
      inputName.value == "" ||
      inputUrl.value == "" ||
      inputArea.value == "" ||
      inputPrice.value == "" ||
      inputSet.value == "" ||
      inputStar.value == "" ||
      inputDescription.value == ""
    ) {
      alert("請填寫欄位");
      return
    }
    if(inputStar.value>10 || inputStar.value<1){
        alert("請填寫套票星級1-10");
        return
    }
    let obj = {};
    obj.id = data.length;
    obj.name = inputName.value;
    obj.imgUrl = inputUrl.value;
    obj.area = inputArea.value;
    obj.price = inputPrice.value;
    obj.group = inputSet.value;
    obj.rate = inputStar.value;
    obj.description = inputDescription.value;
    data.push(obj);
    if (!isValidUrl(inputUrl.value)) {
        // 如果輸入的URL無效，設定為指定的圖片位址
        obj.imgUrl = errorImg; // 替換為您的指定圖片位址
    } else {
        obj.imgUrl = inputUrl.value;
    }
    init();
    inputName.value = "";
    inputUrl.value = "";
    inputArea.value = "請選擇景點地區";
    inputPrice.value = "";
    inputSet.value = "";
    inputStar.value = "";
    inputDescription.value = "";
  });

}
addData();
