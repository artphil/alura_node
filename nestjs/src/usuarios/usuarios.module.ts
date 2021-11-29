import { Module } from '@nestjs/common';

import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { IsNomeDeUsuarioUnicoConstraint } from './usuarios.validator';

@Module({
  controllers: [UsuariosController],
  providers: [
    UsuariosService, 
    IsNomeDeUsuarioUnicoConstraint
  ]
})
export class UsuariosModule { }
