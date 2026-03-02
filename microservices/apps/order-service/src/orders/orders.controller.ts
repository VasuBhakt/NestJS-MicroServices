import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { PRODUCT_REDIS_CLIENT } from 'src/const';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(PRODUCT_REDIS_CLIENT) private productRedisClient: ClientProxy) {}

    @MessagePattern('create-order')
    createOrder(order) {
        console.log("Order recieved successfully", order);
        // Asynchronous
        this.productRedisClient.emit("order.created", order);
        // Synchronous
        return this.productRedisClient.send('get-products', order);
        return {message: 'Order created successfully', order};
    }
}
