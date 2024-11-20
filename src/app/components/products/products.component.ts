import { Component } from '@angular/core';
import {SidebarHeaderComponent} from "../sidebar-header/sidebar-header.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SidebarHeaderComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
