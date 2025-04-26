import { Injectable, signal } from '@angular/core';
import { Coffee } from '../interfaces/coffee.interface'; // adaptezi path-ul dacă e nevoie

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {

    private coffeeList: Coffee[] = this.composeListOfCoffees();

    private composeListOfCoffees(): Coffee[] {
        return [
            {
                name: 'Lungo Coffee',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },

            {
                name: 'Lungo Coffee',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: 'assets/images/photo.jpg'
            }

        ];
    }

    getCoffees() {
        return this.coffeeList;
    }
}
