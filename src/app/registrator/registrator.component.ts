import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.css']
})
export class RegistratorComponent implements OnInit {

  private code: string = '';
  private items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  onCodeRead(code: string){
    this.code = code;
  };

  onSubmit(form: NgForm): void {
    let newItem = {
      code: form.value.code,
      name: form.value.name,
      price: form.value.price
    };

    this.items
      .flatMap(item => item)
      .filter(item => item.code === newItem.code)
      .subscribe(item => {
      });


    console.log(newItem);
    this.items.push(newItem);
    form.resetForm();
  }

}

