import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE, PAYMENT_SERVICE, PRODUCT_SERVICE, USER_SERVICE } from './const';
import { OrdersController } from './orders/orders.controller';
import { PaymentsController } from './payments/payments.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4003
        }
      },
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4001
        }
      },
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4002
        }
      },
      {
        name: PAYMENT_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 4004
        }
      }
    ])
  ],
  controllers: [AppController, OrdersController, PaymentsController],
  providers: [AppService],
})
export class AppModule {}
