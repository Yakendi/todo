import { TodoForm } from "../../../entities/TodoForm";
import { TodoFiltersWrapper } from "../../../entities/TodoFiltersWrapper/index";
import { TodoTasksWrapper } from "../../../entities/TodoTasksWrapper";
import STodosWidget from "./styles/STodosWidget.styled"
import FormSubmitController from "../../../features/submit/SubmitController";
import FilterController from "../../../features/filter/FilterController";
import TaskController from "../../../features/task/TaskController";
import CheckboxController from "../../../features/checkbox/CheckboxController";
import DeleteController from "../../../features/delete/DeleteController";
import edit from "../../../features/edit/model/editTask"

const TodosWidget = () => {
    const { tasks, setTasks } = TaskController();
    const { value, isDisabled, handleOnChange, handleSubmit } = FormSubmitController({ tasks, setTasks });
    const { filteredTasks, activeTab, setFilter, completedCount, activeCount, totalCount } = FilterController(tasks);
    const { handleCompleted } = CheckboxController({ tasks, setTasks });
    const { handleDelete } = DeleteController({ tasks, setTasks });
    const { handleEdit, handleOnChangeEditingTask, handleSubmit: handleEditSubmit, handleCancel, value: newValue } = edit({ tasks, setTasks });

    return (
        <STodosWidget>
            <h1>Get Things Done!</h1>
            <TodoForm isDisabled={isDisabled} onSubmit={handleSubmit} value={value} onChange={handleOnChange} />
            <TodoFiltersWrapper 
                activeTab={activeTab} 
                count={totalCount} 
                activeCount={activeCount} 
                completedCount={completedCount}
                setFilter={setFilter}
            />
            <TodoTasksWrapper 
                tasks={filteredTasks} 
                onChange={handleCompleted} 
                deleteTask={handleDelete} 
                editTask={handleEdit} 
                onChangeEditingTask={handleOnChangeEditingTask} 
                onSubmit={handleEditSubmit} 
                handleCancel={handleCancel} 
                value={newValue}
            />
        </STodosWidget>
    );
};

export default TodosWidget;