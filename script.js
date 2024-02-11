let withDraw = document.getElementById('withDraw')
let deposit = document.getElementById('deposit')
let input = document.getElementById('input')

// acount text and erros
let acountH1 = document.getElementById('acount')
let erros = document.getElementById('errors')
let success = document.getElementById('success')
let SmartHu = document.getElementById('SmartHu')

class bank {
  constructor(balance) {
    this.balance = balance
  }
  withDraw(amount) {
    if (this.balance - amount < 0) {
      console.log('get out of the bank BROKIE!')
      erro()
      return
    }
    if (amount < 0) {
      SmartHu.innerHTML = `Trying to be smart cuse Hu! Yo mama is so nasty, she went swimming and made the Dead Sea.`
    }
    this.balance -= amount
    console.log('You withDrew $' + amount)
    console.log('your balance $' + this.balance)
    console.log({ withdrawBalance: this.balance })
  }
  deposit(amount) {
    this.balance += amount

    console.log('You deposited $' + amount)
    console.log('your balance $' + this.balance)
    console.log({ depositBalance: this.balance })
  }
}


const patrickBank = new bank(0)
// console.log(patrickBank.balance)

acountH1.innerHTML = `<strong><b>You have in your acount : <mark>${patrickBank.balance}</mark></b></strong>`



deposit.onclick = () =>{ 
  console.log(input.value)
  patrickBank.deposit(Number(input.value))
  acountH1.innerHTML = `<strong><b>You have in your acount : <mark>${patrickBank.balance}</mark></b></strong>`
  SuccessDep()
}
withDraw.onclick = () => {
  
  console.log(input.value)
  patrickBank.withDraw(Number(input.value))
  acountH1.innerHTML = `<strong><b>You have in your acount : <mark>${patrickBank.balance}</mark></b></strong>`

}


function SuccessDep() {
  success.innerHTML = `Success! deposit of: <mark>${Number(input.value)}</mark>`; // Display the transaction amount
  erros.innerHTML = ``
}
function SuccessWithDraw() {
  success.innerHTML = `Success! WithDraw of: <mark>${Number(input.value)}</mark>`; // Display the transaction amount
  erros.innerHTML = ``
}

function erro() {
  erros.innerHTML = `SHUT UP BROKIE!!!`
  success.innerHTML = ``
}