import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hello', // matches the .proto package
          protoPath: join(__dirname, '/proto/hello.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
