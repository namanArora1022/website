import React from 'react';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { LandingData } from '../../interfaces';
import { urlFor } from '../../lib';
import Image from 'next/image';

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
};

interface Props extends LandingData {}

const Landing: React.FC<Props> = props => {
    const {
        bgText1,
        bgText2,
        smallText,
        name,
        description,
        buttonText,
        image
    } = props;

    return (
        <div className="flex flex-col lg:flex-row pt-20 lg:pt-0 lg:justify-between items-center lg:h-screen">
            <motion.div
                className="w-full lg:w-1/2"
                variants={variants}
                initial="hidden"
                animate="show"
            >
                <h2 className="absolute -z-20 text-gray-300 dark:text-neutral-900 text-5xl md:text-8xl font-bold mt-2 md:-mt-5 capitalize">
                    {bgText1}
                    <br />
                    {bgText2}
                </h2>
                <motion.h1
                    className="text-2xl md:text-3xl font-bold"
                    variants={item}
                >
                    {smallText}
                </motion.h1>
                <motion.h1
                    className="text-5xl md:text-8xl font-bold mb-3 flex items-end"
                    variants={item}
                >
                    {name}
                    <span className="h-4 w-4 bg-teal-500 inline-block rounded-full ml-1"></span>
                </motion.h1>
                <motion.p className="lg:w-2/3" variants={item}>
                    {description}
                </motion.p>
                <motion.a
                    href="#mySkillSet"
                    variants={item}
                    aria-label="Read more about me"
                >
                    <Button className="invisible lg:visible">
                        {buttonText}
                    </Button>
                </motion.a>
            </motion.div>

            <motion.div
                className="relative  lg:w-1/2"
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.7, damping: 2, type: 'spring' }}
                viewport={{ once: true }}
            >
                <Image
                    src={urlFor(image).url()}
                    height={300}
                    width={400}
                    alt="landing-image"
                    className="object-cover w-full"
                />
            </motion.div>
        </div>
    );
};

export default Landing;
