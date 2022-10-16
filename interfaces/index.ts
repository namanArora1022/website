export interface LandingData {
    bgText1: string;
    bgText2: string;
    smallText: string;
    name: string;
    description: string;
    buttonText: string;
    image: string;
}

export interface SkillSetData {
    smallText: string;
    largeText1: string;
    largeText2: string;
    buttonText: string;
    description: string;
}

export interface Skill {
    type: string;
    level: number;
}

export interface Project {
    title: string;
    description: string;
    previewLink?: string;
    githubLink: string;
    image: string;
}

export interface ContactData {
    smallText: string;
    largeText: string;
    description1: string;
    description2: string;
    email: string;
}

export interface FooterData {
    name: string;
    twitterUsername: string;
    githubLink: string;
    instagramLink: string;
    twitterLink: string;
}
