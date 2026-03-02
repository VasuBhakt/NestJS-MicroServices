import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('check')
    healthcheck() {
        return {message: "Ok go it :)"};
    }
}
