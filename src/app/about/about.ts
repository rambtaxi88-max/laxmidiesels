import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',  standalone: true,
})
export class About {}
