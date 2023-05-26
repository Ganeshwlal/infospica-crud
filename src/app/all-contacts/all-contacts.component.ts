import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContacts';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  allContacts:MyContact[]=[]

  searchKey:string=''

  loginDate:any

  constructor(private api:ApiService){
    this.loginDate=new Date()
  }

  ngOnInit(): void {
    this.getAllcontact()
    
  }

  getAllcontact(){
    this.api.getAllContacts().subscribe((data:any)=>{
      console.log(data);

      this.allContacts=data
      
    })
  }


  //search 
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
  }

//DELETE
  deleteContact(contactId:any){
    this.api.removeContact(contactId).subscribe((result:any)=>{
      console.log(result);
      this.getAllcontact()
      
    })

  }
}
