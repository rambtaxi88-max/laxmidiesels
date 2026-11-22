import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare var bootstrap: any;
@Component({
  imports: [RouterLink,
    CommonModule, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header { closeMenu(): void {

    const navbar = document.getElementById('mainNavbar');

    if (navbar && navbar.classList.contains('show')) {

      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);

      bsCollapse.hide();
    }
  }}
