import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { REDIS_PRODUCT_CLIENT } from 'apps/const';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(REDIS_PRODUCT_CLIENT) private productRedisClient: ClientProxy) {}

    @MessagePattern('create_order')
    createOrder(order) {
        console.log("Order recieved successfully", order);
        // Asynchronous
        this.productRedisClient.emit("order.created", order);
        // Synchronous
        return this.productRedisClient.send("get_product", order);
    }
}
