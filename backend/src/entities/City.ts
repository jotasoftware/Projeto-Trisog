import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm'
import Tour from './Tour'
import Country from './Country'

@Entity('cities')
export default class City {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    name!: string

    @ManyToOne(() => Country, (country) => country.cities)
    @JoinColumn({name: 'countryId'})
    country?: Country;

    @OneToMany(() => Tour, (tour) => tour.city)
    tours!: Tour[]
}
