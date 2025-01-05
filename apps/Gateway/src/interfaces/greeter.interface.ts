// src/interfaces/greeter.interface.ts

export interface HelloRequest {
  name: string;
}

export interface HelloResponse {
  message: string;
}

// The Greeter service interface
export interface GreeterService {
  sayHello(request: HelloRequest): Promise<HelloResponse>;
}
