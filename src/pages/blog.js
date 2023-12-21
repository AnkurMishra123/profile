

import { LeftSection } from '../components/Hero/HeroStyles';
import ToggleReadMore from '../components/Projects/paragraph_splitter';
import { BlogCards, CardInfo, ExternalLinks, GridContainers, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../components/Projects/ProjectsStyles';
import { blogs } from '../constants/constants';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider, a, SectionTitle } from '../styles/GlobalComponents';

const Home = () => {

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
                            <CardInfo>
                                <ToggleReadMore text={description} />

                            </CardInfo>
                            {/* 
                            <br />
                            <button>
                                Click here
                            </button> */}
                        </BlogCards>
                        <br />
                    </div>
                ))}
            </GridContainers>
        </Layout>
    );
};

export default Home;
