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
  background-color: ${(props) => (props.isDraggingOver ? "var(--medium-blue)" : "var(--darker-blue)")};
  border-radius: inherit;
  box-sizing: border-box;
  color: var(--green);
  height: 100%;
  margin-top: 0.5rem;
  padding: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
`;

function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
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
