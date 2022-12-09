import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
export class Task{
  constructor(
    public empId: string,
    public empName: string,
    public empEmailAddress: string,
    public weekStartsfrom: string,
    public weekEnddate: string,
    public workingWith: string,
    public managerName: string,
    public task:string,
    public task1Time: string,
    public task1Remarks: string
  ){
  }
  }
@Component({
  selector: 'app-add-wsr',
  templateUrl: './add-wsr.component.html',
  styleUrls: ['./add-wsr.component.css']
})
export class AddWsrComponent implements OnInit {
  task:any=Task;

  constructor(private serv:ServiceService,private route:Router) { }

  ngOnInit(): void {
    this.task = new Task(this.task.empId, this.task.empName, this.task.empEmailAddress, this.task.weekStartsfrom, this.task.weekEnddate, this.task.workingWith, this.task.managerName,this.task.task,this.task.task1Time,this.task.task1Remarks);
   
  }
  btnclick(){
    this.task = new Task(this.task.empId, this.task.empName, this.task.empEmailAddress, this.task.weekStartsfrom, this.task.weekEnddate, this.task.workingWith, this.task.managerName,this.task.task,this.task.task1Time,this.task.task1Remarks);
      console.log("outside");

      this.serv.postTask(this.task).subscribe(
        response => {
          console.log(response);
          this.route.navigate(['welcome']);

        })

  }

}
