import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ToDoServiceService {

  constructor(private myHttp: Http) { }

  //Get All Task
  getEntries(){
    return this.myHttp.get('http://localhost:3000/api/tasks')
    .map((responseThingy)=> responseThingy.json())
  }

  //Create Tasks
  addNewEntry(theWholeEntryObject){
	theWholeEntryObject.doneyet = false;
    return this.myHttp.post('http://localhost:3000/api/tasks/create',theWholeEntryObject)
    .map((res)=>res.json());
  }

  //Task details by Id
  getOneEntry(theIdOfTheEntry){
    return this.myHttp.get('http://localhost:3000/api/tasks/' + theIdOfTheEntry)
    .map((responseThingy)=> responseThingy.json())

  }
  
  //Edit Task by Id
   editEntry(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/tasks/' + entryId + '/submitEdit',theWholeEntryObject)
    .map((res)=>res.json());
  }
  
  //DeleteTask
   deleteEntry(entryId){
    return this.myHttp.post('http://localhost:3000/api/tasks/' + entryId + '/delete')
    .map((res)=>res.json());
  }


}
