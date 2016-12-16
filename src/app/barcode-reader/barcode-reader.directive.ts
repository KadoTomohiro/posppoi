import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/debounceTime';


@Directive({
  selector: '[appBarcodeReader]'
})
export class BarcodeReaderDirective {

  private readonly ENTER_CODE = 13;

  @Output() codeRead = new EventEmitter<string>();

  onRead = new EventEmitter<KeyboardEvent>();

  constructor() {
    this.onRead = new EventEmitter<KeyboardEvent>();

    this.onRead.filter((e: KeyboardEvent) => e.charCode !== null || e.keyCode === this.ENTER_CODE)
      .map((e: KeyboardEvent) =>  String.fromCharCode(e.charCode))
      .buffer(this.onRead.debounceTime(100))
      .filter((chars: string[]) => chars[chars.length - 1] === String.fromCharCode(this.ENTER_CODE))
      .map((chars: string[]) =>  chars.slice(0, -1).join(''))
      .subscribe(code => {
        console.log(code);
        this.codeRead.emit(code);
      });
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent($event: KeyboardEvent) {
    this.onRead.emit($event)
  }
}
