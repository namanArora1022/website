import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Blog } from '../../interfaces';
import { client, urlFor } from '../../lib';
import dayjs from 'dayjs';
import { PortableText } from '@portabletext/react';

const BlogDetails = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { blog } = props;
    const { title, image, categories, _createdAt, content } = blog;

    return (
        <>
            <Head>
                <title>{blog.title} | Naman Arora</title>
            </Head>

            <div className="px-10 lg:px-44 my-20 flex flex-col justify-start items-start">
                <Image
                    src={urlFor(image).url()}
                    height={500}
                    width={1000}
                    className="object-cover"
                    alt={blog.title}
                />
                <h1 className="text-4xl font-semibold mt-10 mb-5 pb-2 border-b-teal-500 border-b-4 inline-block">
                    {title}
                </h1>
                <p>
                    Pushlished on{' '}
                    <span className="font-semibold">
                        {dayjs(_createdAt).format('DD MMM YYYY')}
                    </span>
                </p>
                <div className="flex flex-wrap mt-5 mb-3 items-center">
                    {categories.map(category => (
                        <span
                            key={category._id}
                            className="px-4 py-1 bg-teal-500 text-white rounded-full mr-4"
                        >
                            {category.name}
                        </span>
                    ))}
                </div>
                <div className="mt-5 content">
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
                </div>
            </div>
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
