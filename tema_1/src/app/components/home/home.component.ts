import { Component, computed, OnInit, signal } from '@angular/core';
import { CoffeeCardComponent } from "../coffee-card/coffee-card.component";
import { HeaderComponent } from '../header/header.component';
import { Coffee } from '../../interfaces/coffee.interface';
import { CoffeeService } from '../../services/coffee-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Icon } from '../../interfaces/icon.interface';
import { IconService } from '../../services/icon-service';
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CoffeeCardComponent, HeaderComponent, IconButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  coffees!: Coffee[]
  icons!: Icon[]

  constructor(private coffeeService: CoffeeService, private iconService: IconService) { }

  ngOnInit(): void {
    this.coffees = this.coffeeService.getCoffees();
    this.icons = this.iconService.getIcons();
  }

  searchTerm = signal('');

  orderedCoffee = signal('');

  filteredList = computed(() =>
    this.coffees.filter(coffee =>
      coffee.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );

  onOrder(coffeeName: string) {
    this.orderedCoffee.set(coffeeName);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onIconClick(searchCategory: string) {
    this.searchTerm.set(searchCategory);
  }

  clearOrderedCoffee() {
    this.orderedCoffee.set('');
  }

}
