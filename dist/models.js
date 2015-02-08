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
          this.debts = [{ name: "CC", amount: 1000, interest: 0.2, fee: 100 / 12 }];
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
          addDebt: {
            value: function addDebt(name, amount, interest, fee) {
              this.debts.push({ name: name, amount: amount, interest: interest, fee: fee });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsTUFBTTs7Ozs7Ozs7QUFBTixZQUFNO0FBRU4saUJBRkEsTUFBTTtnQ0FBTixNQUFNOztBQUdmLGNBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFDOUMsY0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUMzQyxjQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0FBQzlDLGNBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztTQUN4RTs7NkJBUFUsTUFBTTtBQVNqQixtQkFBUzttQkFBQSxtQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0FBQ3JCLGtCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFDakQ7Ozs7QUFDRCxpQkFBTzttQkFBQSxpQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0FBQ25CLGtCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFDL0M7Ozs7QUFDRCxvQkFBVTttQkFBQSxvQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0FBQ3RCLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFDbEQ7Ozs7QUFDRCxpQkFBTzttQkFBQSxpQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUM7QUFDbEMsa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7YUFDN0U7Ozs7OztlQXBCVSxNQUFNIiwiZmlsZSI6Im1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9