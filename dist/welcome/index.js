System.register(["../models"], function (_export) {
  "use strict";

  var Models, _prototypeProperties, _classCallCheck, Welcome;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome(Models) {
          _classCallCheck(this, Welcome);

          this.models = Models;
        }

        _prototypeProperties(Welcome, {
          inject: {
            value: function inject() {
              return [Models];
            },
            writable: true,
            configurable: true
          }
        }, {
          addIncome: {
            value: function addIncome() {
              this.models.addIncome(this.income_name, this.income_amount);
              this.income_name = "";
              this.income_amount = "";
            },
            writable: true,
            configurable: true
          },
          addBill: {
            value: function addBill() {
              this.models.addBill(this.bill_name, this.bill_amount);
              this.bill_name = "";
              this.bill_amount = "";
            },
            writable: true,
            configurable: true
          },
          addExpense: {
            value: function addExpense() {
              this.models.addExpense(this.expense_name, this.expense_amount);
              this.expense_name = "";
              this.expense_amount = "";
            },
            writable: true,
            configurable: true
          },
          addDebt: {
            value: function addDebt() {
              this.models.addDebt(this.debt_name, this.debt_amount, this.debt_interest, this.debt_fee);
              this.debt_name = "";
              this.debt_amount = "";
              this.debt_interest = "";
              this.debt_interest = "";
            },
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsTUFBTSx5Q0FFRCxPQUFPOzs7QUFGWixZQUFNLFdBQU4sTUFBTTs7Ozs7OztBQUVELGFBQU87QUFFUCxpQkFGQSxPQUFPLENBRU4sTUFBTTtnQ0FGUCxPQUFPOztBQUdoQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7NkJBSlUsT0FBTztBQUNYLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7OztBQUtwQyxtQkFBUzttQkFBQSxxQkFBRTtBQUNULGtCQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1RCxrQkFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsa0JBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3pCOzs7O0FBRUQsaUJBQU87bUJBQUEsbUJBQUU7QUFDUCxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEQsa0JBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGtCQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUN2Qjs7OztBQUVELG9CQUFVO21CQUFBLHNCQUFFO0FBQ1Ysa0JBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQy9ELGtCQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN2QixrQkFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7YUFDMUI7Ozs7QUFDRCxpQkFBTzttQkFBQSxtQkFBRTtBQUNQLGtCQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekYsa0JBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGtCQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0QixrQkFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3pCOzs7Ozs7ZUE3QlUsT0FBTyIsImZpbGUiOiJ3ZWxjb21lL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=