import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  public result;
  // Inject HttpClient into your component or service.
  constructor(
    private http: HttpClient,
    private route: Router
              ) {}

  public title = 'Online Chatting Demo';

  public username = '';
  public password = '';


  // response to submit button clicking
  submitClick(username, password) {
    this.username = username.value;
    this.password = password.value;
    if (this.username === '' || this.password === '') {
      alert('Please enter username and password');
    }else {
      const url = 'http://localhost:3000/users?username=' + this.username + '&password=' + this.password;
      this.get(url);
    }
  }

  // response to clear button clicking
  resetClick(username, password) {
    username.value = '';
    password.value = '';
  }

  // response to enter key pressing
  onKeypress(event, username, password) {
    if (event.keyCode === 13) {
      this.submitClick(username, password);
    }
  }

  // connect to backend server
  get(url) {
    this.http.get(url).subscribe(data => {
      // Read the result field from the JSON response.
      this.result = data['result'];
      if (this.result === 'ok') {
        // console.log(this.username);
        this.route.navigate(['friends', this.username]);
      }else {
        alert(this.result);
      }
    });
  }
}
