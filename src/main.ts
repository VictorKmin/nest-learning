import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { variables } from './config';

async function start() {
  const app = await NestFactory.create(AppModule);
  console.log(variables.PORT);

  _swaggerBuilder(app);

  await app.listen(variables.PORT);
}

start();

function _swaggerBuilder(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Nest starter')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
}
