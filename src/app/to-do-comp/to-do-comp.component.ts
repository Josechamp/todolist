import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ToDoServiceService} from '../service/to-do-service.service';

@Component({
  selector: 'app-to-do-comp',
  templateUrl: './to-do-comp.component.html',
  styleUrls: ['./to-do-comp.component.css']
})
export class ToDoCompComponent implements OnInit {


  entries : Array<any> = [];
  newEntry:any = {};
  showDiv: boolean = false;
	
  constructor(private toDoService:ToDoServiceService) { }

  ngOnInit() {
	  this.getEntries();
  }

	getEntries(){
    this.toDoService.getEntries()
    .subscribe((res)=>{
      this.entries = res.reverse();
    })
  }
  
  
    addNewEntry(){
    this.toDoService.addNewEntry(this.newEntry)
    .subscribe((responsethingy)=>{
      this.newEntry = {};
      this.getEntries();
      //console.log('yeah! you did it!')
    })
	}
	
	deleteEntry(entryId){
    this.toDoService.deleteEntry(entryId)
    .subscribe((responsethingy)=>{
      this.getEntries();
      //console.log('yeah! you did it!')
    })
    }
 
	  editEntry(entryId){
		this.deleteEntry(entryId);
		this.addNewEntry();
	  }



  ngOnInit() {
    this.getEntries();
  }
 
}
