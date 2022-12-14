import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Contact, Footer, Landing, Projects, SkillSet } from '@components';
import {
    ContactData,
    FooterData,
    LandingData,
    Project,
    Skill,
    SkillSetData
} from '@interfaces';
import { client } from '@lib';

const Index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {
        landingData,
        skillSetData,
        skills,
        projects,
        contactData,
        footerData
    } = props;

    return (
        <div className="px-10 lg:px-44">
            <Head>
                <title>Naman Arora</title>
            </Head>
            <Landing {...landingData} />
            <SkillSet {...skillSetData} skills={skills} />
            <Projects projects={projects} />
            <Contact {...contactData} />
            <Footer {...footerData} />
        </div>
    );
};

interface DataProps {
    landingData: LandingData;
    skillSetData: SkillSetData;
    skills: Skill[];
    projects: Project[];
    contactData: ContactData;
    footerData: FooterData;
}

export const getStaticProps: GetStaticProps<DataProps> = async () => {
    const landingData = (
        await client.fetch("*[_type =='landing']")
    )[0] as LandingData;

    const skillSetData = (
        await client.fetch("*[_type == 'skillSet']")
    )[0] as SkillSetData;

    const skills: Skill[] = await client.fetch(
        "*[_type == 'skills'] | order(_createdAt)"
    );

    const projects: Project[] = await client.fetch("*[_type == 'projects']");

    const contactData = (
        await client.fetch("*[_type == 'contact']")
    )[0] as ContactData;

    const footerData = (
        await client.fetch("*[_type == 'footer']")
    )[0] as FooterData;

    return {
        props: {
            landingData,
            skillSetData,
            skills,
            projects,
            contactData,
            footerData
        }
    };
};

export default Index;
