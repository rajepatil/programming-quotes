import getContrast from "./getContrast";
import fatchQuote from "./fatchQuote";

const getData = async () => {
  const post = await fatchQuote();
  const contrast = await getContrast();

  const [bodycolor, buttoncolor] = [contrast.pair[0], contrast.pair[1]];
  const { ratio, score } = contrast;

  return { post, bodycolor, buttoncolor, ratio, score };
};

export default getData;
