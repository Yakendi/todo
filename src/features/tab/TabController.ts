import { Task } from "../task/model/useTask";
import useTab from "./model/useTab"

const TabController = (tasks: Task[]) => {
    const { allTasks, activeTasks, completedTasks, activeTab, completedCount, activeCount, filteredTasks } = useTab(tasks)

    return { allTasks, activeTasks, completedTasks, activeTab, completedCount, activeCount, filteredTasks }
}

export default TabController;