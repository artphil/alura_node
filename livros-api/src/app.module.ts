import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Livro } from './livros/livro.entity';
import { LivrosModule } from './livros/livros.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroExcecaoHttph } from './common/filtros/filtro-de-excecao-http.filter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.19.0.120',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'test',
      entities: [Livro],
      synchronize: true,
      autoLoadEntities: true,
    }),

    LivrosModule,
    UsuariosModule,
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_FILTER,
      useClass: FiltroExcecaoHttph
    }
  ],
})
export class AppModule {}