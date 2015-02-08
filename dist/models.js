System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Models;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Models = _export("Models", (function () {
        function Models() {
          _classCallCheck(this, Models);

          this.incomes = [{ name: "Work", amount: 1000 }];
          this.bills = [{ name: "Hydro", amount: 60 }];
          this.expenses = [{ name: "Food", amount: 200 }];
          this.creditCards = [{ name: "CC", amount: 1000, interest: 0.2, annualFee: 100, payment: 10, min_payment_percent: 0.1, min_payment: 10 }];
          this.overdrafts = [{ name: "Overdraft", amount: 500, interest: 0.2, monthlyFee: 5 }];
        }

        _prototypeProperties(Models, null, {
          addIncome: {
            value: function addIncome(name, amount) {
              this.incomes.push({ name: name, amount: amount });
            },
            writable: true,
            configurable: true
          },
          addBill: {
            value: function addBill(name, amount) {
              this.bills.push({ name: name, amount: amount });
            },
            writable: true,
            configurable: true
          },
          addExpense: {
            value: function addExpense(name, amount) {
              this.expenses.push({ name: name, amount: amount });
            },
            writable: true,
            configurable: true
          },
          addCreditCard: {
            value: function addCreditCard(name, amount, interest, annualFee, payment, min_payment_percent, min_payment) {
              this.creditCards.push({ name: name, amount: amount, interest: interest, annualFee: annualFee,
                payment: payment, min_payment_percent: min_payment_percent, min_payment: min_payment });
            },
            writable: true,
            configurable: true
          },
          addOverdraft: {
            value: function addOverdraft(name, amount, interest, monthlyFee) {
              this.overdraft.push({ name: name, amount: amount, interest: interst, monthlyFee: monthlyFee });
            },
            writable: true,
            configurable: true
          }
        });

        return Models;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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