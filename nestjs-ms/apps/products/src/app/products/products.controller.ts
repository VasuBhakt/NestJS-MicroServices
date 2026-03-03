import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {

    @MessagePattern('get_product')
    getProduct(id) {
        return {message: 'Product fetched: ', id};
    }

    @EventPattern('order.created') 
    async updateStock(order: {id: number, productId: number}) {
        console.log("Checking stock for the product: ", order.productId);
        console.log("Stock updated");
    }

}
