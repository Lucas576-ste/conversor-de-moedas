const convertButton = document.querySelector(".convert-Button"); // Certifique-se de que o seletor corresponde ao HTML
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real 
    const currencyValueConverted = document.querySelector(".currency-value-converted"); // outras moedas

    console.log(currencySelect.value);

    const dolarToReal = 5.25;
    const euroToReal = 6.2;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { // Formata o número para o padrão americano
            style: "currency",         // Define o formato como monetário
            currency: "USD"            // Define a moeda como dólar
        }).format(inputCurrencyValue / dolarToReal); // Formata o valor convertido
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { // Formata o número para o padrão alemão
            style: "currency",         // Define o formato como monetário
            currency: "EUR"            // Define a moeda como euro
        }).format(inputCurrencyValue / euroToReal); // Formata o valor convertido
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { // Formata o número para o padrão brasileiro
        style: "currency",         // Define o formato como monetário
        currency: "BRL"            // Define a moeda como real
    }).format(inputCurrencyValue); // Formata o valor que o usuário digitou

    console.log(inputCurrencyValue / dolarToReal); 
}

function changeCurrency() {
        const currencyName = document.getElementById("currency-name");

        if (currencySelect.value == 'dolar'){ 
            currencyName.innerHTML = "Dólar Americano";
            document.getElementById("band").src = "./assets/dolar.png";

        }

        if (currencySelect.value == 'euro'){
            currencyName.innerHTML = "Euro";
            document.getElementById("band").src = "./assets/euro.png";
            currency: "EUR"   
        }

        convertValues()

        

}

currencySelect.addEventListener("change", changeCurrency)
// Adiciona o evento de clique ao botão para executar a função convertValues
convertButton.addEventListener("click", convertValues);