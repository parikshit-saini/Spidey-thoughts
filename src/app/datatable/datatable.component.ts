import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  importdata:any;
  importImage:any;
  spiderAdvice:any;
  constructor(private action: UsersService){
  this.action.getData().subscribe(data=>{
    this.importdata = data;
    console.log(data);
  });
  
  this.action.getimage().subscribe(data=>{
    this.importImage = data;
    console.log(data);
  });

  this.action.getAdvice().subscribe(data=>{
    this.spiderAdvice = data;
    console.log(data);
  })
  
}
reloadCurrentPage() {
  window.location.reload();
 }  
  ngOnInit() {
  }

}
