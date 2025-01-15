import styled from "@emotion/styled";
import CardComponent from "../../../Components/Card";
import TextComponent from "../../../Components/Text";

const ComingSoon = (props : {title : string, description: string}) => {

    const feature = {
        title: props.title,
        description: props.description
    }
    return (
        <PageWrapper>
        {/* Header Section */}
        <Header>
            <TextComponent
            label="Exciting Things Are Coming Soon!"
            size="xl"
            />
            <TextComponent
            label="We're working hard to bring you the next big thing. Stay tuned!"
            size="l"
            />
        </Header>

        {/* Content Section */}
        <Content>
            <TextComponent
            label="What’s on the Horizon?"
            size="l"
            />
            <FeaturesWrapper>
                <FeatureCard>
                    <TextComponent
                        label={feature.title}
                        size="m"
                    />
                    <TextComponent
                        label={feature.description}
                        size="s"
                    />
                </FeatureCard>
            </FeaturesWrapper>
        </Content>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  padding: 2em 1em;
`;

const Content = styled.main`
  padding: 2em 1em;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin-top: 2em;
`;

const FeatureCard = styled(CardComponent)`
`;


export default ComingSoon;
