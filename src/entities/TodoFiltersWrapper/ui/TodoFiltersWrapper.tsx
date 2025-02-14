import { Task } from "../../../features/task/model/useTask";
import { TodoFilter } from "../../TodoFilter/index";
import STodoFiltersWrapper from "./styles/STodoFiltersWrapper.styled";

export const FILTER_MAP = {
    All: () => true,
    Active: (task: Task) => !task.completed,
    Completed: (task: Task) => task.completed
};
export const FILTER_NAMES = Object.keys(FILTER_MAP) as Array<keyof typeof FILTER_MAP>;
export type FilterType = keyof typeof FILTER_MAP

const titles: Record<FilterType, string> = {
    All: "All Tasks",
    Active: "Active Tasks",
    Completed: "Completed Tasks"
};

interface TodoFiltersWrapperInterface {
    activeTab: string;
    count: number;
    activeCount: number;
    completedCount: number;
    setFilter: (filter: keyof typeof FILTER_MAP) => void;
}

const TodoFiltersWrapper = ({ activeTab, count, activeCount, completedCount, setFilter }: TodoFiltersWrapperInterface) => {
    const counts = { All: count, Active: activeCount, Completed: completedCount };

    return (
        <STodoFiltersWrapper>
            {FILTER_NAMES.map((name) => (
                <TodoFilter 
                    key={name}
                    isActive={activeTab === name} 
                    title={titles[name]} 
                    count={counts[name]} 
                    onClick={() => setFilter(name)}
                />
            ))}
        </STodoFiltersWrapper>
    );
};

export default TodoFiltersWrapper;