import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task} from '../add-wsr/add-wsr.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  postTask(Task:any){
    return this.http.post(`http://127.0.0.1:8000/task`,Task);
  }
  getAllTasks(){
    return this.http.get<Task>(`http://127.0.0.1:8000/allTasks`);
  }
}
