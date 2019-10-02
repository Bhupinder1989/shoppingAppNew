import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { product } from "../products";
import { CartService } from "../cart.service";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addTocart(product) {
    alert("Your item is added to");
    this.cartService.addToCart(product);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = product[+params.get("productId")];
    });
  }
}
