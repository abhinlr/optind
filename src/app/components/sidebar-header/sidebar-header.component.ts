import { Component ,input} from '@angular/core';
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar-header.component.html',
  styleUrl: './sidebar-header.component.scss'
})
export class SidebarHeaderComponent {
  constructor(private router: Router) {}
  isProductsPage=input.required<boolean>()

  video=input<boolean>(false)
  feature=input<boolean>(false)
  spec=input<boolean>(false)

  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
