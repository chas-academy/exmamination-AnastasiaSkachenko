// Hämta HTML-element
const incomeBtn = document.getElementById('incomeBtn');
const expenseBtn = document.getElementById('expenseBtn');
const incomeList = document.getElementById('incomeList');
const expenseList = document.getElementById('expenseList');
const balanceSpan = document.getElementById('balance');
const transactionList = document.getElementById('transactionList');
const description = document.getElementById('desc');
const amount = document.getElementById('amount');

let incomeTransactions = [];
let expenseTransactions = [];
let balance = 0;

incomeBtn.addEventListener("click", () => {
        const descValue = description.value.trim();
    const amountValue = Number(amount.value);

     if (descValue === "" || isNaN(amountValue) || amountValue <= 0) {
        alert("Vänligen ange en giltig beskrivning och ett positivt belopp.");
        return;
    }

    const transaction = { description: descValue, amount: amountValue, type };

    incomeTransactions.push(transaction);
    balance += amountValue;
    

    updateUI();

    description.value = "";
    amount.value = "";

});

expenseBtn.addEventListener("click", () => {
    const descValue = description.value.trim();
    const amountValue = Number(amount.value);

     if (descValue === "" || isNaN(amountValue) || amountValue <= 0) {
        alert("Vänligen ange en giltig beskrivning och ett positivt belopp.");
        return;
    }

    const transaction = { description: descValue, amount: amountValue, type };


    expenseTransactions.push(transaction);
    balance -= amountValue;

    updateUI();

    description.value = "";
    amount.value = "";

});




function updateUI() {
    incomeList.innerHTML = "";
    expenseList.innerHTML = "";
    transactionList.innerHTML = "";

    incomeTransactions.forEach((transaction) => {
        const li = document.createElement("li");
        li.classList = 'income'
        li.textContent = `${transaction.description} - ${transaction.amount} kr`;
        incomeList.appendChild(li);
    });
    expenseTransactions.forEach((transaction) => {
        const li = document.createElement("li");
        li.classList = 'expense'
        li.textContent = `${transaction.description} - ${transaction.amount} kr`;
        expenseList.appendChild(li);
    });

    [...incomeTransactions, ...expenseTransactions].forEach((transaction) => {
        const li = document.createElement("li");
        li.className = transaction.type
        li.textContent = `${transaction.description}: ${transaction.type === 'income' ? '+' : '-'} ${transaction.amount} kr`;
        transactionList.appendChild(li);
    });

    balanceSpan.textContent = balance;
}



