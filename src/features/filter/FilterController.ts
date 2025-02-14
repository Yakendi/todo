import { Task } from "../task/model/useTask";
import useFilter from "./model/useFilter"

const FilterController = (tasks: Task[]) => {
    const { filteredTasks, activeTab, setFilter, completedCount, activeCount, totalCount } = useFilter(tasks)

    return { filteredTasks, activeTab, setFilter, completedCount, activeCount, totalCount }
}

export default FilterController;