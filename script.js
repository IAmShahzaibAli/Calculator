const URL = `https://latest.currency-api.pages.dev/v1/currencies/usd.json`;
const btn = document.querySelector("#btn");
const amount = document.querySelector("input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    let opt1 = select1.value;
    let opt2 = select2.value;
    if(amount.value > 1000000){
        amount.value = 999999;
    }
    if(amount.value < 1){
        amount.value = 1;
    }

    const URL = `https://latest.currency-api.pages.dev/v1/currencies/${opt1}.json`;

    const aaaa = async()=>{
        let response = await fetch(URL);
        let formatted_data = await response.json();

        let conversionRate = formatted_data[opt1][opt2];
        console.log(conversionRate);

        let amountval = amount.value * conversionRate;
        result.innerHTML = `${amount.value} ${opt1} = ${amountval} ${opt2}`;
    }

    aaaa();
})