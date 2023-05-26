import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  //api call for get allconacts

  getAllContacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)
  }

  //fuction for view a particular contact id

  viewContact(contactId:string){
   return this.http.get(`${this.baseUrl}/${contactId}`)

  }

  //function for fetting a particular groupname

  getGroupName(groupId:string){

    return this.http.get('http://localhost:3000/groups/'+groupId)

  }

  //function for ftch all group from http://localhost:3000/groups

  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  //function for add new contact for server

  addContact(contactBody:any){
    return this.http.post(this.baseUrl,contactBody)
  }


  //api call to delete contact from server

  removeContact(id:any){
    return this.http.delete('http://localhost:3000/contacts/'+id)
  }

  //api call to update an existing contact from server
  updateContact(id:any,contact:any){
    return this.http.put('http://localhost:3000/contacts/'+id,contact)

  }

}
