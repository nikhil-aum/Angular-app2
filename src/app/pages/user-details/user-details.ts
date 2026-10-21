import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {

  userData : any = signal("")
  constructor (public userService:UserService,public route : ActivatedRoute){}

  ngOnInit(){
    const data =this.userService.userList();
    this.route.params.subscribe((params)=>{
     const filteredData = data.filter((item)=>item.id == params['id'])
     console.log(filteredData);
      this.userData.set(filteredData[0])
      
    })
    

  }
}
