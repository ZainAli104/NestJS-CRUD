import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-sparkling-dream-a14kyaiu.ap-southeast-1.aws.neon.tech',
      username: 'zainfiverr44',
      password: 'FEkMJcv5w2fA',
      database: 'storedb',
      autoLoadEntities: true,
      synchronize: true,
      ssl: true, // Enable SSL connection
      extra: {
        ssl: {
          rejectUnauthorized: false, // This might be required depending on your server's SSL configuration
        },
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
