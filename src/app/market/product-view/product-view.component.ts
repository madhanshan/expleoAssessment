import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../../data.service'; 

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productId:any = '';
  productViewDetails:any = {};
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    this.productId = productIdFromRoute;
    this.dataService.getProductView(this.productId).subscribe((responseBody:any) => {
      console.log(responseBody);
      if(responseBody){
        this.productViewDetails = responseBody
      }
    });
  }
  goBackPage(e:any){
    this.router.navigate(['/market'])
  }

}
