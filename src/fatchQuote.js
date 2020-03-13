const fatchQuote = async () => {
  const data = await fetch(
    "https://programming-quotes-api.herokuapp.com/quotes/random",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      return res;
    });
  return data;
};

export default fatchQuote;
