import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components';
import { BlogCardData } from '../../interfaces';
import { client, urlFor } from '../../lib';

const Blogs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { blogs } = props;

    return (
        <div className="px-10 lg:px-44 my-20">
            <Head>
                <title>Blogs | Naman Arora</title>
            </Head>
            <h2 className="text-3xl font-semibold mb-10 border-b-4 border-b-teal-500 inline-block pb-2">
                All Blogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {blogs.map(blog => (
                    <div
                        key={blog._id}
                        className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition duration-200 my-10 md:m-10"
                    >
                        <Image
                            src={urlFor(blog.image).url()}
                            height={200}
                            width={400}
                            className="object-cover rounded-lg"
                            alt={blog.title}
                        />
                        <h3 className="text-xl font-semibold my-4">
                            {blog.title}
                        </h3>
                        <p>{blog.excerpt}</p>
                        <div className="flex flex-wrap mt-5 items-center">
                            {blog.categories.map(category => (
                                <span
                                    key={category._id}
                                    className="px-4 py-1 bg-teal-500 text-white rounded-full mr-4"
                                >
                                    {category.name}
                                </span>
                            ))}
                        </div>
                        <Link href={`/blog/${blog.slug.current}`} passHref>
                            <a>
                                <Button className="text-sm mt-4">
                                    read more
                                </Button>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
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
