import newStyled from "@emotion/styled";
import CardComponent from "../../../../Components/Card";
import TextComponent from "../../../../Components/Text";

interface TaskCardProps {
  title: string;
  description: string;
  subtasks: string[];
}


const TaskCardWrapper = newStyled(CardComponent)`
    width: 500px;
`;

const SubtaskList = newStyled.ul`
  list-style: none;
  padding: 0;
  margin: 1em 0 0;
`;

const SubtaskItem = newStyled.li`
  margin-bottom: 0.5em;
`;


const TaskCard: React.FC<TaskCardProps> = ({ title, description, subtasks }) => (
    <TaskCardWrapper>
      <TextComponent
        label={title}
        size="m"
        fontSize="1.2em"
        tag="h3"
      />
      <TextComponent
        label={description}
        size="s"
        fontSize="1em"
        tag="p"
      />
      <SubtaskList>
        {subtasks.map((subtask, index) => (
          <SubtaskItem key={index}>
            <TextComponent
              label={`• ${subtask}`}
              size="s"
              fontSize="0.9em"
              tag="span"
            />
          </SubtaskItem>
        ))}
      </SubtaskList>
    </TaskCardWrapper>
  );
  

export default TaskCard