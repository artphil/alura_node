import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';

import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';

@Controller('users')
export class UsuariosController {

    constructor(
        private usuariosService: UsuariosService
    ) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuariosService.buscaPorNomeDeUsuario(nomeDeUsuario);

        if (!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado.'
            })
        }

        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuariosService.cria(usuario);
        return new NestResponseBuilder()
                .comStatus(HttpStatus.CREATED)
                .comHeaders({
                    'Location': `/users/${usuarioCriado.nomeDeUsuario}`
                })
                .comBody(usuarioCriado)
                .build();
    }
}
