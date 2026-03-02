import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    @MessagePattern('get-products')
    getProduct(id) {
        return {message: 'Got product', id};
    }

    @EventPattern("order.created")
    async updateStock(order: {id: number, productId: number}) {
        console.log("Checking stock for the product: ", order.productId);
        console.log("Stock updated");
    }
}
