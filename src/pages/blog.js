
import { useState } from 'react';
import { Div1 } from '../components/Header/HeaderStyles';
import { LeftSection } from '../components/Hero/HeroStyles';
import { BlogCards, CardInfo, ExternalLinks, GridContainers, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../components/Projects/ProjectsStyles';
import { blogs } from '../constants/constants';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';


const paragraph_style = {
    webkitLineClamp: 3,
    webkitBoxOrient: 'vectical',
    overflow: 'hidden',
    display: '-webkit-box',
}

const Home = () => {

    const [isOpen, setIsOpen]=useState(false)
    return (
        <Layout>
            <Section row nopadding>
                <LeftSection>
                    <SectionTitle main center>
                        Welcome To My Space
                    </SectionTitle>
                    {/* <SectionText>
                        My name is Ankur, and I'm a Web Developer, coder, UI designer, and Inventor.
                    </SectionText> */}
                </LeftSection>
            </Section>
{/* blogs cards */}
            <Section>
                <SectionDivider />
                <SectionTitle main>Blogs</SectionTitle>
            </Section>
            <GridContainers>
                {blogs.map(({ id, image, title, description }) => (
                    <div key={id}>
                        <BlogCards>
                            <Img src={image} />
                            <TitleContent>
                                <HeaderThree title>{title}</HeaderThree>
                                <Hr />
                            </TitleContent>
                            <CardInfo>{description}</CardInfo>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? 'read less...' : 'read more...'}
                            </button>
                        </BlogCards>
                        <br />
                    </div>
                ))}
            </GridContainers>
        </Layout>
    );
};

export default Home;
