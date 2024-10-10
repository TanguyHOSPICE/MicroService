import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
        // Permet de définir une queue spécifique pour le microservice pour éviter les conflits et enchainer les messages
        // queue: 'ms-ex',
      },
    },
  );
}
bootstrap();
