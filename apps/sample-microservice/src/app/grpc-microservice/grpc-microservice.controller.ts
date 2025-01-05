import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GrpcMicroserviceService } from './grpc-microservice.service';

@Controller()
export class GrpcMicroserviceController {
  constructor(private readonly grpcService: GrpcMicroserviceService) {}

  @GrpcMethod('Greeter', 'SayHello') // ServiceName, MethodName from .proto
  sayHello(data: { name: string }): { message: string } {
    return this.grpcService.sayHello(data.name);
  }
}
