import { Component } from '@angular/core';
import { Task } from '../add-wsr/add-wsr.component';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-view-wsr',
  templateUrl: './view-wsr.component.html',
  styleUrls: ['./view-wsr.component.css']
})
export class ViewWsrComponent {
  constructor(private serv:ServiceService) {}
  tasks:any=Task

  ngOnInit(){
    this.refreshAppointments();
  
   
    
  }
  refreshAppointments(){
    this.serv.getAllTasks().subscribe(
      data=>{
        console.log(data);
        this.tasks=data
      
        
  })
  }
  

}

