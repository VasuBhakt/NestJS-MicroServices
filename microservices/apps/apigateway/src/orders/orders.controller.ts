import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ORDER_SERVICE } from 'src/const';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(ORDER_SERVICE) private orderClient: ClientProxy) {}

    @Post()
    createOrder(@Body() order) {
        return this.orderClient.send('create-order', order);
    }
}
