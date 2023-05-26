import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string = ''
  groupId:any
  contact:any
  group:any
  groupName:any

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.contactId = data.id

    })

    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      this.contact=data    
      this.groupId = data.groupId
      console.log(this.groupId);


      //GROUPNAME API
      this.api.getGroupName(this.groupId).subscribe((result:any)=>{
        this.groupName=result.name;
        console.log(result);
        
      })
  
      
    })


    //groupname api

    // this.api.getGroupName(this.contact.groupId).subscribe((data:any)=>{
    //   this.group=data
    // })

    
  }

}
