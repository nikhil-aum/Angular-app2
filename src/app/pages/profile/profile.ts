import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {

  name = signal('');
  id = signal(0)
  age = signal(0)


  constructor(public route : ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.name.set(params['name'])
      this.age.set(params['age'])
      this.id.set(params['id'])
      
    })
  }
}
