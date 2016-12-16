import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  code = '';

  onCodeRead(code) {
    console.log('codeRead', code);
    this.code = code;
  }
}
