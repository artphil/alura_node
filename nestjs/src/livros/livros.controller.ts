import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

import { LivrosService } from './livros.service';
import { Livro } from './livro.entity';

@Controller('livros')
export class LivrosController {

    constructor(
        private livrosService: LivrosService
    ){}

    @Get()
    obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    } 

    @Get(':id')
    obterUm(@Param() params): Promise<Livro> {
        console.log(params.id);
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    criar(@Body() livro): Promise<InsertResult> {
        console.log(livro);
        return this.livrosService.criar(livro);
    }

    @Put()
    alterar(@Body() livro): Promise<UpdateResult> {
        console.log(livro);
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    apagar(@Param() params): Promise<DeleteResult> {
        console.log(params.id);
        return this.livrosService.apagar(params.id)
    }
}