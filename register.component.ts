import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeOutAnimation } from '../../../core/common/route.animation';
import { UserService } from '../../../shared/user.service';
import { TextMaskModule } from 'angular2-text-mask';
import { Observable } from 'rxjs';
import { State } from '../../../models/state.model';
import { User } from '../../../models/user.model';
import { result } from 'lodash-es';
import { ReturnModel } from '../../../models/return.model';


@Component({
  selector: 'mes-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeOutAnimation]': 'true'
  },
  
  animations: [fadeOutAnimation],
  providers : [UserService,FormBuilder]
})
export class RegisterComponent implements OnInit {
    
  states : State[];
  resultantModel : ReturnModel
  infoMsg : string;
  mask: any[] = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  form: FormGroup;
  errorMessage: string;  
  //IPAddress : string;
  visible = false;
  //public states: State[];
  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private userService : UserService,
              
              
  ) { 
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: ['', Validators.nullValidator],
      title: ['', Validators.required],
      companyName: ['', Validators.required],
      address: ['', Validators.nullValidator],
      city: ['', Validators.nullValidator],
      state: ['', Validators.required],
      zipcode: ['', Validators.nullValidator],
      phone: ['', Validators.required],
      phoneExt: ['', Validators.nullValidator],
      fax: ['', Validators.nullValidator],
      email: ['', Validators.email],
      userid: ['', Validators.required],
    });
      this.states=this.getstates().bind(this);
      
    
  }
        
  // getIPAddress()
  // {
  //   return this.userService.getIpAddress().subscribe(result => this.IPAddress = result[""] );
  //   console.log(result);
  // }
  getstates() : any
  {
    //return this.states;
    this.userService.getStates().subscribe(result=>{
      this.states = result["ResultantModel"]; 
      console.log(this.states[4].state); 
      console.log(result);
      console.log(this.states);         
    }
 
  );
  }
  send(form:FormGroup) {    
     this.userService.registerUser(form.value).subscribe((result) => {
      
      this.infoMsg = result["InfoMsg"]
     // cosno
      // this.resultantModel.ErrorMsg = result["ErrorMsg"],
      // this.resultantModel.ResultModel = result["ResultantModel"];                 
    });
   
  }  
}
