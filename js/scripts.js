class BankAccount {
    constructor() {
        this.balance = 0
    }

    verifyValue() {
        let valueText = document.querySelector("#insert-in-balance");
        let valueNumber = Number(valueText.value);

        if (!isNaN(valueNumber) && valueText.value.trim() !== "" && (valueNumber > 0)) {
            return [true, valueNumber]

        } else {
            return [false, valueText]
        }   
    }

    deposit() {
        let results = this.verifyValue()
        let continue_process = results[0]
        if (continue_process == true) {
            let value = results[1]
            this.balance += value

            document.getElementById('status-text').innerText = `Deposit of $ ${value.toFixed(2)} completed.`
            let valueText = document.querySelector("#insert-in-balance");
            valueText.value = ''
          
        } else {
            document.getElementById('status-text').innerText = `Please insert a valid value to execute the deposit`
        } 

    };

    withdraw() {
        let results = this.verifyValue()
        let continue_process = results[0]
        
        if (continue_process == true) {
            let value = results[1]
            let saldoFinal = (this.balance - value)
            if (saldoFinal < 0) {
                document.getElementById('status-text').innerText = `Insufficient balance to execute withdrawal of $ ${value.toFixed(2)}`
                // console.log(`Insufficient balance to execute withdrawal of $ ${amount}`)
            } else {
                this.balance = saldoFinal
                document.getElementById('status-text').innerText = `Withdrawl of R$ ${value.toFixed(2)} completed.`
                // console.log(`Withdraw of R$ ${amount}`)
            } 
            let valueText = document.querySelector("#insert-in-balance");
            valueText.value = ''           
        } else {
            document.getElementById('status-text').innerText = `Please insert a valid value to execute the withdrawl`
        }      
    };

    balanceTotal () {
        document.getElementById('status-text').innerText = `Account Balance: $ ${this.balance.toFixed(2)}`
        // console.log(`Account Balance: $ ${this.balance}`)
    }
}

let account = new BankAccount();

// events

let balanceBtn = document.querySelector(".btn-balance")
let withdrawlBtn = document.querySelector(".btn-withdrawl")
let depositBtn = document.querySelector(".btn-deposit")

balanceBtn.addEventListener('click', function () {
    account.balanceTotal();
})

withdrawlBtn.addEventListener('click', function (){
    account.withdraw()
})

depositBtn.addEventListener('click', function (){
    account.deposit()
})