import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORDER_SERVICE, PAYMENT_SERVICE, PRODUCT_GRPC_URL, PRODUCT_SERVICE, USER_SERVICE } from '../../../const';
import { PRODUCTS_PACKAGE_NAME } from '../../../../types/proto/products'
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersController } from './orders/orders.controller';
import { join } from 'path';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ClientsModule.register([
    {
      name: USER_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: USER_SERVICE.port
      }
    },
    {
      name: ORDER_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: ORDER_SERVICE.port
      }
    },
    {
      name: PRODUCTS_PACKAGE_NAME,
      transport: Transport.GRPC,
      options: {
        package: PRODUCTS_PACKAGE_NAME,
        protoPath: join(__dirname, 'proto/products.proto'),
        url: PRODUCT_GRPC_URL
      }
    },
    {
      name: PAYMENT_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: PAYMENT_SERVICE.port
      }
    },
  ])],
  controllers: [AppController, OrdersController, ProductsController],
  providers: [AppService],
})
export class AppModule { }
