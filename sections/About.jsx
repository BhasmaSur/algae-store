'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Welcome To Algae Stores" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[20px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We are a comprehensive platform dedicated to facilitating the buying and selling of <span className="font-extrabold text-white"> Seaweed </span>products between <span className="font-extrabold text-white">Farmers </span>and <span className="font-extrabold text-white">Sellers</span> . Our mission is to connect seaweed farmers with interested buyers , creating a sustainable marketplace for this unique and valuable resource . To ensure a smooth and efficient experience for all users, we have developed various features and functionalities that cater to the specific needs of our community.<br /><br />
        Let's explore the key aspects of our platform :
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;