import { Component, computed, OnInit, signal } from '@angular/core';
import { CoffeeCardComponent } from "../coffee-card/coffee-card.component";
import { HeaderComponent } from '../header/header.component';
import { Coffee } from '../../interfaces/coffee.interface';
import { CoffeeService } from '../../services/coffee-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CoffeeCardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  coffees!: Coffee[]

  constructor(private coffeeService: CoffeeService) {}
 
  ngOnInit(): void {
    this.coffees = this.coffeeService.getCoffees();
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
  }
}
