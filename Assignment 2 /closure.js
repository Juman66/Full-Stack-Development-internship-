function bank() {
    let balance = 0;

    function deposit(amount) {
        balance = balance + amount;
        console.log("Balance after deposit =", balance);
    }

    function withdraw(amount) {
        balance = balance - amount;
        console.log("Balance after withdraw =", balance);
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}
let account = bank();
account.deposit(1000);
account.withdraw(500);
console.log("Final Balance =", account.getBalance());