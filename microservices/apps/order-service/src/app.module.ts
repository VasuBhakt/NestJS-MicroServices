import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_REDIS_CLIENT } from './const';

@Module({
  imports: [ClientsModule.register([
    {
      name: PRODUCT_REDIS_CLIENT,
      transport: Transport.REDIS,
      options: {
        port: 6379
      }
    }
  ])

  ],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
