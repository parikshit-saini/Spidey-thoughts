import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  importdata:any =[];
  importImage:any =[];
  constructor(private action: UsersService){
  this.action.getData().subscribe(data=>{
    this.importdata = data;
  });
  
  this.action.getimage().subscribe(data=>{
    this.importImage = data;
  });
  }
}
