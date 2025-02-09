import { useState, useEffect } from "react";
import { Task } from "../../task/model/useTask";
import { Tabs } from "../../../entities/TodoTabsWrapper/ui/TodoTabsWrapper";

const useTab = (tasks: Task[]) => {
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
    const [activeTab, setActiveTab] = useState<string>("all")

    const completedCount = tasks.filter(task => task.completed).length;
    const activeCount = tasks.length - completedCount;

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    const allTasks = () => {
        setFilteredTasks(tasks);
        setActiveTab(Tabs.All);
    }
    
    const activeTasks = () => {
        const activeTasks = tasks.filter(task => !task.completed);
        setFilteredTasks(activeTasks);
        setActiveTab(Tabs.Active);
    }

    const completedTasks = () => {
        const completedTasks = tasks.filter(task => task.completed);
        setFilteredTasks(completedTasks);
        setActiveTab(Tabs.Completed);
    }

    return { allTasks, activeTasks, completedTasks, activeTab, completedCount, activeCount, filteredTasks};
}

export default useTab;