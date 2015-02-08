export class Models{

  constructor(){
    this.incomes = [{name: 'Work', amount: 1000}];
    this.bills = [{name: 'Hydro', amount: 60}];
    this.expenses = [{name: 'Food', amount: 200}];
    this.debts = [{name: 'CC', amount: 1000, interest: 0.20, fee: 100/12}];
  }

  addIncome(name, amount){
    this.incomes.push({name: name, amount: amount});
  }
  addBill(name, amount){
    this.bills.push({name: name, amount: amount});
  }
  addExpense(name, amount){
    this.expenses.push({name: name, amount: amount});
  }
  addDebt(name, amount, interest, fee){
    this.debts.push({name: name, amount: amount, interest: interest, fee: fee});
  }
}
