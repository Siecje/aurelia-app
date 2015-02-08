System.register(["../models"], function (_export) {
  "use strict";

  var Models, _prototypeProperties, _classCallCheck, Flickr;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Flickr = _export("Flickr", (function () {
        function Flickr(Models) {
          var _this = this;
          _classCallCheck(this, Flickr);

          this.models = Models;

          this.totalIncome = 0;
          this.models.incomes.forEach(function (income) {
            return _this.totalIncome += income.amount;
          });

          this.totalExpenses = 0;
          this.models.expenses.forEach(function (expense) {
            return _this.totalExpenses += expense.amount;
          });

          this.totalBills = 0;
          this.models.bills.forEach(function (bill) {
            return _this.totalBills += bill.amount;
          });

          this.totalDebt = 0;
          this.newDebt = 0;
          this.debtPayments = 0;
          this.debtLeft = 0;
          for (var i = 0; i < this.models.creditCards.length; i++) {
            this.totalDebt += this.models.creditCards[i].amount;
            this.newDebt += this.models.creditCards[i].amount * (this.models.creditCards[i].interest / 12);
            this.debtPayments += this.models.creditCards[i].payment;
            this.debtLeft += this.models.creditCards[i].amount + this.models.creditCards[i].amount * (this.models.creditCards[i].interest / 12) - this.models.creditCards[i].payment;
          }

          var payment = 0;
          for (var i = 0; i < this.models.overdrafts.length; i++) {
            payment = this.models.overdrafts[i].monthlyFee + this.models.overdrafts[i].amount * (this.models.overdrafts[i].interest / 12);
            this.totalDebt += this.models.overdrafts[i].amount;
            this.newDebt += payment;
            this.debtPayments += payment;
            this.debtLeft += payment;
          }

          this.newDebt = this.newDebt.toFixed(2);
          this.debtLeft = this.debtLeft.toFixed(2);

          this.extraMoney = this.totalIncome - this.totalExpenses - this.totalBills - this.debtPayments;
          this.extraMoney = this.extraMoney.toFixed(2);
          if (this.extraMoney <= 0) {
            this.extraMoney = 0;
          }

          var highestInterest = 0;
          this.target = {};
          this.models.creditCards.forEach(function (debt) {
            if (debt.interest > highestInterest) {
              highestInterest = debt.interest;
              _this.target = debt;
            }
          });
          this.models.overdrafts.forEach(function (debt) {
            if (debt.interest > highestInterest) {
              highestInterest = debt.interest;
              _this.target = debt;
            }
          });
        }

        _prototypeProperties(Flickr, {
          inject: {
            value: function inject() {
              return [Models];
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              var ctx = document.getElementById("myChart").getContext("2d");

              var colors = ["#F7464A", "#46BFBD", "#FDB45C"];
              var highlights = ["#FF5A5E", "#5AD3D1", "#FFC870"];

              var data = [];
              for (var i = 0; i < this.models.expenses.length; i++) {
                data.push({ value: this.models.expenses[i].amount, color: colors[i], highlight: highlights[i], label: this.models.expenses[i].name });
              }
              for (var i = 0; i < this.models.bills.length; i++) {
                data.push({ value: this.models.bills[i].amount, color: colors[i], highlight: highlights[i], label: this.models.bills[i].name });
              }
              for (var i = 0; i < this.models.creditCards.length; i++) {
                data.push({ value: this.models.creditCards[i].payment, color: colors[i], highlight: highlights[i], label: this.models.creditCards[i].name });
              }
              for (var i = 0; i < this.models.overdrafts.length; i++) {
                data.push({ value: this.models.overdrafts[i].monthlyFee + this.models.overdrafts[i].amount * (this.models.overdrafts[i].interest / 12), color: colors[i], highlight: highlights[i], label: this.models.overdrafts[i].name });
              }
              var myDoughnutChart = new Chart(ctx).Doughnut(data);
            },
            writable: true,
            configurable: true
          }
        });

        return Flickr;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQ3pDLG9CQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7ZUFDL0g7QUFDRCxtQkFBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUMvQyxvQkFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO2VBQzVJO0FBQ0QsbUJBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFDOUMsb0JBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFBLEFBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7ZUFDeE47QUFNRCxrQkFBSSxlQUFlLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEOzs7Ozs7ZUF4RlUsTUFBTSIsImZpbGUiOiJyZXBvcnQvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==