import { Component, OnInit } from '@angular/core';
import { CoffeeCardComponent } from "../coffee-card/coffee-card.component";
import { Coffee } from '../../interfaces/coffee.interface';
import { CoffeeService } from '../../services/coffee-service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoffeeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  arrayOfCoffee:Coffee[] = [];
  coffeeService: CoffeeService = new CoffeeService;

  ngOnInit(): void {
    this.getCoffee()
  }

  getCoffee(){
    this.arrayOfCoffee = this.coffeeService.getCoffees()
  }
}
