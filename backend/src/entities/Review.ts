import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

@Entity('reviews')
class Review {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    tour!: string

    @Column()
    country!: string

    @Column()
    services!: number
    @Column()
    prices!: number
    @Column()
    location!: number
    @Column()
    food!: number
    @Column()
    amenties!: number
    @Column()
    room!: number
    @Column()
    comment!: string
    
}
export default Review