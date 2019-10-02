import { Component, OnInit } from "@angular/core";

import { product } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  title = "Product List";

  product = product;
  constructor() {}

  ngOnInit() {}

  onShare() {
    alert("The product has been shared");
  }
  onNotify() {
    alert("You will be notified when the product is sale");
  }
}
