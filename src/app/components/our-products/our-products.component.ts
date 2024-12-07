import {Component, HostListener, OnInit, signal} from '@angular/core';
import {OurProductsInterface} from "../../interfaces/our-products.interface";
import { CarouselModule } from 'primeng/carousel';
import {Button} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [
    CarouselModule,
    Button,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent implements OnInit{
  protected productInfo = signal<OurProductsInterface[]>([]);
  activeIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    const products = [
      {description: "Benzene Monitor is a standalone monitor to measure atmospheric benzene that comes from industrial sources", image: "/images/p1.png", title: "Benzene Monitor",id:1},
      {description: "Centre Wavelength at 255nm, Output power>50mW, Collimated", image: "/images/p2.png", title: "UV light source UVS-OPID-255",id:2},
      {description: "Direct measurement of Scattering coefficient of aerosol LED – based cost effective instrument", image: "/images/p3.png", title: "Visible Integrating Nephelometer",id:3},
      {description: "This is a optical resonator for measuring multi specious  trace gas NO2 NO3 and O3 it contains", image: "/images/p4.png", title: "Visible Optical Resonator",id:4}
    ]

    this.productInfo.set(products);
  }

  onCarouselPageChange(event: any): void {
    this.activeIndex = event.page;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined' && document) {
      const section = document.getElementById('bg-img');
      const viewDiv = document.querySelector('.p-carousel-indicators');
      if (viewDiv && section) {
        const rect = section.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (rect.top <= viewHeight && rect.bottom >= 0) {
          setTimeout(() => {
            section.classList.add('in-view');
          }, 200);
        } else {
          section.classList.remove('in-view');
        }
      }
    }
  }

  openProducts(productId: number) {
    const url = `/products/${productId}`;
    this.router.navigate([url]);
  }


}
