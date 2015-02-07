export class Models{

  constructor(){
    this.incomes = [];
    this.expenses = [];
    this.debts = [];
  }

  addIncome(){
    this.incomes.push({name: this.income_name, amount: this.income_amount});
    this.income_name = '';
    this.income_amount = '';
  }
  addExpense(){
    this.expenses.push({name: this.expense_name, amount: this.expense_amount});
    this.expense_name = '';
    this.expense_amount = '';
  }
  addDebt(){
    this.debts.push({name: this.debt_name, amount: this.debt_amount});
    this.debt_name = '';
    this.debt_amount = '';
  }
}
