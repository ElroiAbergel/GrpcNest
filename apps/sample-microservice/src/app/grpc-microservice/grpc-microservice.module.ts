import { Module } from '@nestjs/common';
import { GrpcMicroserviceController } from './grpc-microservice.controller';
import { GrpcMicroserviceService } from './grpc-microservice.service';

@Module({
  controllers: [GrpcMicroserviceController],
  providers: [GrpcMicroserviceService],
})
export class GrpcMicroserviceModule {}
