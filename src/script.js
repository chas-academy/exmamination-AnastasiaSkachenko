document.addEventListener("DOMContentLoaded", () => {
    const descInput = document.getElementById("desc");
    const amountInput = document.getElementById("amount");
    const incomeBtn = document.getElementById("incomeBtn");
    const expenseBtn = document.getElementById("expenseBtn");
    const incomeList = document.getElementById("incomeList");
    const expenseList = document.getElementById("expenseList");
    const balanceDiv = document.getElementById("balance");
    
    let balance = 0;

    function updateBalance() {
        balanceDiv.textContent = balance;
    }

    function addTransaction(type) {
        const description = descInput.value.trim();
        const amount = parseInt(amountInput.value, 10);

        if (!description || isNaN(amount) || amount <= 0) {
            return;
        }

        const listItem = document.createElement("li");
        if (type === "income") {
            listItem.textContent = `${description} - ${amount} kr (Inkomst)`;
            incomeList.appendChild(listItem);
            balance += amount;
        } else {
            listItem.textContent = `${description} - ${amount} kr (Utgift)`;
            expenseList.appendChild(listItem);
            balance -= amount;
        }
        
        updateBalance();
    }

    incomeBtn.addEventListener("click", () => addTransaction("income"));
    expenseBtn.addEventListener("click", () => addTransaction("expense"));
});
