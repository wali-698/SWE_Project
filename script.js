let transactions = [];

const form = document.getElementById("transactionForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let type = document.getElementById("type").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;

    let transaction = {
        type: type,
        amount: amount,
        category: category,
        date: date,
        description: description
    };

    transactions.push(transaction);

    showTransactions();
    updateSummary();

    form.reset();
});


function showTransactions() {

    let list = document.getElementById("transactionList");

    list.innerHTML = "";

    if (transactions.length === 0) {

        list.innerHTML = '<p class="empty">No transactions yet.</p>';
        return;
    }

    transactions.forEach(function(transaction, index) {

        let div = document.createElement("div");

        div.classList.add("transaction");

        let sign = transaction.type === "income" ? "+" : "-";

        let amountClass =
            transaction.type === "income"
            ? "income-amount"
            : "expense-amount";

        div.innerHTML = `
            <div class="transaction-info">
                <h3>${transaction.description || transaction.category}</h3>
                <p>${transaction.category} | ${transaction.date}</p>
            </div>

            <div>
                <span class="${amountClass}">
                    ${sign} ৳${transaction.amount}
                </span>

                <button class="delete-btn" onclick="deleteTransaction(${index})">
                    Delete
                </button>
            </div>
        `;

        list.appendChild(div);
    });
}


function updateSummary() {

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(function(transaction) {

        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }

    });

    let balance = totalIncome - totalExpense;

    document.getElementById("income").innerText = "৳" + totalIncome;
    document.getElementById("expense").innerText = "৳" + totalExpense;
    document.getElementById("balance").innerText = "৳" + balance;
}


function deleteTransaction(index) {

    transactions.splice(index, 1);

    showTransactions();
    updateSummary();
}