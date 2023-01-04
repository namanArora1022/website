export interface BaseData {
    _id: string;
    _type: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
}

export interface ImageType {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}

export interface LandingData {
    bgText1: string;
    bgText2: string;
    smallText: string;
    name: string;
    description: string;
    buttonText: string;
    image: ImageType;
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
    tags: string[];
    image: ImageType;
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

export interface Category extends BaseData {
    name: string;
}

export interface BlogCardData {
    _id: string;
    title: string;
    image: ImageType;
    excerpt: string;
    slug: {
        _type: string;
        current: string;
    };
    categories: Category[];
}

export interface Blog extends BaseData {
    title: string;
    slug: {
        _type: string;
        current: string;
    };
    excerpt: string;
    image: ImageType;
    content: any;
    categories: Category[];
}
