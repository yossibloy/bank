class Client {
    firstName;
    lastName;
    id;
}
class Account {
    id;
    clientId;
    balans;
}
class Transaction {
    id;
    accounId;
    type;
    amount;
}
function rnd(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let nams = ["yosi", "ouriel", "moshe", "slomo", "avi"];
let lastnams = ["levi", "ringer", "bloy", "vardi", "sahar"];
let clients = []
let accounts = []
let transactions = []

for (let i = 1; i < 6; i++) {
    let client = new Client;
    client.firstName = nams[i - 1]
    client.lastName = lastnams[i - 1]
    client.id = 1234 * i;
    clients.push(client)
}

for (let i = 1; i < 16; i++) {
    let account = new Account;
    account.id = i
    account.clientId = clients[rnd(5)].id
    accounts.push(account)

}

for (let i = 1; i < 100; i++) {
    let transaction = new Transaction;
    transaction.id = i
    transaction.accounId = accounts[rnd(15)].id
    transaction.type = rnd(2) == 1 ? "Deposit" : "Withdraw"
    transaction.amount = rnd(4000)
    if (transaction.type == "Withdraw") {
        transaction.amount *= -1;
    }
    transactions.push(transaction)
}

function getClaientById(cliId) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == cliId) {
            return clients[i]
        }
    }
}


function getAccountById(accId) {
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].clientId== accId) {
            return accounts[i]
        }
    }
}




function getTransactionByAccounId(accId) {
    let arrTransaction = []
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].accounId == accId) {
            arrTransaction.push(transactions[i])
        }
    }
    return arrTransaction

}

function getBalans(acc) {
    let sumBalans = 0;
    let arrtra = getTransactionByAccounId(acc.id)
    arrtra.forEach(tra => {
        sumBalans += tra.amount
    })
    return sumBalans;
}

accounts.forEach(acc => {
    acc.balans = getBalans(acc)
});
