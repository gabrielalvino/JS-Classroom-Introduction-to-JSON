let url = "https://economia.awesomeapi.com.br/last/USD-BRL"

fetch(url)
  .then((res) => {
    return res.json()
  })

  .then((data) =>{
    console.log(data);
  })
