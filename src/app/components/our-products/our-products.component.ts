import {Component, OnInit, signal} from '@angular/core';
import {OurProductsInterface} from "../../interfaces/our-products.interface";
import { CarouselModule } from 'primeng/carousel';
import {Button} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [
    CarouselModule,
    Button,
    NgOptimizedImage
  ],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent implements OnInit{
  protected productInfo = signal<OurProductsInterface[]>([]);

  ngOnInit() {
    const products = [
      {description: "Benzene Monitor is a standalone monitor to measure atmospheric benzene that comes from industrial sources", image: "/images/p1.png", title: "Benzene Monitor"},
      {description: "Centre Wavelength at 255nm, Output power>50mW, Collimated", image: "/images/p2.png", title: "UV light source UVS-OPID-255"},
      {description: "Direct measurement of Scattering coefficient of aerosol LED – based cost effective instrument", image: "/images/p3.png", title: "Visible Integrating Nephelometer"}
    ]

    this.productInfo.set(products);
  }
}
