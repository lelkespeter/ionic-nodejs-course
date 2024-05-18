/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  id: string;
  data: any = {};
  items: any[] = [];
  // categories: any[] = [];
  veg: boolean = false;
  cartData: any = {};

  restaurants = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      address: 'Karol Bagh, New Delhi',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      address: 'Karol Bagh, New Delhi',
      distance: 2.5,
      price: 100,
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      address: 'Karol Bagh, New Delhi',
      distance: 2.5,
      price: 100,
    },
  ];

  categories: any[] = [
    {
      id: 'e00',
      name: 'Italian',
      uid: '12wefdss',
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: '12wefdss',
    },
  ];
  allItems = [
    {
      category_id: 'e00',
      cover: 'assets/imgs/pizza.jpg',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
    {
      category_id: 'e0',
      cover: 'assets/imgs/salad.jpg',
      desc: 'Great in taste  ',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: true,
    },
    {
      category_id: 'e00',
      cover: 'assets/imgs/pasta.jpg',
      desc: 'Great in taste',
      id: 'i3',
      name: 'Pasta',
      price: 150.5,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
  ];

  constructor(private route: ActivatedRoute, private ctrl: NavController) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paraMap) => {
      console.log('data: ', paraMap);

      if (!paraMap.has('restaurantId')) {
        this.ctrl.back();
        return;
      }
      this.id = paraMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();
    });
  }

  getItems() {
    this.data = {};
    this.cartData = {}; //cleared out
    let data: any = this.restaurants.filter((x) => x.uid === this.id);
    this.data = data[0];
    this.categories = this.categories.filter((x) => x.uid === this.id);
    this.items = this.allItems.filter((x) => x.uid === this.id);
    console.log('restaurant: ', this.data);
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

  vegOnly(event) {
    console.log('checked? ', event.detail.checked);
  }

  quantityPlus(index) {
    try {
      console.log('index', this.items[index]);
      if (!this.items[index].quantity || this.items[index].quantity === 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1; //this.items[index].quantity=this.items[index].quantity+1
        this.calculate();
      }
    } catch (error) {
      console.log(error);
    }
  }
  calculate() {}
}
