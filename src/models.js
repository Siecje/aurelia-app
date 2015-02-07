export class Models{

  constructor(){
    this.incomes = [];
    this.expenses = [];
    this.debts = [];
  }

  addIncome(name, amount){
    this.incomes.push({name: name, amount: amount});
  }
  addExpense(name, amount){
    this.expenses.push({name: name, amount: amount});
  }
  addDebt(name, amount){
    this.debts.push({name: name, amount: amount});
  }
}

//export default new Models();
