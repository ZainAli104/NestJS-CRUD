import { Injectable } from '@nestjs/common';

import { Coffee } from "./entity/coffee.entity";

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: "Laty",
      brand: "kuch bhi",
      flavors: ['a', 'b', 'c']
    }
  ];

  finalAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find(i => i.id === +id)
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updatedCoffeeDto :any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing coffee
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
