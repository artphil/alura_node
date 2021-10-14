import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Livro{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 10, nullable: false })
    codigo: string;

    @Column({type: "varchar", nullable: false })
    nome: string;

    @Column({type: "decimal", precision: 10, scale: 2, nullable: false })
    valor: number;
}