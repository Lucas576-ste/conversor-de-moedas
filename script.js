// ==============================
// === SELETORES PRINCIPAIS ====
// ==============================
const convertButton = document.querySelector(".convert-Button");
const currencySelect = document.querySelector(".currency-select");
const currencyOrigin = document.querySelector(".currency-origin");

// ==============================
// === TAXAS DE CONVERSÃO ======
// ==============================
// Valores fixos apenas para exemplo. Ideal seria usar uma API depois.
const realToDolar = 5.34;
const realToEuro = 6.21;
const realToLibra = 7.16;
const realToBitcoin = 654941.17;
const realToPesoChileno = 0.006; // valor ilustrativo

const dolarToReal = 0.19;
const dolarToEuro = 1.16;
const dolarToLibra = 1.33;
const dolarToPesoChileno = 1.34;
const dolarToBitcoin = 122682.4;

const euroToReal = 0.16;
const euroToDolar = 0.86;
const euroToLibra = 1.15;
const euroToPesoChileno = 1.15;
const euroToBitcoin = 105356.11;

const libraToReal = 0.14;
const libraToDolar = 0.75;
const libraToEuro = 0.87;
const libraToPesoChileno = 1.10;
const libraToBitcoin = 91462.2;

const pesoChilenoToReal = 0.14;
const pesoChilenoToDolar = 0.75;
const pesoChilenoToEuro = 0.87;
const pesoChilenoToLibra = 0.91;
const pesoChilenoToBitcoin = 91462.2;

const bitcoinToReal = 0.0000016;
const bitcoinToDolar = 0.0000086;
const bitcoinToEuro = 0.000010;
const bitcoinToLibra = 0.000011;
const bitcoinToPesoChileno = 0.0000016;

// ==============================
// === FUNÇÃO DE CONVERSÃO =====
// ==============================
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor de origem
    const currencyValueConverted = document.querySelector(".currency-value-converted");   // valor convertido

    const origin = currencyOrigin.value;
    const target = currencySelect.value;

    let convertedValue = 0;

    // =========================================
    // === LÓGICA DE CONVERSÃO ENTRE MOEDAS ====
    // =========================================

    // Para simplificar, vamos usar condições diretas (sem mexer no seu estilo)
    if (origin == "real" && target == "dolar") convertedValue = inputCurrencyValue / realToDolar;
    if (origin == "real" && target == "euro") convertedValue = inputCurrencyValue / realToEuro;
    if (origin == "real" && target == "libra") convertedValue = inputCurrencyValue / realToLibra;
    if (origin == "real" && target == "bitcoin") convertedValue = inputCurrencyValue / realToBitcoin;
    if (origin == "real" && target == "peso-chileno") convertedValue = inputCurrencyValue / (1 / realToPesoChileno);

    if (origin == "dolar" && target == "real") convertedValue = inputCurrencyValue / dolarToReal;
    if (origin == "dolar" && target == "euro") convertedValue = inputCurrencyValue / dolarToEuro;
    if (origin == "dolar" && target == "libra") convertedValue = inputCurrencyValue / dolarToLibra;
    if (origin == "dolar" && target == "peso-chileno") convertedValue = inputCurrencyValue / dolarToPesoChileno;
    if (origin == "dolar" && target == "bitcoin") convertedValue = inputCurrencyValue / dolarToBitcoin;

    if (origin == "euro" && target == "real") convertedValue = inputCurrencyValue / euroToReal;
    if (origin == "euro" && target == "dolar") convertedValue = inputCurrencyValue / euroToDolar;
    if (origin == "euro" && target == "libra") convertedValue = inputCurrencyValue / euroToLibra;
    if (origin == "euro" && target == "peso-chileno") convertedValue = inputCurrencyValue / euroToPesoChileno;
    if (origin == "euro" && target == "bitcoin") convertedValue = inputCurrencyValue / euroToBitcoin;

    if (origin == "libra" && target == "real") convertedValue = inputCurrencyValue / libraToReal;
    if (origin == "libra" && target == "dolar") convertedValue = inputCurrencyValue / libraToDolar;
    if (origin == "libra" && target == "euro") convertedValue = inputCurrencyValue / libraToEuro;
    if (origin == "libra" && target == "peso-chileno") convertedValue = inputCurrencyValue / libraToPesoChileno;
    if (origin == "libra" && target == "bitcoin") convertedValue = inputCurrencyValue / libraToBitcoin;

    if (origin == "peso-chileno" && target == "real") convertedValue = inputCurrencyValue / pesoChilenoToReal;
    if (origin == "peso-chileno" && target == "dolar") convertedValue = inputCurrencyValue / pesoChilenoToDolar;
    if (origin == "peso-chileno" && target == "euro") convertedValue = inputCurrencyValue / pesoChilenoToEuro;
    if (origin == "peso-chileno" && target == "libra") convertedValue = inputCurrencyValue / pesoChilenoToLibra;
    if (origin == "peso-chileno" && target == "bitcoin") convertedValue = inputCurrencyValue / pesoChilenoToBitcoin;

    if (origin == "bitcoin" && target == "real") convertedValue = inputCurrencyValue / bitcoinToReal;
    if (origin == "bitcoin" && target == "dolar") convertedValue = inputCurrencyValue / bitcoinToDolar;
    if (origin == "bitcoin" && target == "euro") convertedValue = inputCurrencyValue / bitcoinToEuro;
    if (origin == "bitcoin" && target == "libra") convertedValue = inputCurrencyValue / bitcoinToLibra;
    if (origin == "bitcoin" && target == "peso-chileno") convertedValue = inputCurrencyValue / bitcoinToPesoChileno;

    // Se a moeda for igual, não converter
    if (origin == target) convertedValue = inputCurrencyValue;

    // ==============================
    // === EXIBIÇÃO FORMATADA ======
    // ==============================
    // Valor convertido
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: target == "real" ? "BRL" :  
                  target == "dolar" ? "USD" :
                  target == "euro" ? "EUR" :
                  target == "libra" ? "GBP" :
                  target == "bitcoin" ? "BTC" :
                  "CLP"
    }).format(convertedValue);

    // Valor de origem
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: origin == "real" ? "BRL" :
                  origin == "dolar" ? "USD" :
                  origin == "euro" ? "EUR" :
                  origin == "libra" ? "GBP" :
                  origin == "bitcoin" ? "BTC" :
                  "CLP"
    }).format(inputCurrencyValue);
}

// ==============================
// === FUNÇÃO DE TROCA DE MOEDA =
// ==============================
function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyPlay = document.getElementById("currency-play");

    // -----------------------------
    // --- MOEDA DE DESTINO (à direita)
    // -----------------------------
    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = "Dólar Americano";
        document.getElementById("band").src = "./assets/dolar.png";
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = "Euro";
        document.getElementById("band").src = "./assets/euro.png";
    }

    if (currencySelect.value == 'real') {
        currencyName.innerHTML = "Real Brasileiro";
        document.getElementById("band").src = "./assets/real.png";
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = "Bitcoin";
        document.getElementById("band").src = "./assets/Bitcoin.png";
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = "Libra Esterlina";
        document.getElementById("band").src = "./assets/libra.png"; // imagem reservada
    }

    if (currencySelect.value == 'peso-chileno') {
        currencyName.innerHTML = "Peso Chileno";
        document.getElementById("band").src = "./assets/peso-chileno.png"; // imagem reservada
    }

    // -----------------------------
    // --- MOEDA DE ORIGEM (à esquerda)
    // -----------------------------
    if (currencyOrigin.value == 'real') {
        currencyPlay.innerHTML = "Real Brasileiro";
        document.getElementById("band2").src = "./assets/real.png";
    }

    if (currencyOrigin.value == 'dolar') {
        currencyPlay.innerHTML = "Dólar Americano";
        document.getElementById("band2").src = "./assets/dolar.png";
    }

    if (currencyOrigin.value == 'euro') {
        currencyPlay.innerHTML = "Euro";
        document.getElementById("band2").src = "./assets/euro.png";
    }

    if (currencyOrigin.value == 'bitcoin') {
        currencyPlay.innerHTML = "Bitcoin";
        document.getElementById("band2").src = "./assets/Bitcoin.png";
    }

    if (currencyOrigin.value == 'libra') {
        currencyPlay.innerHTML = "Libra Esterlina";
        document.getElementById("band2").src = "./assets/libra.png"; // imagem reservada
    }

    if (currencyOrigin.value == 'peso-chileno') {
        currencyPlay.innerHTML = "Peso Chileno";
        document.getElementById("band2").src = "./assets/chile.png"; // imagem reservada
    }

    convertValues();
}

// ==============================
// === EVENTOS =================
// ==============================
currencySelect.addEventListener("change", changeCurrency);
currencyOrigin.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
