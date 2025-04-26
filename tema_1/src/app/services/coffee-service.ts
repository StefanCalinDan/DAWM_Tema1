import { Injectable, signal } from '@angular/core';
import { Coffee } from '../interfaces/coffee.interface';

@Injectable({
    providedIn: 'root'
})
export class CoffeeService {

    private coffeeList: Coffee[] = this.composeListOfCoffees();

    private composeListOfCoffees(): Coffee[] {
        return [
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },
            {
                name: 'Scurto',
                description: 'An espresso coffee drink, topped with a small amount of milk.',
                price: 199,
                imageUrl: '../../assets/images/photo.jpg'
            },

            {
                name: 'Lungo',
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
