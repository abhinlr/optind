import { Component } from '@angular/core';
import {SidebarHeaderComponent} from "../sidebar-header/sidebar-header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    SidebarHeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
