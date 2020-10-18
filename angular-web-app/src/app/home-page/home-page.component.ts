import {Component, OnInit} from '@angular/core';
import {DisneyItem} from "../model/json-model";
import {window} from "rxjs/operators";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getList(): DisneyItem[] {
    // todo connect to real database
    return [
      {
        name: 'Tinker Bell Pet Costume',
        pricing: 17.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2840040738714',
      },
      {
        name: 'Stitch Costume for Pets',
        pricing: 20.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372422-1',
      },
      {
        name: 'Mickey Mouse Classic T-Shirt for Dogs – Disney Tails – Walt Disney World',
        pricing: 24.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372512',
      },
      {
        name: 'Minnie Mouse Costume Harness for Dogs',
        pricing: 29.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372490',
      },
      {
        name: 'Tinker Bell Pet Costume',
        pricing: 17.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2840040738714',
      },
      {
        name: 'Stitch Costume for Pets',
        pricing: 20.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372422-1',
      },
      {
        name: 'Mickey Mouse Classic T-Shirt for Dogs – Disney Tails – Walt Disney World',
        pricing: 24.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372512',
      },
      {
        name: 'Minnie Mouse Costume Harness for Dogs',
        pricing: 29.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372490',
      },
      {
        name: 'Tinker Bell Pet Costume',
        pricing: 17.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2840040738714',
      },
      {
        name: 'Stitch Costume for Pets',
        pricing: 20.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372422-1',
      },
      {
        name: 'Mickey Mouse Classic T-Shirt for Dogs – Disney Tails – Walt Disney World',
        pricing: 24.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372512',
      },
      {
        name: 'Minnie Mouse Costume Harness for Dogs',
        pricing: 29.99,
        image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7511057372490',
      },
    ];
  }
}
