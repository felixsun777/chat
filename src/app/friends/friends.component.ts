import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {

  // Inject HttpClient into your component or service.
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
              ) {}

  public friends = new Array();
  public username = '';

  ngOnInit(): void {
    this.route.params.subscribe( res => {
        this.username = res.username;
      }
    );
    this.getFriends();
  }

  onSelect(friend) {
    this.router.navigate(['chat', this.username, friend]);
  }



  // connect to backend server
  getFriends() {
    const url = 'http://localhost:3000/friends?username=' + this.username + '';
    this.http.get(url).subscribe(data => {
      // Read the result field from the JSON response.
      for (const i in data) {
        if (data[i] != null) {
          this.friends.push(data[i].user_finish);
        }
      }
    });
  }
}
