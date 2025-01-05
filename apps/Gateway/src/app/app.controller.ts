// src/app.controller.ts
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GreeterService, HelloResponse } from '../interfaces/greeter.interface';

@Controller()
export class AppController {
  private greeterService: GreeterService;

  constructor(@Inject('GREETER_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    // This is run once the module is initialized.
    this.greeterService = this.client.getService<GreeterService>('Greeter');
  }

  @Get('hello')
  getHello() {
    return this.greeterService.sayHello({ name: 'NestJS' });
  }
}
