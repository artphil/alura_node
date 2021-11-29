import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

import { Livro } from './livro.entity';

@Injectable()
export class LivrosService {

    constructor(
        @InjectRepository(Livro)
        private livroRepository: Repository<Livro>
    ) {}

    obterTodos():  Promise<Livro[]> {
        return this.livroRepository.find();
    } 

    obterUm(id: number): Promise<Livro> {
        return this.livroRepository.findOne(id);
    }

    criar(livro: Livro): Promise<InsertResult> {
        return this.livroRepository.insert(livro);
    }

    alterar(livro: Livro): Promise<UpdateResult> {
        return this.livroRepository.update({ id:livro.id }, livro);
    }

    apagar(id: number): Promise<DeleteResult> {
        return this.livroRepository.delete(id);
    }
}
