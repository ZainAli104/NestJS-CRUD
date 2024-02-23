import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot("mongodb+srv://zainfiverr44:ra4Trr0tcn6RyLt9@cluster0.sixhmey.mongodb.net/coffee-shop?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
