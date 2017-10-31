import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  result: string;
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  public title = 'Online Chat Demo: ';
  public textList = new Array();
  public username = 'sun';
  public input = null;
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/webupload',
    method: 'POST'
  });

  // response to enter button clicking
  onClick(input) {
    this.input = input;
    if (input.value !== '') {
      const obj = {
        'username': '',
        'message' : ''
      }
      obj.username = this.username;
      obj.message = input.value;
      const body = JSON.stringify(obj);
      this.post(body);
    }
  }

  // response to enter key pressing
  onKeypress(event, input) {
    if (event.keyCode === 13) {
      this.onClick(input);
    }
  }

  // response to upload files
  upload() {
    this.uploader.queue[0].upload(); // 开始上传
    alert('Uploading successfully done');
  }

  // display messages or pop out warning
  display(boolean) {
    if (boolean) {
         this.textList.push(this.username + ':  ' + this.input.value);
         this.input.value = '';
       }else {
         alert('Message not sent to server');
       }
  }

  // connect to backend server
  get() {
    this.http.get('http://localhost:3000/messages').subscribe(data => {
      // Read the result field from the JSON response.
      this.result = data['result'];
    });
    if (this.result === 'ok') {
      return true;
    }else {
      return false;
    }
  }

  post(body) {
    this.http.post('http://localhost:3000/messages', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    }).subscribe(data => {
      // Read the result field from the JSON response.
      this.result = data['result'];
      if (this.result === 'ok') {
        this.display(true);
      }else {
        this.display(false);
      }
    });
  }
}
