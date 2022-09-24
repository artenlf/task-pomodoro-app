import styled from "styled-components";

function Task(props) {
  const Container = styled.div`
    border: 1px solid var(--light-grey);
    border-radius: 0.7rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  `;

  return <Container>{props.task.content}</Container>;
}

export default Task;
