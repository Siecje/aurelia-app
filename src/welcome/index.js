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

  addBill(){
    this.models.addBill(this.bill_name, this.bill_amount);
    this.bill_name = '';
    this.bill_amount = '';
  }

  addExpense(){
    this.models.addExpense(this.expense_name, this.expense_amount);
    this.expense_name = '';
    this.expense_amount = '';
  }

  addCreditCard(){s
    this.models.addCreditCard(this.debt_name, this.debt_amount, this.debt_interest,
                              this.debt_fee, this.debt_payment, this.debt_payment_percent,
                              this.debt_min_amount);
    this.debt_name = '';
    this.debt_amount = '';
    this.debt_interest = '';
    this.debt_fee = '';
    this.debt_payment = '';
    this.debt_payment_percent = '';
    this.debt_min_amount = '';
  }

  addOverdraft(){
    this.models.addOverdraft(this.debt_name, this.debt_amount, this.debt_interest,
                             this.debt_fee);
    this.debt_name = '';
    this.debt_amount = '';
    this.debt_interest = '';
    this.debt_fee = '';
  }

  // TODO: Note that bills are approx unless specified this month
}
