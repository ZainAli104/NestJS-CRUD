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
      host: 'ep-late-brook-a1dr84d0.ap-southeast-1.aws.neon.tech',
      username: 'uneebbhutta115',
      password: 'Y4AefS3uNjQo',
      database: 'learning',
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
