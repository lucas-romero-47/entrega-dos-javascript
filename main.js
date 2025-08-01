const gameNameInput = document.getElementById("game-name");
const gamePriceUsdInput = document.getElementById("game-price-usd");
const priceArsDisplay = document.getElementById("price-ars");
const calculateButton = document.getElementById("calculate-button");
const clearButton = document.getElementById("clear-button");

const USD_TO_ARS = 1380;

calculateButton.addEventListener("click", () => {
  const usdPrice = parseFloat(gamePriceUsdInput.value);
  const gameName = gameNameInput.value.trim();

  if (gameName === "") {
    priceArsDisplay.innerHTML =
      "<strong>Por favor, ingresá el nombre del juego.</strong>";
    return;
  }

  if (!usdPrice || usdPrice <= 0) {
    priceArsDisplay.innerHTML =
      "<strong>Por favor, ingresá un precio válido en USD.</strong>";
    return;
  }

  const arsPrice = usdPrice * USD_TO_ARS;

  priceArsDisplay.innerHTML = `El juego <strong>"${gameName}"</strong> cuesta aproximadamente <strong>$${arsPrice} ARS</strong>`;
});

clearButton.addEventListener("click", () => {
  gameNameInput.value = "";
  gamePriceUsdInput.value = "";
  priceArsDisplay.innerHTML = "---";
});
