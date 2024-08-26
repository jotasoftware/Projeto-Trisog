import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm'

import City from './City'
import Type from './Type'

@Entity('tours')
class Tour {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    tour!: string

    @Column()
    image!: string

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
    dateStart!: Date

    @Column()
    averageReview?: number
}

export default Tour;