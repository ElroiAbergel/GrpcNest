import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcMicroserviceModule } from './app/grpc-microservice/grpc-microservice.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcMicroserviceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hello',
        protoPath: join(__dirname, './proto/hello.proto'),
        url: 'localhost:50051',
      },
    }
  );

  await app.listen();
  console.log('gRPC microservice is listening on port 50051...');
}
bootstrap();
