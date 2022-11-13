import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { BlogCard } from '../../components';
import { BlogCardData } from '../../interfaces';
import { client } from '../../lib';
import { motion } from 'framer-motion';

const Blogs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { blogs } = props;

    return (
        <div className="px-10 lg:px-44 my-20">
            <Head>
                <title>Blogs | Naman Arora</title>
            </Head>
            <motion.h2
                className="text-3xl font-semibold mb-10 border-b-4 border-b-teal-500 inline-block pb-2"
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                All Blogs
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2"
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                {blogs.map(blog => (
                    <BlogCard {...blog} key={blog._id} />
                ))}
            </motion.div>
        </div>
    );
};

interface DataProps {
    blogs: BlogCardData[];
}

export const getStaticProps: GetStaticProps<DataProps> = async () => {
    const blogs = (await client.fetch(`
        *[_type=="blog"] {
            _id,
            image,
            title,
            excerpt,
            slug,
            categories[]->
        }
    `)) as BlogCardData[];

    return {
        props: {
            blogs
        }
    };
};

export default Blogs;
