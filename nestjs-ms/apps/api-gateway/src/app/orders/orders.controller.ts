import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'apps/const';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(ORDER_SERVICE.name) private orderClient : ClientProxy) {}

    @Post('create')
    createOrder(@Body() order) {
        return this.orderClient.send('create_order', order);
    }

}
