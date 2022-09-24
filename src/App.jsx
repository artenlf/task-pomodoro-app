import { DragDropContext } from "react-beautiful-dnd";
import Column from "./components/Column/Column.jsx";
import initialData from "./initial-data/initial-data.js";

const App = () => {
  const onDragEnd = (result) => {
    // state
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
