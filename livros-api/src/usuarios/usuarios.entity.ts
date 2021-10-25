import { Exclude, Expose, Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNomeDeUsuarioUnico } from "./usuarios.validator";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @Expose({
        name: 'username'
    })
    @IsNomeDeUsuarioUnico({
        message: 'O usuário já existe'
    })
    @Length(3, 20, {
        message: 'O nome de usuário deve ter no mínimo 3 e no máximo 20 caracteres.'
    })
    @IsNotEmpty({
        message: 'nome de usuário é obrigatório.'
    })
    @IsString({
        message: 'nome de usuário precisa ser uma palavra.'
    })
    nomeDeUsuario: string;
    
    @Column()
    @IsEmail({}, {
        message: 'email precisa ser um endereço de email válido.'
    })
    email: string;
 
    @Column()
    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly:true
    })
    @IsNotEmpty({
        message: 'senha é obrigatório.'
    })
    senha: string;
 
    @Column()
    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório.'
    })
    nomeCompleto: string;

    @Column()
    @Expose({
        name: 'joinDate'
    })
    @Type(() => Date)
    @IsDate({
        message: 'Data inválida'
    })
    dataDeEntrada: Date;
}