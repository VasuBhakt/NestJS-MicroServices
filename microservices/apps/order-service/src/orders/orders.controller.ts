import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
    @MessagePattern('create-order')
    createOrder(order) {
        console.log("Order recieved successfully", order);
        return {message: 'Order created successfully', order};
    }
}
