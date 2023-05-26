import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  allGroups: any[] = []
  contactName: string = ''

  contact: MyContact = {}


  constructor(private api: ApiService, private router: Router) {
    this.contact.groupId = "select a group"
  }

  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data: any) => {
      console.log(data);
      this.allGroups = data


    })

  }

  
  addContact() {
    this.api.addContact(this.contact).subscribe((result: any) => {
      console.log(result);
      alert('contact added succesfully')

      this.router.navigateByUrl('')


    })
  }

}
