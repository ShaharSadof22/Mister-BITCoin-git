import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  name;

  constructor(private userService: userService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.name = this.formBuilder.group({
      name: ''
    });
  }
  
  onSubmit(name) {

    this.name.reset(name);

    if (!this.name.value.name) {
      return
    }
    this.userService.signup(this.name.value)
    this.router.navigate([''])
  }

}
