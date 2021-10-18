import { Injectable } from '@nestjs/common';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {

    private usuarios: Array<Usuario> = [
        {
            id: 123,
            nomeDeUsuario: 'gabriel',
            email: 'gabriel@alura.com',
            senha: '123456',
            nomeCompleto: 'Gabriel Leite',
            dataDeEntrada: new Date(),
        }
    ]

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
    }
}
