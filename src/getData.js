import getContrast from "./getContrast";
import fatchQuote from "./fatchQuote";

const getData = async () => {
  const post = await fatchQuote();
  const contrast = await getContrast();

  const [bodycolor, buttoncolor] = [contrast.color1, contrast.color2];
  // console.log(post.en);

  const [quote, author] = [post.en, post.author];
  // const { ratio, score } = contrast;

  return { post, quote, author, bodycolor, buttoncolor, loading: false };
};

export default getData;
