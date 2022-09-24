import React from "react";
import styled from "styled-components";
import Task from "../Task/Task";

const Container = styled.div`
  background-color: var(--dark-blue);
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
      <TaskList>
        {props.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
}

export default Column;
