import { createContext, type Dispatch, type ReactNode, useReducer, useEffect } from "react";
import type { Task, TaskAction } from '../types/TaskTypes';

interface TaskState {
  tasks: Task[];
}

const localStorageKey = 'my_tasks';

const initialState: TaskState = {
  tasks: [],
};

const TaskContext = createContext<{
  state: TaskState;
  dispatch: Dispatch<TaskAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'EDIT_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }  // <-- merge updates here
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  
  const localData = localStorage.getItem(localStorageKey);
  const parsedData: TaskState = localData ? JSON.parse(localData) : initialState;

  const [state, dispatch] = useReducer(taskReducer, parsedData);

 
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
