import { Body, Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PRODUCTS_PACKAGE_NAME, ProductServiceClient, PRODUCT_SERVICE_NAME } from 'types/proto/products';

@Controller('products')
export class ProductsController implements OnModuleInit {

    private productService: ProductServiceClient;

    constructor(@Inject(PRODUCTS_PACKAGE_NAME) private gRPClient: ClientGrpc) { }

    onModuleInit() {
        this.productService = this.gRPClient.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME)
    }

    @Get('find_one')
    findOne(@Body() { productId }) {
        return this.productService.getProduct({ productId: productId });
    }
}
