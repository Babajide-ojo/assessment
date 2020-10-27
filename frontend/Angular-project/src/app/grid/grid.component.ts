import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  grid: string[];

  ngOnInit() {
    this.httpService.get('https://localhost:52202/api/grid').subscribe(data => {
      this.grid = data as string[];
    })
  }

}
