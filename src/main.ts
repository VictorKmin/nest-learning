import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT);

  _swaggerBuilder(app);

  await app.listen(process.env.PORT);
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
