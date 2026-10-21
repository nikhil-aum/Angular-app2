import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  constructor(public userService:UserService){}

  userData:any = signal("")

  ngOnInit(){
     const data =this.userService.userList();
     this.userData.set(data)
     
  }
}
