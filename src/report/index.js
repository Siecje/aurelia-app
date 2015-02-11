import {Models} from '../models';

export class Flickr{
  static inject() { return [Models]; }
  constructor(Models){
    this.models = Models;

    this.totalIncome = 0;
    this.models.incomes.forEach(income => this.totalIncome += income.amount);

    this.totalExpenses = 0;
    this.models.expenses.forEach(expense => this.totalExpenses += expense.amount);

    this.totalBills = 0;
    this.models.bills.forEach(bill => this.totalBills += bill.amount);

    this.totalDebt = 0;
    this.newDebt = 0;
    this.debtPayments = 0;
    this.debtLeft = 0;
    // TODO: how to include annual fee
    // TODO: is it this is costing you this much to have?
    for(var i=0;i<this.models.creditCards.length;i++){
      this.totalDebt += this.models.creditCards[i].amount;
      this.newDebt += this.models.creditCards[i].amount * (this.models.creditCards[i].interest/12);
      this.debtPayments += this.models.creditCards[i].payment;
      this.debtLeft += this.models.creditCards[i].amount + this.models.creditCards[i].amount * (this.models.creditCards[i].interest/12) - this.models.creditCards[i].payment;
    }

    var payment = 0;
    for(var i=0;i<this.models.overdrafts.length;i++){
      payment = this.models.overdrafts[i].monthlyFee + this.models.overdrafts[i].amount*(this.models.overdrafts[i].interest/12);
      this.totalDebt += this.models.overdrafts[i].amount;
      this.newDebt += payment;
      this.debtPayments += payment;
      this.debtLeft += payment;
    }

    this.newDebt = this.newDebt.toFixed(2);
    this.debtLeft = this.debtLeft.toFixed(2);

    this.extraMoney = this.totalIncome - this.totalExpenses - this.totalBills - this.debtPayments;
    this.extraMoney = this.extraMoney.toFixed(2);
    if (this.extraMoney <= 0){
      this.extraMoney = 0;
    }

    //Find highest interest rate debt
    // TODO: use annual/monthly fee
    var highestInterest = 0;
    this.target = {};
    this.models.creditCards.forEach(debt => {
      if (debt.interest > highestInterest){
        highestInterest = debt.interest;
        this.target = debt;
      }
    });
    this.models.overdrafts.forEach(debt => {
      if (debt.interest > highestInterest){
        highestInterest = debt.interest;
        this.target = debt;
      }
    });
  }

  attached(){
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var ctx = document.getElementById("myChart").getContext("2d");

    var colors = ["#F7464A", "#46BFBD", "#FDB45C"];
    var highlights = ["#FF5A5E", "#5AD3D1", "#FFC870"];

    var data = [];
    var colour = 0;
    for(var i=0;i<this.models.expenses.length;i++){
      colour = getRandomColor();
      data.push({value: this.models.expenses[i].amount, color: colour, highlight: colour, label: this.models.expenses[i].name});
    }
    for(var i=0;i<this.models.bills.length;i++){
      colour = getRandomColor();
      data.push({value: this.models.bills[i].amount, color: colour, highlight: colour, label: this.models.bills[i].name});
    }
    for(var i=0;i<this.models.creditCards.length;i++){
      colour = getRandomColor();
      data.push({value: this.models.creditCards[i].payment, color: colour, highlight: colour, label: this.models.creditCards[i].name});
    }
    for(var i=0;i<this.models.overdrafts.length;i++){
      colour = getRandomColor();
      data.push({value: this.models.overdrafts[i].monthlyFee + this.models.overdrafts[i].amount*(this.models.overdrafts[i].interest/12), color: colour, highlight: colour, label: this.models.overdrafts[i].name});
    }
    // index in forEach?
    //this.models.expenses.forEach(expense => data.push({value: expense.amount, color: colors[i], highlight: highlights[i], label: expense.name}))

    //var myNewChart = new Chart(ctx).Line(data);
    //var myDoughnutChart = new Chart(ctx).Doughnut(data);

    var moduleDoughnut = new Chart(ctx).Doughnut(data, { tooltipTemplate : "<%if (label){%><%=label%>: <%}%><%= value %>kb", animation: false });

    // var canvas = document.getElementById('myChart');
    //
    // var helpers = Chart.helpers;
    // var legendHolder = document.createElement('div');
    // legendHolder.innerHTML = moduleDoughnut.generateLegend();
    // // Include a html legend template after the module doughnut itself
    // helpers.each(legendHolder.firstChild.childNodes, function(legendNode, index){
    //   helpers.addEvent(legendNode, 'mouseover', function(){
    //     var activeSegment = moduleDoughnut.segments[index];
    //     activeSegment.save();
    //     activeSegment.fillColor = activeSegment.highlightColor;
    //     moduleDoughnut.showTooltip([activeSegment]);
    //     activeSegment.restore();
    //   });
    // });
    // helpers.addEvent(legendHolder.firstChild, 'mouseout', function(){
    //   moduleDoughnut.draw();
    // });
    // canvas.parentNode.parentNode.appendChild(legendHolder.firstChild);
  }
}
