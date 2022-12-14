import React from 'react';
import { Project } from '@interfaces';
import { Button } from '@components';
import { motion } from 'framer-motion';
import { urlFor } from '@lib';
import Image from 'next/image';

interface Props extends Project {
    index: number;
}

const ProjectCard: React.FC<Props> = props => {
    const { title, description, githubLink, image, previewLink, index, tags } =
        props;

    return (
        <motion.div
            className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } my-10`}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="mb-10 lg:w-1/2">
                <h3 className="text-2xl font-semibold my-3 border-b-2 pb-2 border-b-teal-500 inline-block mb-5">
                    {title}
                </h3>
                <p>{description}</p>
                <div className="mt-4 flex flex-wrap">
                    {tags &&
                        tags.map((tag, index) => (
                            <span
                                className="mb-3 md:mb-5 mr-2 md:mr-4 py-2 px-4 bg-teal-500 text-white rounded-full cursor-pointer text-sm md:text-base"
                                key={`tag-${tag}-${index}`}
                            >
                                {tag}
                            </span>
                        ))}
                </div>
                <div className="flex mt-3">
                    {previewLink && (
                        <a
                            className="mr-10"
                            href={previewLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button>Preview</Button>
                        </a>
                    )}
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <Button>View Code</Button>
                    </a>
                </div>
            </div>
            <div
                className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:ml-10' : 'lg:mr-10'
                }`}
            >
                <Image
                    src={urlFor(image).url()}
                    height={300}
                    width={600}
                    alt={title}
                    className="shadow-lg rounded-lg"
                />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
