import { Component, input, output } from '@angular/core';
import { Icon } from '../../interfaces/icon.interface';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  readonly icon = input.required<Icon>();
  readonly searchCategory = output<string>();

  onClick() {
    this.searchCategory.emit(this.icon().name);
  }
}
