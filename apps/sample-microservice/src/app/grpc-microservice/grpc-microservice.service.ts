import { Injectable } from '@nestjs/common';

@Injectable()
export class GrpcMicroserviceService {
  sayHello(name: string): { message: string } {
    return { message: `Hello, ${name}!` };
  }
}
