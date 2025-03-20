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
        balanceDiv.textContent = `${balance}`;  // Ensure it's a string
    }

    function addTransaction(type) {
        const description = descInput.value.trim();
        const amount = amountInput.value.trim();  // Keep as string for test compatibility
        const amountNum = parseInt(amount, 10);  // Convert for calculations

        if (!description || isNaN(amountNum) || amountNum <= 0) {
            return;
        }

        const listItem = document.createElement("li");
        if (type === "income") {
            listItem.textContent = `${description} - ${amount} kr (Inkomst)`;
            incomeList.appendChild(listItem);
            balance += amountNum;
        } else {
            listItem.textContent = `${description} - ${amount} kr (Utgift)`;
            expenseList.appendChild(listItem);
            balance -= amountNum;
        }
        
        updateBalance();

        // Clear input fields after adding transaction
        descInput.value = "";
        amountInput.value = "";
    }

    incomeBtn.addEventListener("click", () => addTransaction("income"));
    expenseBtn.addEventListener("click", () => addTransaction("expense"));
});
