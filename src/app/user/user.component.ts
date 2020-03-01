import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 890,
    name: 'Java Techie',
    email: 'javatechie$u@gmail.com',
    mobile: 8867090808
  };

  constructor() { }

  ngOnInit(): void {
  }

}
