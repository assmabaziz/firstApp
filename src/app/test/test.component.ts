import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
interface IProducts {
  nameProduct: string;
  price: number;
  onSale: boolean;
  imageSrc: string;
}
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  userName: string = 'assma';
  userAge: number = 31;
  imgSrc: string = "assets/images/mr_Pants.jpg";
  imgAlt: string = 'mrPants';
  check: boolean = true;
  testClassBinding: boolean = false;
  color: string = 'green';
  friends: string[] = ['assma', 'aws', 'amira'];
  elements: string[] = ['wdfg', 'hjkl', 'gtrrf', 'ghgfreetyu'];
  data: string = '';
  listProducts: IProducts[] = [
    {
      nameProduct: 'iphone',
      price: 152,
      onSale: true,
      imageSrc: "./assets/images/mr_pants2.jpg",
    },
    {
      nameProduct: 'oppo',
      price: 13,
      onSale: true,
      imageSrc: "./assets/images/mr_pants3.jpg",
    },
    {
      nameProduct: 'samsung',
      price: 140,
      onSale: true,
      imageSrc: "./assets/images/mr_pants2.jpg",
    },
    {
      nameProduct: 'iphsatertertone',
      price: 182,
      onSale: true,
      imageSrc: "./assets/images/mr_pants3.jpg",
    },
    {
      nameProduct: 'dfg',
      price: 162,
      onSale: true,
      imageSrc: "/src/assets/images/mr_pants2.jpg",
    },
    {
      nameProduct: 'dfg',
      price: 162,
      onSale: false,
      imageSrc: "/src/assets/images/mr_pants2.jpg",
    },
    {
      nameProduct: 'dfg',
      price: 162,
      onSale: false,
      imageSrc: "/src/assets/images/mr_pants2.jpg",
    },
  ];
  sayHi() {
    console.log('hiiiiiiiiiiiiiiiiiiiiiiiii');
  }
  sayHello() {
    console.log('Helloooooooooooooo');
  }
  testEvent(eventInfo: KeyboardEvent) {
    console.log(eventInfo);
  }
  testMouseEvent(eventInfo: MouseEvent) {
    console.log(eventInfo);
  }
  checkAdmin(): boolean {
    if (this.check) {
      return true;
    }
    return false;
  }
}
