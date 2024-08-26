import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import Tour from './Tour'

@Entity('cities')
class City {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    name!: string

    @Column()
    country!: string

    @OneToMany(() => Tour, (tour) => tour.city)
    tours!: Tour[]
}
export default City;