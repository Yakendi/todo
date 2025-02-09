import { TodoForm } from "../../../entities/TodoForm";
import { TodoTabsWrapper } from "../../../entities/TodoTabsWrapper";
import { TodoTasksWrapper } from "../../../entities/TodoTasksWrapper";
import STodosWidget from "./styles/STodosWidget.styled"
import FormSubmitController from "../../../features/submit/SubmitController";
import TabController from "../../../features/tab/TabController";
import TaskController from "../../../features/task/TaskController";
import CheckboxController from "../../../features/checkbox/CheckboxController";
import DeleteController from "../../../features/delete/DeleteController";
import EditController from "../../../features/edit/EditController";

const TodosWidget = () => {
    const {tasks, setTasks} = TaskController()
    const {value, isDisabled, handleOnChange, handleSubmit} = FormSubmitController({tasks, setTasks});
    const {allTasks, activeTasks, completedTasks, activeTab, completedCount, activeCount, filteredTasks} = TabController(tasks);
    const {handleCompleted} = CheckboxController({tasks, setTasks})
    const {handleDelete} = DeleteController({tasks, setTasks})
    const {handleEdit} = EditController({tasks, setTasks})

    return (
        <STodosWidget>
            <h1>Get Things Done!</h1>
            <TodoForm isDisabled={isDisabled} onSubmit={handleSubmit} value={value} onChange={handleOnChange}/>
            <TodoTabsWrapper activeTab={activeTab} count={tasks.length} activeCount={activeCount} completedCount={completedCount} allTasks={allTasks} activeTasks={activeTasks} completedTasks={completedTasks}/>
            <TodoTasksWrapper tasks={filteredTasks} onChange={handleCompleted} deleteTask={handleDelete} editTask={handleEdit}/>
        </STodosWidget>
    )
}

export default TodosWidget;