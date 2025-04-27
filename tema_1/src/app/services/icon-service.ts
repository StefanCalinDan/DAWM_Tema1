import { Injectable, signal } from '@angular/core';
import { Icon } from '../interfaces/icon.interface';

@Injectable({
    providedIn: 'root'
})
export class IconService {

    private iconList: Icon[] = this.composeListOfIcons();

    private composeListOfIcons(): Icon[] {
        return [

            {
                name: '',
                imageUrl: '../../assets/icons/home.png'
            },

            {
                name: 'Espresso',
                imageUrl: '../../assets/icons/espresso.png'
            },

            {
                name: 'Brew',
                imageUrl: '../../assets/icons/brew.png'
            },

            {
                name: 'Latte',
                imageUrl: '../../assets/icons/latte.png'
            },

            {
                name: 'Iced',
                imageUrl: '../../assets/icons/iced.png'
            }



        ];
    }

    getIcons() {
        return this.iconList;
    }
}
