import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  constructor(public route : Router){}

  userData = signal({name:'mohit',age:'35'})

  goToProfile(){
    this.route.navigate(['profile'],{
      queryParams:{
        id:10,
        name:'peter',
        age:40
      }
    })
  }
}
