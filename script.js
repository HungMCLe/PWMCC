document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true
  });

  const convertBtn = document.getElementById('convertBtn');
  const gaaRateCheckbox = document.getElementById('gaaRateCheckbox');
  const amountInput = document.getElementById('amount');
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  const resultP = document.getElementById('result');

  convertBtn.addEventListener('click', convert);

  function convert() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const gaaRateEnabled = gaaRateCheckbox.checked;

    let result;

    if (gaaRateEnabled) {
      if (fromCurrency === 'dollar' && toCurrency === 'unbound') {
        result = amount * 240;
      } else if (fromCurrency === 'unbound' && toCurrency === 'dollar') {
        result = amount / 240;
      } else if (fromCurrency === 'unbound' && toCurrency === 'bound') {
        result = amount * 1.5;
      } else if (fromCurrency === 'bound' && toCurrency === 'unbound') {
        result = amount / 1.5;
      } else if (fromCurrency === 'dollar' && toCurrency === 'gold') {
        result = amount * 333333.33;
      } else if (fromCurrency === 'gold' && toCurrency === 'dollar') {
        result = amount / 333333.33;
      } else {
        result = amount;
      }
    } else {
      if (fromCurrency === 'dollar' && toCurrency === 'unbound') {
        result = amount * 60;
      } else if (fromCurrency === 'unbound' && toCurrency === 'dollar') {
        result = amount / 60;
      } else if (fromCurrency === 'unbound' && toCurrency === 'bound') {
        result = amount * 1.5;
      } else if (fromCurrency === 'bound' && toCurrency === 'unbound') {
        result = amount / 1.5;
      } else if (fromCurrency === 'dollar' && toCurrency === 'gold') {
        result = amount * 333333.33;
      } else if (fromCurrency === 'gold' && toCurrency === 'dollar') {
        result = amount / 333333.33;
      } else {
        result = amount;
      }
    }

    if (toCurrency === 'dollar') {
      resultP.textContent = `Result: $${result.toFixed(2)}`;
    } else {
      resultP.textContent = `Result: ${result} ${toCurrency}`;
    }
  }
});