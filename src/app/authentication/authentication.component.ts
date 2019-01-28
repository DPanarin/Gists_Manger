import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GitHubService} from '../git-hub.service';

// @ts-ignore
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private gitApiService: GitHubService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    // this.gitApiService.getAuthPage().subscribe(authForm => {
    //   console.log(authForm);
    // });
  }

  onSubmit() {
    console.log(this.form);
  }

}
