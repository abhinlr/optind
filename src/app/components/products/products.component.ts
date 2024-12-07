import {Component, inject, OnInit} from '@angular/core';
import {SidebarHeaderComponent} from "../sidebar-header/sidebar-header.component";
import {Products, ProductsInterface} from '../../utils/product-list';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgStyle} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SidebarHeaderComponent,
    NgStyle,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: ProductsInterface[] = Products;
  product!: ProductsInterface;
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      const selectedId = data.get('id') || 1;
      this.product = this.products.find(({id}) => id === +selectedId) || this.products[0]
    });

    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
          setTimeout(() => {
            const currentUrl = this.router.url.split('#')[0];
            history.replaceState(null, '', currentUrl);
          }, 500);
        }
      }
    });
  }

  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }


}
