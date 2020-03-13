const fatchQuote = async () => {
  // fetch("https://programming-quotes-api.herokuapp.com/quotes/random", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     return data;
  //   })
  //   .catch(error => console.log(error));

  const data = await fetch(
    "https://programming-quotes-api.herokuapp.com/quotes/random",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then(res => res.json()).then(res => {return res});
  return data;
};

export default fatchQuote;
