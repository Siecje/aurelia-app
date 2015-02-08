import {Models} from '../models';

export class Flickr{
  static inject() { return [Models]; }
  constructor(Models){
    this.models = Models;

    this.totalIncome = 0;
    for(var i=0;i<this.models.incomes.length;i++){
      this.totalIncome += parseInt(this.models.incomes[i].amount);
    }
    this.totalExpenses = 0;
    for(var i=0;i<this.models.expenses.length;i++){
      this.totalExpenses += parseInt(this.models.expenses[i].amount);
    }
    this.totalDebt = 0;
    this.totalDebtExpenses = 0;
    for(var i=0;i<this.models.debts.length;i++){
      this.totalDebt += parseInt(this.models.debts[i].amount);
      this.totalDebtExpenses = this.models.debts[i].amount * (this.models.debts[i].interest/12);
    }

    this.extra = this.totalIncome - this.totalExpenses - this.totalDebtExpenses;
    this.debtLeft = this.totalDebt - this.extra;
  }
}
