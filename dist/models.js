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

          this.incomes = [];
          this.expenses = [];
          this.debts = [];
        }

        _prototypeProperties(Models, null, {
          addIncome: {
            value: function addIncome() {
              this.incomes.push({ name: this.income_name, amount: this.income_amount });
              this.income_name = "";
              this.income_amount = "";
            },
            writable: true,
            configurable: true
          },
          addExpense: {
            value: function addExpense() {
              this.expenses.push({ name: this.expense_name, amount: this.expense_amount });
              this.expense_name = "";
              this.expense_amount = "";
            },
            writable: true,
            configurable: true
          },
          addDebt: {
            value: function addDebt() {
              this.debts.push({ name: this.debt_name, amount: this.debt_amount });
              this.debt_name = "";
              this.debt_amount = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsTUFBTTs7Ozs7Ozs7QUFBTixZQUFNO0FBRU4saUJBRkEsTUFBTTtnQ0FBTixNQUFNOztBQUdmLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCOzs2QkFOVSxNQUFNO0FBUWpCLG1CQUFTO21CQUFBLHFCQUFFO0FBQ1Qsa0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0FBQ3hFLGtCQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixrQkFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7YUFDekI7Ozs7QUFDRCxvQkFBVTttQkFBQSxzQkFBRTtBQUNWLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQztBQUMzRSxrQkFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDdkIsa0JBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO2FBQzFCOzs7O0FBQ0QsaUJBQU87bUJBQUEsbUJBQUU7QUFDUCxrQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFDbEUsa0JBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGtCQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUN2Qjs7Ozs7O2VBdEJVLE1BQU0iLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=