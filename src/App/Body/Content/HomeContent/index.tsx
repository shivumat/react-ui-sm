// Customizable Component Library Landing Page
import newStyled from "@emotion/styled";
import React from "react";
import TextComponent from "../../../../Components/Text";
import { taskData } from "./config";
import TaskCard from "./TaskCard";


const Section = newStyled.section`
  padding: 2em 1em;
  max-width: 1200px;
  margin: 0 auto;
`;

const Tasks = newStyled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-around;
`;

const HomePage: React.FC = () => {
  return (
      <Section>
        <TextComponent
          label="Centralized Styling and Components for SaaS Platforms"
          size="xxl"
          tag="h2"
        />
        <TextComponent
          label="This project bridges the gap between designers and developers in SaaS platform creation by providing a comprehensive library of basic components with consistent styling and interaction decisions. Designers benefit from a streamlined design process with pre-built components that ensure uniformity across the platform. Developers gain centralized styling management via context-based configurations, reducing the need to pass repetitive props and enabling rapid implementation of desired designs with minimal effort. This approach fosters collaboration, speeds up development, and ensures a cohesive user experience."
          size="m"
          tag="h4"
        />
        <Tasks>
          {taskData.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              description={task.description}
              subtasks={task.subtasks}
            />
          ))}
        </Tasks>
      </Section>
  );
};

export default HomePage;
