import { useState } from "react";
import { Task } from "../../task/model/useTask";
import { FILTER_MAP } from "../../../entities/TodoFiltersWrapper/ui/TodoFiltersWrapper";
import { FilterType } from "../../../entities/TodoFiltersWrapper/ui/TodoFiltersWrapper";

const useFilter = (tasks: Task[]) => {
    const [activeTab, setActiveTab] = useState<FilterType>("All");

    const totalCount = tasks.length
    const completedCount = tasks.filter(task => task.completed).length;
    const activeCount = tasks.length - completedCount;
    const filteredTasks = tasks.filter(FILTER_MAP[activeTab]);

    const setFilter = (filter: FilterType) => {
        setActiveTab(filter);
    };

    return { filteredTasks, activeTab, setFilter, completedCount, activeCount, totalCount };
};

export default useFilter;