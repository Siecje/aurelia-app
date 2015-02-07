import {Models} from '../models';

export class Welcome{
  static inject() { return [Models]; }
  constructor(Models){
    this.welcome = Models;
  }

  addIncome(){
    this.welcome.addIncome(this.income_name, this.income_amount);
    this.income_name = '';
    this.income_amount = '';
  }
  addExpense(){
    this.welcome.addExpense(this.expense_name, this.expense_amount);
    this.expense_name = '';
    this.expense_amount = '';
  }
  addDebt(){
    this.welcome.addDebt(this.debt_name, this.debt_amount);
    this.debt_name = '';
    this.debt_amount = '';
  }
}
