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
            value: function addIncome(name, amount) {
              this.incomes.push({ name: name, amount: amount });
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
          addDebt: {
            value: function addDebt(name, amount) {
              this.debts.push({ name: name, amount: amount });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsTUFBTTs7Ozs7Ozs7QUFBTixZQUFNO0FBRU4saUJBRkEsTUFBTTtnQ0FBTixNQUFNOztBQUdmLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCOzs2QkFOVSxNQUFNO0FBUWpCLG1CQUFTO21CQUFBLG1CQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7QUFDckIsa0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUNqRDs7OztBQUNELG9CQUFVO21CQUFBLG9CQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7QUFDdEIsa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUNsRDs7OztBQUNELGlCQUFPO21CQUFBLGlCQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7QUFDbkIsa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUMvQzs7Ozs7O2VBaEJVLE1BQU0iLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=