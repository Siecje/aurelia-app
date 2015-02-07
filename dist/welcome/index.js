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

          this.welcome = Models;
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
              this.welcome.addIncome(this.income_name, this.income_amount);
              this.income_name = "";
              this.income_amount = "";
            },
            writable: true,
            configurable: true
          },
          addExpense: {
            value: function addExpense() {
              this.welcome.addExpense(this.expense_name, this.expense_amount);
              this.expense_name = "";
              this.expense_amount = "";
            },
            writable: true,
            configurable: true
          },
          addDebt: {
            value: function addDebt() {
              this.welcome.addDebt(this.debt_name, this.debt_amount);
              this.debt_name = "";
              this.debt_amount = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsTUFBTSx5Q0FFRCxPQUFPOzs7QUFGWixZQUFNLFdBQU4sTUFBTTs7Ozs7OztBQUVELGFBQU87QUFFUCxpQkFGQSxPQUFPLENBRU4sTUFBTTtnQ0FGUCxPQUFPOztBQUdoQixjQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUN2Qjs7NkJBSlUsT0FBTztBQUNYLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7OztBQUtwQyxtQkFBUzttQkFBQSxxQkFBRTtBQUNULGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM3RCxrQkFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsa0JBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3pCOzs7O0FBQ0Qsb0JBQVU7bUJBQUEsc0JBQUU7QUFDVixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDaEUsa0JBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGtCQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQzthQUMxQjs7OztBQUNELGlCQUFPO21CQUFBLG1CQUFFO0FBQ1Asa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELGtCQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixrQkFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDdkI7Ozs7OztlQXBCVSxPQUFPIiwiZmlsZSI6IndlbGNvbWUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==