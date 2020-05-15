const canvas = document.querySelector("#canvas");
const generateArt = () => {
  for (let i = 0; i < 2000; i++) {
    let color = "";
    let rand = Math.round(Math.random() * 12);

    if (rand <= 2) {
      color += "#9C5D00";
    } else if (rand > 2 && rand <= 4) {
      color += "#CDD0D5";
    } else if (rand > 4 && rand <= 6) {
      color += "#B09675";
    } else if (rand > 6 && rand <= 8) {
      color += "#5C8285";
    } else if (rand > 8 && rand <= 10) {
      color += "#7D2A00";
    } else if (rand > 10 && rand <= 12) {
      color += "#D23200";
    }

    let box = document.createElement("div");
    box.setAttribute(
      "style",
      `width: ${Math.round(Math.random() * 100)}px; height: ${
        Math.random() * 100
      }px; position:absolute; left: ${Math.round(
        Math.random() * 1600
      )}px; top: ${Math.round(
        Math.random() * 700
      )}px; background-color: ${color}; transform: rotate(${Math.round(
        Math.random() * 360
      )}deg); border-radius: 50%;`
    );
    document.body.appendChild(box);

    //Give that element a random size, position, color, and rotation (transform: rotate)
  }
};

generateArt();

//#9C5D00
// #CDD0D5
// #B09675
// #5C8285
// #7D2A00
// #D23200
