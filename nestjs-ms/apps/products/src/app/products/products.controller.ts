import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ProductRequest, ProductResponse, ProductServiceController, ProductServiceControllerMethods } from 'types/proto/products';

@Controller('products')
@ProductServiceControllerMethods()
export class ProductsController implements ProductServiceController {

    getProduct(request: ProductRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
        return {
            productId: request.productId,
            name: "Adidas",
            price: 68000
        }
    }
}
