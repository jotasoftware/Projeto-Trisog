import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm'

import City from './City'
import Type from './Type'

@Entity('tours')
export default class Tour {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    image!: string;
    
    @Column()
    name?: string;

    @ManyToOne(() => City, (city) => city.tours)
    @JoinColumn({name: 'cityId'})
    city!: City

    @ManyToOne(() => Type, (type) => type.tours)
    @JoinColumn({name: 'typeId'})
    type!: Type

    @Column()
    typeId!: number

    @Column()
    duration!: number

    @Column()
    minAge!: number

    @Column()
    maxPeople!: number
    
    @Column()
    price!: number

    @Column()
    dateStart!: string

    @Column()
    time!: number

    @Column()
    overview!: string

    @Column()
    latitude!: number

    @Column()
    longitude!: number

    @Column({nullable: true, type: 'float', default: 0})
    averageReviews?: number | 0

    @Column({nullable: true, default: 0})
    quantReviews?: number | 0
}