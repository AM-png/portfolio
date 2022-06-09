fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(quote => console.log(quote.quote))