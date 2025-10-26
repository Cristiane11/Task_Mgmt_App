export interface Task {
  id: string;
  title: string;
  description?: string;
  status: boolean;
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'EDIT_TASK'; payload: { id: string; updates: Partial<Omit<Task, 'id'>> } }
  | { type: 'DELETE_TASK'; payload: string };