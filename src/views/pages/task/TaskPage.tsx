import Tasks from "../../../components/tasks/Tasks";
import BoxTittle from "../../../components/utils/BoxTitle";

const TaskPage = () => {
  return (
    <main>
      <BoxTittle title="Tareas" />
      <Tasks />
    </main>
  );
};

export default TaskPage;
