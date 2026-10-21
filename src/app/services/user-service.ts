import { Service } from '@angular/core';

@Service()
export class UserService {
    userList(){
        return [
            {
                id:1,name:'Virat',email:"virat12@gmail.com",city:'Banglore'
            },
            {
                id:2,name:'Rohit',email:"rohit12@gmail.com",city:'Mumbai'
            },
            {
                id:3,name:'Rishabh',email:"rishabh12@gmail.com",city:'Lukhnav'
            },
            {
                id:4,name:'Axar',email:"axar12@gmail.com",city:'Delhi'
            },
            {
                id:5,name:'Sanju',email:"sanju12@gmail.com",city:'Chennai'
            },
        ]
    }
}
