import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";

const Container = styled.div`
  background-color: var(--darker-blue);
  border: 2px solid var(--light-grey);
  border-radius: 0.7rem;
  margin: 0.5rem;
  width: 200px;
`;
const Title = styled.h3`
  color: var(--light-blue);
  margin: 0.5rem 1.5rem;
  padding: 0.5rem;
`;
const TaskList = styled.div`
  color: var(--green);
  margin: 0.5rem 2rem;
  padding: 0.5rem;
`;

function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;
