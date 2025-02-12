import { useState } from "react";
import { UseTaskProps } from "../../task/model/useTask";

const useEditTask = ({ tasks, setTasks }: UseTaskProps) => {
    const [value, setValue] = useState<string>("");
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

    // Включаем режим редактирования только для одной задачи
    const handleEdit = (id: string) => {
        const taskToEdit = tasks.find(task => task.id === id);
        if (!taskToEdit) return;

        setValue(taskToEdit.title); // Загружаем текущий title
        setEditingTaskId(id); // Сохраняем ID редактируемой задачи

        const updatedTasks = tasks.map(task => ({
            ...task,
            isEditing: task.id === id, // Только одна таска может быть в режиме редактирования
        }));

        setTasks(updatedTasks);
    };

    // Обновляем value при изменении текста в input
    const handleOnChangeEditingTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    // Сохраняем изменения при сабмите
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!editingTaskId) return;

        const updatedTasks = tasks.map(task =>
            task.id === editingTaskId ? { ...task, title: value, isEditing: false } : task
        );

        setTasks(updatedTasks);
        setEditingTaskId(null); // Сбрасываем ID редактируемой задачи
    };

    // Отмена редактирования
    const handleCancel = () => {
        setEditingTaskId(null);
        setTasks(tasks.map(task => ({ ...task, isEditing: false })));
    };

    return { handleEdit, handleOnChangeEditingTask, handleSubmit, handleCancel, value };
};

export default useEditTask;