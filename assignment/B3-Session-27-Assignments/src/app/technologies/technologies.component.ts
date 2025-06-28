import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import categories from '../shared/data/categories.json';
import subCategories from '../shared/data/subCategories.json';
import tech from '../shared/data/technologies.json';
import { Category } from '../shared/models/category';
import { Technology } from '../shared/models/technology';

@Component({
  selector: 'app-technologies',
  imports: [NgClass],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent implements OnInit {
  title = 'software-technologies';
  technologies: Technology[] = [];
  categories: Category[] = [];
  subCategories: Category[] = [];

  constructor() {}

  ngOnInit() {
    this.technologies = tech;
    this.categories = categories;
    this.subCategories = subCategories;
  }
}
