import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    @MessagePattern('get-products')
    getProduct(id) {
        return {message: 'Got product', id};
    }
}
