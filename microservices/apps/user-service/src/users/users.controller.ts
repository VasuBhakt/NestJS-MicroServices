import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    @MessagePattern('get-user')
    createOrder(id) {
        return {id, name:"Modi"};
    }
}
