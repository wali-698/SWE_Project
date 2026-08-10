let transactions = [];

function saveTransactions() {
    try {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("transactions", JSON.stringify(transactions));
            console.log("transactions saved", transactions.length);
        } else {
            console.warn("localStorage not available: cannot save transactions");
        }
    } catch (e) {
        console.error("Failed to save transactions to localStorage:", e);
    }
}

// Category lists for each type
const incomeCategories = [
    "Salary",
    "Business",
    "Investment",
    "Gift",
    "Other"
];

const expenseCategories = [
    "Food",
    "Transport",
    "Education",
    "Shopping",
    "Bills",
    "Entertainment",
    "Others"
];

function populateCategories(type) {
    const sel = document.getElementById("category");
    if (!sel) return;
    sel.innerHTML = "";

    const list = type === "income" ? incomeCategories : expenseCategories;

    list.forEach(function(cat) {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        sel.appendChild(opt);
    });
}

// update categories when type changes
const typeSelect = document.getElementById("type");
if (typeSelect) {
    typeSelect.addEventListener("change", function(e) {
        populateCategories(e.target.value);
    });
    // populate initial categories based on default type
    populateCategories(typeSelect.value || "expense");
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function(reg) {
                console.log('Service worker registered.', reg);
            })
            .catch(function(err) {
                console.warn('Service worker registration failed:', err);
            });
    });
}

function loadTransactions() {
    try {
        if (typeof localStorage === "undefined") {
            console.warn("localStorage not available: starting with empty transactions");
            transactions = [];
            return;
        }

        const data = localStorage.getItem("transactions");
        if (data) {
            try {
                transactions = JSON.parse(data) || [];
                console.log("transactions loaded", transactions.length);
            } catch (e) {
                console.error("Failed to parse transactions from localStorage:", e);
                transactions = [];
            }
        } else {
            transactions = [];
        }
    } catch (e) {
        console.error("Error reading from localStorage:", e);
        transactions = [];
    }
}

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

    saveTransactions();
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
    saveTransactions();
    showTransactions();
    updateSummary();
}

// initialize from storage
loadTransactions();
showTransactions();
updateSummary();