import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Blog } from '../../interfaces';
import { client, urlFor } from '../../lib';
import dayjs from 'dayjs';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { IoCaretBack } from 'react-icons/io5';
import Link from 'next/link';

const BlogDetails = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { blog } = props;
    const { title, image, categories, _createdAt, content } = blog;

    return (
        <>
            <Head>
                <title>{blog.title} | Naman Arora</title>
            </Head>

            <motion.div
                className="px-10 lg:px-44 my-20 flex flex-col justify-start items-start"
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <Link href="/blog" passHref>
                    <a>
                        <motion.button
                            className="flex items-center mb-5 border-b-[3px] pb-2 border-b-teal-500 hover:bg-teal-200 transition duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IoCaretBack />
                            <span>Back</span>
                        </motion.button>
                    </a>
                </Link>
                <Image
                    src={urlFor(image).url()}
                    height={500}
                    width={1000}
                    className="object-cover"
                    alt={blog.title}
                />
                <motion.h1
                    className="text-4xl font-semibold mt-10 mb-5 pb-2 border-b-teal-500 border-b-4 inline-block"
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    Pushlished on{' '}
                    <span className="font-semibold">
                        {dayjs(_createdAt).format('DD MMM YYYY')}
                    </span>
                </motion.p>
                <motion.div
                    className="flex flex-wrap mt-5 mb-3 items-center"
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {categories.map(category => (
                        <span
                            key={category._id}
                            className="px-4 py-1 bg-teal-500 text-white rounded-full mr-4"
                        >
                            {category.name}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="mt-5 content"
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <PortableText
                        value={content}
                        components={{
                            types: {
                                image: ({ value }) => (
                                    <Image
                                        src={urlFor(value).url()}
                                        height={400}
                                        width={800}
                                        className="object-cover"
                                    />
                                )
                            }
                        }}
                    />
                </motion.div>
            </motion.div>
        </>
    );
};

export default BlogDetails;

interface DataProps {
    blog: Blog;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = (await client.fetch('*[_type=="blog"]')) as Blog[];
    const paths = blogs.map(blog => ({ params: { slug: blog.slug.current } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DataProps> = async context => {
    const slug = context.params!.slug ?? '';
    const blog = (await client.fetch(
        `*[_type == "blog" && slug.current == $slug][0] {
            ...,
            categories[]->,
        }`,
        { slug }
    )) as Blog;
    return {
        props: {
            blog
        }
    };
};
