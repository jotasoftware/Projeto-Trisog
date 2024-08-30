import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import Tour from './Tour'

@Entity('types')
export default class Type {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    name!: string

    @OneToMany(() => Tour, (tour) => tour.type)
    tours!: Tour[]
}