import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from 'path';
import fs from 'fs';
import {HttpsOptions} from "@nestjs/common/interfaces/external/https-options.interface";

async function bootstrap() {
    const httpsOptions: HttpsOptions = process.env.NODE_ENV === 'prod' ? {
        key: fs.readFileSync('./cert/privkey.pem'),
        cert: fs.readFileSync('./cert/cert.pem'),
    } : null;

    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        httpsOptions
    });
    app.enableCors({
        origin: process.env.CORS_ORIGIN === '*' ?? process.env.CORS_ORIGIN.split(',')
    });
    app.useStaticAssets(join(__dirname, '..', 'public/images/previews'), {
        prefix: '/public/images/previews/',
    });
    await app.listen(process.env.API_PORT);
}

bootstrap();
