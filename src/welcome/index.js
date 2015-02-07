import {Models} from '../models';

export class Welcome{
  static inject() { return [Models]; }
  constructor(Models){
    this.models = Models;
  }

  addIncome(){
    this.models.addIncome(this.income_name, this.income_amount);
    this.income_name = '';
    this.income_amount = '';
  }
  addExpense(){
    this.models.addExpense(this.expense_name, this.expense_amount);
    this.expense_name = '';
    this.expense_amount = '';
  }
  addDebt(){
    this.models.addDebt(this.debt_name, this.debt_amount);
    this.debt_name = '';
    this.debt_amount = '';
  }
}
