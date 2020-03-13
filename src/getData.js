import getContrast from "./getContrast";
import fatchQuote from "./fatchQuote";

const getData = async() => {

    console.log("get data")
    const post = await fatchQuote();
    const contrast = await getContrast();

    const [bodycolor, buttoncolor] = [contrast.pair[0], contrast.pair[1]];
    const { ratio, score } = contrast;
    console.log({data:{post, bodycolor, buttoncolor, ratio, score}})
    return { post, bodycolor, buttoncolor, ratio, score };
  }

export default getData;