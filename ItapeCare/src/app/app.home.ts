import { Component, HostListener  } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.home.html',
  styleUrl: './app.home.scss'
})
export class AppComponent {
  title = 'ItapeCare';

  isCollapsed: boolean = true;
  isExpanded: boolean = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.isCollapsed = false;
    this.isExpanded = true;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isCollapsed = true;
    this.isExpanded = false;
  }
}
