import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './app-value.component.html',
  styleUrls: ['./app-value.component.css']
})
export class AppValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    });
  }

}
