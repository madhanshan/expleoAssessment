import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  products = [] as  any;
  allProducts = []
  pageNumber = 1;
  totalRecordstoShow = 10;
  showmorehide = true;
  showmorehideLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.triggerService(this.pageNumber, this.totalRecordstoShow);
  }

  showmore(e:any){
    e.preventDefault();
    this.pageNumber = this.pageNumber+1;
    this.showmorehideLoading = true;
    this.showmorehide = false;
    this.triggerService(this.pageNumber, this.totalRecordstoShow)

  }
  triggerService(pageNumber:any, records2Show:any) {
    this.dataService.sendGetRequest(pageNumber,records2Show).subscribe((responseBody:any) => {
      console.log(responseBody);
      this.showmorehideLoading = false;
    this.showmorehide = true;
      if(responseBody){

        for (var record of responseBody) {
          let recordItem = record
          this.products.push(record)
        }
      }
    });
  }
  
}
