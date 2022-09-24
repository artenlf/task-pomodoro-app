import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  const Container = styled.div`
    border: 1px solid var(--light-grey);
    border-radius: 0.7rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  `;

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
