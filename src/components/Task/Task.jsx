import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  const Container = styled.div`
    background-color: ${(props) => (props.isDragging ? "var(--medium-light-blue)" : "var(--dark-blue)")};
    border: 1px solid var(--light-grey);
    border-radius: 0.7rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  `;

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
