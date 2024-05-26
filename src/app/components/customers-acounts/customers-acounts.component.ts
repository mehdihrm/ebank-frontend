import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customers-acounts',
  templateUrl: './customers-acounts.component.html',
  styleUrl: './customers-acounts.component.css'
})
export class CustomersAcountsComponent implements OnInit {
  customerId! : string ;
  customer! : Customer;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];

  }

}
