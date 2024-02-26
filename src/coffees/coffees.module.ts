import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entity/coffee.entity';
import { Flavor } from './entity/flavor.entity';
import { Event } from '../events/entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event])
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService]
})
export class CoffeesModule {}
