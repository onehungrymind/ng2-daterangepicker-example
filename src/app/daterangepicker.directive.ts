import {Directive, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[daterangepicker]'
})

export class DateRangePickerDirective implements OnInit {
  @Input() options: Object = {};
  @Output() selected: any = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    $(this.elementRef.nativeElement)
      .daterangepicker(this.options, this.dateCallback.bind(this));
  }

  dateCallback(start, end, label) {
    let message = `
      New date range selected:
      ${start.format('YYYY-MM-DD')} to ${end.format('YYYY-MM-DD')}
      (predefined range: ${label})
    `;
    this.selected.emit(message);
  }
}
