// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.

enum TransactionType {
  Deposit,
  Withdraw,
}

type Transaction = {
  accountNo: number;
  amount: number;
  type: TransactionType;
};

type BankAccount = {
  accountNo: number;
  firstname: string;
  lastname: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
};

let accounts: BankAccount[] = [];

function createAccount(
  accountNo: number,
  firstname: string,
  lastname: string,
  balance: number,
  isActive: boolean = true
): BankAccount {
  const account: BankAccount = {
    accountNo: accountNo,
    firstname: firstname,
    lastname: lastname,
    balance: balance,
    isActive: isActive,
    transactions: [],
  };
  accounts.push(account);
  return account;
}
function findAccount(accountNo: number): BankAccount {
  return accounts.find((account: BankAccount) => account.accountNo === accountNo);
}

function processTransaction(accountNo: number, amount: number, transactionType: TransactionType): string {
  const account = findAccount(accountNo);

  if (!account) return "Account not found";
  const transaction: Transaction = {
    accountNo: accountNo,
    amount: amount,
    type: transactionType,
  };
  if (transactionType === TransactionType.Deposit) {
    account.balance += amount;
    account.transactions.push(transaction);
    return `${amount} deposited into account number ${accountNo}`;
  } else {
    if (account.balance < amount) return "Insufficient funds for withdrawal";
    account.balance -= amount;
    account.transactions.push(transaction);
    return `${amount} withdrawn from account number ${accountNo}`;
  }
}

function getBalance(accountNo: number): number {
  const account = findAccount(accountNo);
  return account.balance;
}

function getTransactionHistory(accountNo: number): Transaction[] {
  const account = findAccount(accountNo);
  return account.transactions;
}

function checkActiveStatus(accountNo: number): boolean {
  const account = findAccount(accountNo);
  return account.isActive;
}

function closeAccount(accountNo: number): string {
  accounts = accounts.filter((account) => account.accountNo !== accountNo);
  return `Account number ${accountNo} closed`;
}

// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
