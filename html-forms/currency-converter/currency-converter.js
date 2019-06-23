const request = new XMLHttpRequest();
request.open(
    "GET",
    "https://neto-api.herokuapp.com/currency",
    true
);
request.send();
const loader = document.getElementById('loader');
const content = document.getElementById('content');
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');

loader.classList.remove('hidden');
function makeList() {
    const listCurrency = JSON.parse(request.responseText)
    console.log(listCurrency);

    for (currency of listCurrency) {
        fromCurrency.innerHTML = `${fromCurrency.innerHTML}<option value="${currency.value}">${currency.code}</option>`;
        toCurrency.innerHTML = `${toCurrency.innerHTML}<option value="${currency.value}">${currency.code}</option>`;
    }

    loader.classList.add('hidden');
    content.classList.remove('hidden');
}
request.addEventListener('load', makeList);

const exchangeResult = document.getElementById('result');
const amountForExchange = document.getElementById('source');
function exchange() {
    exchangeResult.value = (amountForExchange.value * fromCurrency.value / toCurrency.value).toFixed(2);
}

amountForExchange.addEventListener('input', exchange);
fromCurrency.addEventListener('input', exchange);
toCurrency.addEventListener('input', exchange);