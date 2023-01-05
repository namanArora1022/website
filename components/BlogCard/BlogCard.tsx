import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogCardData } from '@interfaces';
import { urlFor } from '@lib';
import { motion } from 'framer-motion';

interface Props extends BlogCardData {}

const BlogCard: React.FC<Props> = props => {
    const { image, title, categories, excerpt, slug } = props;
    return (
        <Link href={`/blog/${slug.current}`} passHref>
            <motion.div
                className="bg-gray-100 dark:bg-neutral-900 p-4 rounded-lg shadow hover:shadow-lg my-10 md:m-10 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Image
                    src={urlFor(image).url()}
                    height={200}
                    width={400}
                    className="object-cover rounded-lg"
                    alt={title}
                />
                <h3 className="text-xl font-semibold my-4">{title}</h3>
                <p>{excerpt}</p>
                <div className="flex flex-wrap mt-5 items-center">
                    {categories?.map(category => (
                        <span
                            key={category._id}
                            className="px-4 py-1 bg-teal-500 text-white rounded-full mr-4"
                        >
                            {category.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        </Link>
    );
};

export default BlogCard;
