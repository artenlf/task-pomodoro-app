import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./components/Column/Column.jsx";
import initialData from "./initial-data/initial-data.js";

const App = () => {
  const [taskList, setTaskList] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = taskList.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const updatedList = {
      ...taskList,
      columns: {
        ...taskList.columns,
        [newColumn.id]: newColumn,
      },
    };

    setTaskList(updatedList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {taskList.columnOrder.map((columnId) => {
        const column = taskList.columns[columnId];
        const tasks = column.taskIds.map((taskId) => taskList.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
