import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "blog_nest",
    "entities": ["dist/**/**.entity{.ts,.js}"],
    "synchronize": true
  }),
    UtilisateursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
