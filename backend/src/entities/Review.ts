import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from 'typeorm'

@Entity('reviews')
export default class Review {
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    tourId!: number

    @Column()
    services!: number

    @Column()
    prices!: number

    @Column()
    locations!: number

    @Column()
    food!: number
    
    @Column()
    amenities!: number

    @Column()
    room!: number

    @Column({ type: 'float', default: 0 })
    average!: number

    @Column()
    name!: string

    @Column()
    emailAddress!: string

    @Column()
    comment!: string
    
    @CreateDateColumn({ type: 'datetime' })
    createdAt!: Date;
}