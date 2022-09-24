import React from "react";
import ReactDOM from "react-dom";
import "./styles/globalStyles.css";
import Column from "./components/Column/Column.jsx";
import initialData from "./initial-data/initial-data.js";

const App = () => {
  return initialData.columnOrder.map((columnId) => {
    const column = initialData.columns[columnId];
    const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

ReactDOM.render(<App />, document.getElementById("root"));
