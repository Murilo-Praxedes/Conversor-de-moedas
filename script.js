const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertvalues() {
   const inputValue = document.querySelector(".input-currency").value;
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
   const currencyValueConverted = document.querySelector(".currency-value");

   console.log(currencySelect.value);

   const dolarToday = 5.2;
   const euroToday = 6.2;
   const btcToday = 500550.13;
   const clpToday = 0.00619
   const libraToday = 7.39


   const convertedValue = inputValue / dolarToday;

   if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputValue / dolarToday);
   }
   if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputValue / euroToday);
   }
   if (currencySelect.value == "btc") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC",
      }).format(inputValue / btcToday);
   }
   if (currencySelect.value == "pesos") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("es-CL", {
         style: "currency",
         currency: "CLP",
      }).format(inputValue / clpToday);
   }
   if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP",
      }).format(inputValue / libraToday);
   }
   


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(inputValue);


}
function changeCurrency() {
   const currencyName = document.getElementById("currency-name");
   const currencyImg = document.querySelector(".currency-img");

   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar Americano";
      currencyImg.src = "./assets/estados-unidos.png";
   }
   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro";
      currencyImg.src = "./assets/euro.png";
   }
   if (currencySelect.value == "btc") {
      currencyName.innerHTML = "BTC";
      currencyImg.src = "./assets/bitcoin 1.png";
   }
   if (currencySelect.value == "pesos") {
      currencyName.innerHTML = "CLP";
      currencyImg.src = "./assets/chile.png";
   }
   if (currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra Esterlina";
      currencyImg.src = "./assets/libra.png";
   }

   convertvalues()
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertvalues);