import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductForm = this.formbuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required],
    amount: ['1', Validators.required],
  });
  errors = errorMessages;
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {}

  category = new FormControl();
  categoryList: string[] = [
    'car',
    'cloth',
    'electric',
    'laptop',
    'smartPhone',
    'art',
    'sport',
    'toy',
    'dish',
    'smartWatch',
    'homeDesign',
  ];
}
export const errorMessages: { [key: string]: string } = {
  name: 'write Name',
  category: 'Please choose at least ONE category',
  price: 'Write IT',
  amount: '1 2 ...'
};
