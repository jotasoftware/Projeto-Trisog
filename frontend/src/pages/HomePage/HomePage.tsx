import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import CarouselCards from '../../components/CarouselCards/CarouselCards'
import ImageMosaic from '../../components/ImageMosaic/ImageMosaic'
import CarouselTestimonials from '../../components/CarouselTestimonials/CarouselTestimonials'
import Updates from '../../components/Updates/Updates'
import styles from './HomePage.module.css'
import { GiCheckMark } from "react-icons/gi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";

const HomePage = () => {
  return (
    <>
        <section className={styles.titleSection}>
            <h3 className={styles.tagsTitle}>
                Save 15% off in Worldwide
            </h3>
            <h1>Travel & Adventure</h1>
            <p>Find awesome hotel, tour, car and activities in London</p>
            <SearchForm />
        </section>
        <section className={styles.cardsSection}>
            <div className={styles.tagsContainer}>
                <span className={styles.tagsLine}></span>
                <h3 className={styles.tagsTitle}>Tours</h3>
                <span className={styles.tagsLine}></span>
            </div>
            <h2>Most Popular Tours</h2>
            <CarouselCards cardType="tours" />
        </section>
        <span className={styles.sectionLine}></span>
        <section className={styles.numbersSection}>
            <div>
                <span>120+</span><p>Total Destination</p>
            </div>
            <div>
                <span>500+</span><p>Travel Packages</p>
            </div>
            <div>
                <span>12k+</span><p>Total Travelers</p>
            </div>
            <div>
                <span>7k+</span><p>Positive Reviews</p>
            </div>
        </section>
        <section className={styles.mosaicSection}>
            <div className={styles.tagsContainer}>
                <span className={styles.tagsLine}></span>
                <h3 className={styles.tagsTitle}>Destination</h3>
                <span className={styles.tagsLine}></span>
            </div>
            <h2>Top Attractions Destinations</h2>
            <ImageMosaic></ImageMosaic> 
        </section>
        <section className={styles.whySection}>
            <div className={styles.whyImage}>
                <img src="img2.png" alt="" />
                <button><FaRegCirclePlay />What Now</button>
            </div>
            <div className={styles.whyText}>
                <div className={styles.tagsContainer}>
                    <h3 className={styles.tagsTitle}>Why Choose Us</h3>
                    <span className={styles.tagsLine}></span>
                </div>
                <h2>Our Experiences Meet High Quality Standart</h2>
                <p>Holisticly optimize proactive strategic theme areas rather than effective manufacturated products create</p>
                <div className={styles.whyChecks}>
                    <div>
                        <GiCheckMark color='#FD5056'/><p>Travel Plan</p>
                    </div>
                    <div>
                        <GiCheckMark color='#FD5056'/><p>Cheap Rates</p>
                    </div>
                    <div>
                        <GiCheckMark color='#FD5056'/><p>Hand-picked Tour</p>
                    </div>
                    <div>
                        <GiCheckMark color='#FD5056'/><p>Private Guide</p>
                    </div>
                    <button>Contact Us</button>
                </div>
            </div>
        </section>
        <span className={styles.sectionLine}></span>
        <section className={styles.typeSection}>
            <div className={styles.tagsContainer}>
                <span className={styles.tagsLine}></span>
                <h3 className={styles.tagsTitle}>Browse By Category</h3>
                <span className={styles.tagsLine}></span>
            </div>
            <h2>Pick A Tour Type</h2>
            <CarouselCards cardType="types" />
        </section>
        <section className={styles.testimonialsSection}>
            <div className={styles.testimonialsImage}>
                <img src="img3.png" alt="" />
            </div>
            <div className={styles.testimonialsText}>
                <div className={styles.tagsContainer}>
                    <span className={styles.tagsLine}></span>
                    <h3 className={styles.tagsTitle}>Testimonials</h3>
                    <span className={styles.tagsLine}></span>
                </div>
                <h2>What Travelers Say</h2>
                <RiDoubleQuotesR size={50} color='#FD5056'/>
                <CarouselTestimonials></CarouselTestimonials>
            </div>
        </section>
        <section className={styles.updatesSection}>
            <div className={styles.tagsContainer}>
                <span className={styles.tagsLine}></span>
                <h3 className={styles.tagsTitle}>Updates</h3>
                <span className={styles.tagsLine}></span>
            </div>
            <h2>Latest Travel Guide</h2>
            <Updates></Updates>
        </section>
        <section className={styles.iconsSection}>
            <img src="1.png" alt="" />
            <img src="2.png" alt="" />
            <img src="3.png" alt="" />
            <img src="4.png" alt="" />
            <img src="5.png" alt="" />
        </section>
    </>
  )
}

export default HomePage