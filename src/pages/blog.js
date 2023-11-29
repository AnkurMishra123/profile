
import { Div1 } from '../components/Header/HeaderStyles';
import { LeftSection } from '../components/Hero/HeroStyles';
import { BlogCards, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../components/Projects/ProjectsStyles';
import { blogs } from '../constants/constants';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';


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
            <Section nopadding id="projects">
                <SectionDivider />
                <SectionTitle main>Projects</SectionTitle>
                <Div1>
                    {blogs.map(({ id, image, title, description}) => (
                        <BlogCards key={id}>
                            <Img src={image} />
                            <TitleContent>
                                <HeaderThree title>{title}</HeaderThree>
                                <Hr />
                            </TitleContent>
                            <CardInfo>{description}</CardInfo>
                            <br />                           
                        </BlogCards>
                    ))}
                </Div1>
            </Section>


        </Layout>
    );
};

export default Home;
