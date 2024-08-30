import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import City from './City'

@Entity('country')
export default class Country {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    image!: string

    @Column()
    name!: string
    
    @Column()
    travelers!: number

    @OneToMany(() => City, (city) => city.country)
    cities?: City[];
}
