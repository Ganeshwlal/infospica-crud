import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactId: any;
  contact: MyContact = {}
  groupId: string = ''
  groupName: string = ''
  groups: MyGroup[] = []

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router:Router) {

  }

  ngOnInit(): void {

    //to fetch contact id from url
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data['id']);
      this.contactId = data['id']
      console.log(this.contactId);

    })

    //to fetch data of that particular id
    if (this.contactId) {
      this.api.viewContact(this.contactId).subscribe(
        (result: any) => {
          console.log(result);
          this.contact = result
          this.groupId = result.groupId;
          console.log(this.groupId);

          //to fetch details of a particular group
          this.api.getGroupName(this.groupId).subscribe((data: any) => {
            console.log(data);
            this.groupName = data['name']

          })

          //to fetch all groups
          this.api.getAllGroups().subscribe((result: any) => {
            console.log(result);

            this.groups = result

          })

        })
    }
  }

  editContact(contact:MyContact){
    this.api.updateContact(this.contactId,contact).subscribe((result:any)=>{
      console.log(result);
      alert('contact updated successfully')
      this.router.navigateByUrl('')
      
    })
  }


}
