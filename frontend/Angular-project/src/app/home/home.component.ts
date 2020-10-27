import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public joggingData: Array<any>;
  public currentJogging: any;

  constructor(private webApiService: WebApiService) {
    webApiService.get().subscribe((data: any) => this.joggingData = data);
  }

  ngOnInit() {
  }

}
