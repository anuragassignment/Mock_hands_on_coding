import { Response } from '@angular/http';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  usersDt: any;

  constructor(private data: DataService) { }

  // method which calls the http service and fetches the data to populate the table
  getDt() {
    this.data.getData()
      .subscribe(
      (response: Response) => { this.usersDt = response.json(); }
      );
  }

  ngOnInit() {
    this.getDt();
  }

}
