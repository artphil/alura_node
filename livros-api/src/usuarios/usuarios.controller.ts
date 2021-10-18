import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';

@Controller('users')
export class UsuariosController {

    constructor(
        private usuariosService: UsuariosService
    ) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        return this.usuariosService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        return this.usuariosService.cria(usuario);
    }
}
