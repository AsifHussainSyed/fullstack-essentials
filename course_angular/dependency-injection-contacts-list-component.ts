import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;
  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    // get contacts from service and assign it to contacts
    this.contactService.getContacts().subscribe(data => this.contacts = data.contactsList);
  }

}
