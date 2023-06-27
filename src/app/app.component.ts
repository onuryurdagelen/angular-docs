import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-directives';
  result:boolean = true;
  
  profileInfos:any = {
    firstName: "",
    lastName: ""
  }

  ngOnInit(): void {
    
  }
  form = new FormGroup({
    first: new FormControl(this.profileInfos.firstName, 
     [
      Validators.required,
      Validators.minLength(2)
     ]),
    last: new FormControl(this.profileInfos.lastName,[
      Validators.required,
      Validators.minLength(2)
    ]),
  });

  get first(): any {
    return this.form.get('first');
  }
  get last(): any {
    return this.form.get('last');
  }
  onSubmit(): void {
    console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
  }

 
}
