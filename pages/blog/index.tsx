import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { BlogCard } from '../../components';
import { BlogCardData } from '../../interfaces';
import { client } from '../../lib';

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
                    <BlogCard {...blog} key={blog._id} />
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
