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
          _classCallCheck(this, Flickr);

          this.models = Models;

          this.totalIncome = 0;
          for (var i = 0; i < this.models.incomes.length; i++) {
            this.totalIncome += Welcome.incomes[i].amount;
          }
          this.totalExpenses = 0;
          for (var i = 0; i < this.models.expenses.length; i++) {
            this.totalIncome += Welcome.expenses[i].amount;
          }
          this.totalDebt = 0;
          this.totalDebtExpenses = 0;
          for (var i = 0; i < this.models.debts.length; i++) {
            this.totalDebt += Welcome.debts[i].amount;
            this.totalDebtExpenses = Welcome.debts[i].amount * (Welcome.debts[i].interest / 12);
          }
        }

        _prototypeProperties(Flickr, {
          inject: {
            value: function inject() {
              return [Models];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELE1BQU07OztBQUZYLFlBQU0sV0FBTixNQUFNOzs7Ozs7O0FBRUQsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxNQUFNO2dDQUZQLE1BQU07O0FBR2YsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLGNBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLGVBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFDM0MsZ0JBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7V0FDL0M7QUFDRCxjQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN2QixlQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQzVDLGdCQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1dBQ2hEO0FBQ0QsY0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbkIsY0FBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUMzQixlQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDO0FBQ3pDLGdCQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzFDLGdCQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQztXQUNuRjtTQUNGOzs2QkFuQlUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEekIsTUFBTSIsImZpbGUiOiJyZXBvcnQvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==