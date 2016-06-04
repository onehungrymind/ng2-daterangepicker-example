import { Component } from '@angular/core';
import { DateRangePickerDirective } from './daterangepicker.directive';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h2 class="text-center">Date Range Picker</h2>
        <div class="form-group">
          <input daterangepicker
                (selected)="dateSelected($event)"
                [options]="pickerOptions" type="submit"
                class="form-control btn btn-success"/>
        </div>
      </div>
    </div>
  `,
  directives: [DateRangePickerDirective],
  styles: [`
    .jumbotron {
      margin-top: 15px;
      box-shadow: 0px 3px 10px 3px rgba(0,0,0,0.2);
    }
    input { cursor: pointer; }
  `]
})

export class AppComponent {
  pickerOptions: Object = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePickerIncrement': 5,
    'autoApply': true,
    'startDate': '05/28/2016',
    'endDate': '06/03/2016'
  };

  dateSelected(message) {
    alert(message);
  }
}
