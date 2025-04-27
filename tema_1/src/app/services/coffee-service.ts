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
                name: 'Pure Espresso',
                description: 'A rich and intense espresso shot, crafted for true coffee lovers seeking a bold flavor.',
                price: 2.99,
                imageUrl: '../../assets/images/coffee1.jpg'
            },
            {
                name: 'Artisan Latte',
                description: 'A smooth and creamy blend of espresso and steamed milk, finished with handcrafted latte art for a perfect visual and flavor experience.',
                price: 4.49,
                imageUrl: '../../assets/images/coffee2.jpg'
            },
            {
                name: 'Cocoa Tiramisu Coffee',
                description: 'A luxurious coffee creation layered with velvety foam, dusted with rich cocoa powder, and adorned with golden coffee beans for a decadent finish.',
                price: 5.49,
                imageUrl: '../../assets/images/coffee3.jpg'
            },
            {
                name: 'Iced Velvet Coffee',
                description: 'A refreshing blend of rich espresso poured over ice, swirled with silky milk for a smooth and invigorating coffee experience.',
                price: 4.99,
                imageUrl: '../../assets/images/coffee4.jpg'
            },
            {
                name: 'Cloud Macchiato',
                description: 'Delicate layers of milk and espresso topped with a light, airy foam — a coffee that\'s as beautiful as it is delicious.',
                price: 4.79,
                imageUrl: '../../assets/images/coffee5.jpg'
            },
            {
                name: 'Choco Mocha Delight',
                description: 'A rich blend of espresso and chocolate, crowned with fluffy whipped cream and chocolate shavings for the ultimate indulgence',
                price: 5.29,
                imageUrl: '../../assets/images/coffee6.jpg'
            },
            {
                name: 'Rustic Brew',
                description: 'A pure and aromatic brewed coffee, handcrafted through the pour-over method to unlock rich flavors and delicate aromas.',
                price: 3.49,
                imageUrl: '../../assets/images/coffee7.jpg'
            },
            {
                name: 'Double Shot Espresso',
                description: 'A bold and concentrated espresso brewed to perfection, delivering a powerful burst of flavor and energy in every sip.',
                price: 3.29,
                imageUrl: '../../assets/images/coffee8.jpg'
            },
            {
                name: 'Cinnamon Dream Latte',
                description: 'A cozy and aromatic latte, infused with the warm, comforting flavor of cinnamon — the perfect hug in a cup.',
                price: 4.59,
                imageUrl: '../../assets/images/coffee9.jpg'
            },

            {
                name: 'Classic Americano',
                description: 'A smooth and bold black coffee, offering a pure and rich espresso flavor softened with hot water — simplicity at its finest.',
                price: 2.79,
                imageUrl: 'assets/images/coffee10.jpg'
            },
            {
                name: 'Elegant Macchiato',
                description: 'A beautifully layered espresso and steamed milk creation, crowned with delicate foam and a touch of cocoa for a perfect balance of flavor and art.',
                price: 4.69,
                imageUrl: '../../assets/images/coffee11.jpg'
            },
            {
                name: 'Iced Caramel Macchiato',
                description: 'A refreshing layered blend of chilled milk and rich espresso, finished with a drizzle of caramel for a smooth and sweet escape.',
                price: 5.19,
                imageUrl: '../../assets/images/coffee12.jpg'
            },
            {
                name: 'Bold Black Brew',
                description: 'A deep, rich black coffee brewed to perfection, capturing the true essence of expertly roasted coffee beans.',
                price: 3.29,
                imageUrl: '../../assets/images/coffee13.jpg'
            },
            {
                name: 'Signature Cappuccino',
                description: 'A perfectly balanced cup of rich espresso and creamy milk foam, topped with handcrafted latte art for a refined coffee experience.',
                price: 4.39,
                imageUrl: '../../assets/images/coffee14.jpg'
            },

            {
                name: 'Velvet Cortado',
                description: 'A harmonious balance of bold espresso and silky milk, crafted to deliver a smooth and rich flavor with every sip.',
                price: 3.99,
                imageUrl: 'assets/images/coffee15.jpg'
            }

        ];
    }

    getCoffees() {
        return this.coffeeList;
    }
}
