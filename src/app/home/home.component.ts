import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experiences: {} ;

  constructor(private  http:  HttpClient) {}

  getExperiences() {
    return this.http.get(`${environment.API_endpoint}/api/experiences/`).subscribe((res) => {
      this.experiences = res;
      });
  }

  getMonthAndYear(dateString) {
    if (dateString === null) {
      return 'presente';
    } else {
      const date = new Date(dateString);
      const month = date.toLocaleString('es-es', {month: 'long'});
      const year = date.getFullYear();
      return month + '-' + year;
    }
  }

  ngOnInit() {
    this.getExperiences();
  }

}
