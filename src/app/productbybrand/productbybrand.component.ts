import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-productbybrand',
  templateUrl: './productbybrand.component.html',
  styleUrls: ['./productbybrand.component.css']
})
export class ProductbybrandComponent implements OnInit {

  products: any;
  constructor(private route:ActivatedRoute,private router: Router, private service: UserService) { }

  ngOnInit(): void {
    let brand = this.route.snapshot.paramMap.get('brand');
    console.log(brand);

    this.service.getAllProductsByBrand(brand).subscribe((result: any) => { console.log(result); this.products = result; });
    console.log(this.products);
  }

  onSelect(product) {
    this.router.navigate(['/productdetails', product.productId]);
    console.log(product.productId);
  }
  addToWish(product : any){
    this.service.addToWish(product);
    //this.router.navigate(['/wishlist', productPage.productId]);
  //  this.service.addToCart(productPage,quantity);
    localStorage.setItem('product',JSON.stringify(product));
    console.log(product.productId);
  }


}