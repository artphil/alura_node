import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Livro } from './livro.entity';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
    imports: [TypeOrmModule.forFeature([Livro])],
    providers: [LivrosService],
    controllers: [LivrosController],
})
export class LivrosModule {}
