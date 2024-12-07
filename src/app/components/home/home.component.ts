import { Component } from '@angular/core';
import {BannerComponent} from "../banner/banner.component";
import {FeaturesComponent} from "../features/features.component";
import {LocateUsComponent} from "../locate-us/locate-us.component";
import {AboutUsComponent} from "../about-us/about-us.component";
import {OurServicesComponent} from "../our-services/our-services.component";
import {OurProductsComponent} from "../our-products/our-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    FeaturesComponent,
    LocateUsComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
