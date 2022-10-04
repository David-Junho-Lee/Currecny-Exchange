// Create 2 boxes for input and output(html)
// Create dropdown list(html)
// Import ratio for currency exchange rates
// Be able to select items from dropdown list
// If you insert number in input box, output box displays correctly converted number
// Both boxes can be used as input/output box

let currencyRatio = {
  USD: {
    USD: 1,
    AUD: 1.54,
    NZD: 1.75,
    KRW: 1432.44,
    unit: 'Dollar',
  },
  KRW: {
    USD: 0.0007,
    AUD: 0.0011,
    NZD: 0.0012,
    KRW: 1,
    unit: 'Won',
  },
  AUD: {
    USD: 0.65,
    AUD: 1,
    NZD: 1.13,
    KRW: 928.26,
    unit: 'Dollar',
  },
  NZD: {
    USD: 0.57,
    AUD: 0.88,
    NZD: 1,
    KRW: 818.16,
    unit: 'Dollar',
  },
}

let fromCurrency = 'NZD'
let toCurrency = 'USD'

document.querySelectorAll('#from-currency-list p').forEach((menu) =>
  menu.addEventListener('click', function () {
    // get button
    // change value in button
    document.getElementById('from-btn').textContent = this.textContent
    // save chosen exchanged currency value
    fromCurrency = this.textContent
    document.getElementById('from-unit').textContent =
      currencyRatio[fromCurrency].unit
    convert()
  })
)

document.querySelectorAll('#to-currency-list p').forEach((menu) =>
  menu.addEventListener('click', function () {
    document.getElementById('to-btn').textContent = this.textContent
    toCurrency = this.textContent
    document.getElementById('to-unit').textContent =
      currencyRatio[toCurrency].unit
    convert()
  })
)

// when you type numbers in from box, curreny exchange happens and display value
// function fromConvert() {
//   // get user input from-input-box
//   let fromAmount = document.getElementById('from-input').value
//   // get converted value
//   let convertedAmount = fromAmount * currencyRatio[fromCurrency][toCurrency]
//   // display converted value in 'input-box'
//   document.getElementById('to-input').value = convertedAmount
// }

// // do the same for to-input-box
// function toConvert() {
//   let toAmount = document.getElementById('to-input').value
//   let toFromConvertedAmount = toAmount * currencyRatio[toCurrency][fromCurrency]
//   document.getElementById('from-input').value = toFromConvertedAmount
// }

// refactor

function convert(type) {
  let amount = 0
  if (type == 'from') {
    amount = document.getElementById('from-input').value
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    document.getElementById('to-input').value = convertedAmount
  } else {
    amount = document.getElementById('to-input').value
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    document.getElementById('from-input').value = convertedAmount
  }
}
