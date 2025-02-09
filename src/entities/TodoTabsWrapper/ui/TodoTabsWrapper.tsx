import TodoTab from "../../TodoTab/ui/TodoTab";
import STodoTabsWrapper from "./styles/STodoTabsWrapper.styled"

export enum Tabs {
    All = "all",
    Active = "active",
    Completed = "completed"
}

interface Titles {
    all: string;
    active: string;
    completed: string;
}

const titles: Titles = {
      all: "All Tasks",
      active: "Active Tasks",
      completed: "Completed Tasks"
}

interface TodoTabsWrapperInterface {
    activeTab: string;
    count: number;
    activeCount: number;
    completedCount: number;
    allTasks: () => void;
    activeTasks: () => void;
    completedTasks: () => void;
}

const TodoTabsWrapper = ({activeTab, count, activeCount, completedCount, allTasks, activeTasks, completedTasks}: TodoTabsWrapperInterface) => {
    return (
        <STodoTabsWrapper>
            <TodoTab isActive={activeTab === Tabs.All} title={titles.all} count={count} onClick={allTasks} />
            <TodoTab isActive={activeTab === Tabs.Active} title={titles.active} count={activeCount} onClick={activeTasks} />
            <TodoTab isActive={activeTab === Tabs.Completed} title={titles.completed} count={completedCount} onClick={completedTasks} />
        </STodoTabsWrapper>
    )
}

export default TodoTabsWrapper;