import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcMicroserviceModule } from './grpc-microservice/grpc-microservice.module';

@Module({
  imports: [GrpcMicroserviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
