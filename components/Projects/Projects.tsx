import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Project } from '../../interfaces';

interface Props {
    projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
    return (
        <div
            className="flex flex-col justify-center items-center"
            id="projects"
        >
            <motion.h2
                className="font-bold text-3xl mb-10"
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>

            <div className="flex flex-col justify-center items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.githubLink}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
