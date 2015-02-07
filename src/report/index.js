import {Models} from '../models';

export class Flickr{
  static inject() { return [Models]; }
  constructor(Models){
    this.welcome = Models;

    this.totalIncome = 0;
    for(var i=0;i<Welcome.incomes.length;i++){
      this.totalIncome += Welcome.incomes[i].amount;
    }
    this.totalExpenses = 0;
    for(var i=0;i<Welcome.expenses.length;i++){
      this.totalIncome += Welcome.expenses[i].amount;
    }
    this.totalDebt = 0;
    this.totalDebtExpenses = 0;
    for(var i=0;i<Welcome.debts.length;i++){
      this.totalDebt += Welcome.debts[i].amount;
      this.totalDebtExpenses = Welcome.debts[i].amount * (Welcome.debts[i].interest/12);
    }
  }
}
