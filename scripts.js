const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select") // valor do select converted
const currencySelectToConvert = document.querySelector(".currency-select-to-convert") // valor do select to convert



convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelectToConvert.addEventListener("change", changeCurrency)

async function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value // Valor digitado
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor para converter
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido
    //async e await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,BRL-EUR,USD-EUR,EUR-USD,BTC-USD,BTC-EUR").then(response => response.json())
    const USDBRL = data.USDBRL.high
    const USDEUR = data.USDEUR.high
    const EURBRL = data.EURBRL.high
    const EURUSD = data.EURUSD.high
    const BTCBRL = data.BTCBRL.high
    const BTCUSD = data.BTCUSD.high
    const BTCEUR = data.BTCEUR.high
    const BRLUSD = data.BRLUSD.high
    const BRLEUR = data.BRLEUR.high
    //Dados da API consumidos
    const taxasCambio = {
        USD: { BRL: USDBRL, EUR: USDEUR, USD: 1, XBT: 1/BTCUSD},
        EUR: { BRL: EURBRL, USD: EURUSD, EUR: 1, XBT: 1/BTCEUR},
        BRL: { USD: BRLUSD, EUR: BRLEUR, BRL: 1 , XBT: 1/BTCBRL},
        XBT: { USD: BTCUSD, EUR: BTCEUR, BRL: BTCBRL, XBT: 1}
    };

    if (currencySelectToConvert.value == "real"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "dolar"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "euro"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
    }
    if (currencySelectToConvert.value == "bitcoin"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "XBT"
    }).format(inputCurrencyValue)
    }

    let currencyTypeToConvert = ""

    if (currencySelectToConvert.value == "real"){
        currencyTypeToConvert = "BRL"
    } else if (currencySelectToConvert.value == "dolar") {
        currencyTypeToConvert = "USD"
    } else if (currencySelectToConvert.value == "euro"){
        currencyTypeToConvert = "EUR"
    }else if (currencySelectToConvert.value == "bitcoin") {
        currencyTypeToConvert = "XBT"
    }


    if (currencySelect .value == "dolar"){
        
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * taxasCambio[currencyTypeToConvert]["USD"])
    }
    if (currencySelect.value == "euro" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * taxasCambio[currencyTypeToConvert]["EUR"])
    }
    if (currencySelect.value == "bitcoin" ){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue * taxasCambio[currencyTypeToConvert]["XBT"])
    }
    if (currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * taxasCambio[currencyTypeToConvert]["BRL"])
    }


}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name") 
    const currencyImg = document.querySelector(".currency-image")
    const inputCurrency = document.querySelector(".input-currency")
    const currencyNameToConvert = document.getElementById("currency-name-to-convert") 
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert")

    /* to convert value*/

    

    if (currencySelectToConvert.value == 'dolar'){
        currencyNameToConvert.innerHTML = 'Dólar Americano'
        currencyImgToConvert.src = "./assets/eua.png"
        inputCurrency.placeholder = "$ 0.00"
    }
    if (currencySelectToConvert.value == 'euro'){
        currencyNameToConvert.innerHTML = 'Euro'
        currencyImgToConvert.src = "./assets/euro.png"
        inputCurrency.placeholder = "0.00 €"
    }
    if (currencySelectToConvert.value == 'bitcoin'){
        currencyNameToConvert.innerHTML = 'Bitcoin'
        currencyImgToConvert.src = "./assets/bitcoin.png"
        inputCurrency.placeholder = "XBT 0.00"
    }
    if (currencySelectToConvert.value == 'real'){
        currencyNameToConvert.innerHTML = 'Real Brasileiro'
        currencyImgToConvert.src = "./assets/brasil.png"
        inputCurrency.placeholder = "R$ 0.00"
    }


    /* converted value*/
    if (currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = "./assets/eua.png"
    }
    if (currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value == 'bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == 'real'){
        currencyName.innerHTML = 'Real Brasileiro'
        currencyImg.src = "./assets/brasil.png"
    }

    

    convertValues()
}




/*

const numberFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'XBT',
  //maximumFractionDigits: 8 // O Bitcoin tem 8 casas decimais
});

*/
