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
            this.totalIncome += parseInt(this.models.incomes[i].amount);
          }
          this.totalExpenses = 0;
          for (var i = 0; i < this.models.expenses.length; i++) {
            this.totalExpenses += parseInt(this.models.expenses[i].amount);
          }
          this.totalDebt = 0;
          this.totalDebtExpenses = 0;
          for (var i = 0; i < this.models.debts.length; i++) {
            this.totalDebt += parseInt(this.models.debts[i].amount);
            this.totalDebtExpenses = this.models.debts[i].amount * (this.models.debts[i].interest / 12);
          }

          this.extra = this.totalIncome - this.totalExpenses - this.totalDebtExpenses;
          this.debtLeft = this.totalDebt - this.extra;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELE1BQU07OztBQUZYLFlBQU0sV0FBTixNQUFNOzs7Ozs7O0FBRUQsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxNQUFNO2dDQUZQLE1BQU07O0FBR2YsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLGNBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLGVBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFDM0MsZ0JBQUksQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQzdEO0FBQ0QsY0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDdkIsZUFBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztBQUM1QyxnQkFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDaEU7QUFDRCxjQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNuQixjQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLGVBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7QUFDekMsZ0JBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELGdCQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDO1dBQzNGOztBQUVELGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUM1RSxjQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM3Qzs7NkJBdEJVLE1BQU07QUFDVixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRHpCLE1BQU0iLCJmaWxlIjoicmVwb3J0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=