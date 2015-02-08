export class Models{

  constructor(){
    this.incomes = [{name: 'Work', amount: 1000}];
    this.bills = [{name: 'Hydro', amount: 60}];
    this.expenses = [{name: 'Food', amount: 200}];
    this.creditCards = [{name: 'CC', amount: 1000, interest: 0.20, annualFee: 100, payment: 10, min_payment_percent: 0.10, min_payment: 10}];
    this.overdrafts = [{name: 'Overdraft', amount: 500, interest: 0.20, monthlyFee: 5}]
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
  addCreditCard(name, amount, interest, annualFee, payment, min_payment_percent, min_payment){
    this.creditCards.push({name: name, amount: amount, interest: interest, annualFee: annualFee,
                           payment: payment, min_payment_percent: min_payment_percent, min_payment: min_payment});
  }
  addOverdraft(name, amount, interest, monthlyFee){
    this.overdraft.push({name: name, amount: amount, interest: interst, monthlyFee: monthlyFee});
  }
}
