import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
    @MessagePattern('issue-payment')
    issuePayment(payment) {
        console.log("Payment issued successfully", payment);
        return {message: 'Payment issued successfully', payment};
    }
}
