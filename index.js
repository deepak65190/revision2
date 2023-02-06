fetch("https://www.balldontlie.io/api/v1/players")
  .then((res) => res.json())
  .then((data) => {
    return displayData(data.data);
  });
let displayData = (data) => {
  let appendBox = document.getElementById("appendAllDiv");

  data.map((ele) => {

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src =
      "https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.34.png";
    let fullName = document.createElement("p");
    fullName.innerText = `${ele.first_name} ${ele.last_name}`;
    
    let positon = document.createElement("h5");
    positon.innerText = ele.position;
    let button = document.createElement("button");
    button.style.marginBottom = "10px";
    button.style.borderRadius = "4px";
    button.style.padding = "5px";
    button.style.color = "white";
    button.style.backgroundColor = "teal";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.innerText = "TEAM DETAILS";
    button.addEventListener("click", function modal(data) {
      console.log(data)
      let mod = document.getElementById("modal");

      let pareDiv = document.getElementById("appendAllDiv");
      pareDiv.style.opacity = ".1";
      pareDiv.style.transition = "opacity 1s,  transform 1s";

      mod.style.display = "block";
      mod.style.textAlign = "centre";

      mod.style.transition = "display 1s,  transform 1s";

      let modalBtn = document.createElement("button");
      modalBtn.innerText =""
      modalBtn.innerText = "X";
      modalBtn.addEventListener("click", function back() {
        let mod = document.getElementById("modal");
        let Div = document.getElementById("appendAllDiv");
        mod.style.display = "none";
        Div.style.opacity = "1";
        Div.style.transition = "opacity 2s,  transform 2s";
      });
      modalBtn.style.backgroundColor = "red";
      mod.append(modalBtn );
      //modaldiv.setAttribute("class" ,"mod")
      // let modalDiv= document.createElement("div") ;
      // modalDiv.style.width= "100px" ;
      // modalDiv.style.height= "100px" ;
      // modalDiv.style.backgroundColor= "red"
    });
    div.append(img, fullName, positon, button);

    appendBox.append(div);
   
  });
};
