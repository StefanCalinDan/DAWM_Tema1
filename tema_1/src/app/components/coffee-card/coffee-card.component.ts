import { Component, input, output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../interfaces/coffee.interface';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss',
})
export class CoffeeCardComponent {
  readonly coffee = input.required<Coffee>();
  //readonly orderCoffee = output<string>();

  // onOrderNow() {
  //   this.orderCoffee.emit(this.coffee().name);
  // }
}
