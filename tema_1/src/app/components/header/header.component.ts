import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly orderedCoffee = input<string>();
  readonly clearOrderEvent = output<void>();

  clearOrder(){
    this.clearOrderEvent.emit();
  }
}
