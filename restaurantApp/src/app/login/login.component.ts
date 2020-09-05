import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { username: string; password: string }) {
    // Send Http request
    console.log(postData);
    this.httpClient
      .post(
        'http://42293e574d9d.ngrok.io/api/users/validate_username',postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
