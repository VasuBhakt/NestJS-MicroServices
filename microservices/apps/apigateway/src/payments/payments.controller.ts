import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PAYMENT_SERVICE } from 'src/const';

@Controller('payments')
export class PaymentsController {
    constructor(@Inject(PAYMENT_SERVICE) private paymentClient: ClientProxy) {}

    @Post()
    issuePayment(@Body() payment) {
        return this.paymentClient.send('issue-payment', payment);
    }
}
