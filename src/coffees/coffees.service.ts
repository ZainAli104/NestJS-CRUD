import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Coffee } from './entity/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}

  finalAll() {
    return this.coffeeModel.find().exec();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeModel.findOne({
      _id: id,
    }).exec();

    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found!`);
    }

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = new this.coffeeModel(createCoffeeDto);

    return coffee.save();
  }

  async update(id: string, updatedCoffeeDto: any) {
    const existingCoffee = this.coffeeModel.findOneAndUpdate({
      _id: id,
    }, {
      $set: updatedCoffeeDto,
    }, { new: true }).exec();

    if (!existingCoffee) {
      throw new NotFoundException(`Coffee ${id} not found!`);
    }

    return existingCoffee;
  }

  async remove(id: string) {
    const coffee = this.coffeeModel.findOneAndDelete({
      _id: id,
    }).exec();

    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found!`);
    }

    return coffee;
  }
}
