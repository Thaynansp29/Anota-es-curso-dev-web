let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
