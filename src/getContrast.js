import contrast from "get-contrast";

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const getContrast = () => {
  let color1 = randomColor();
  let color2 = randomColor();

  let accessible = contrast.isAccessible(color1, color2);

  while (!accessible) {
    color2 = randomColor();
    accessible = contrast.isAccessible(color1, color2);
  }

  var ratio = contrast.ratio(color1, color2).toFixed(2);
  var score = contrast.score(color1, color2);
  return { ratio, score, pair: [color1, color2] };
};

export default getContrast;
