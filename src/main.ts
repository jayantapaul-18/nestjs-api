import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { logger } from "./common/middleware/logger.middleware";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("health")
    .setDescription("The health API description")
    .setVersion("1.0")
    .addTag("health")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  app.use(logger);
  await app.listen(3003);
}
bootstrap();
