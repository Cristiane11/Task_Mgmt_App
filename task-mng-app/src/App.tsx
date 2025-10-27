import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationGuard from './auto/AuthenticationGuard';
import TaskList from './pages/TaskList';
import { TaskProvider } from './context/TaskContext';
import CallbackPage from './auto/CallbackPage';
import TaskDetail from './models/TaskDetails';
import CompletedTasks from './components/CompletedTasks';

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <TaskProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/tasklist'
          element={<AuthenticationGuard component={TaskList} />}
        />
        <Route
          path='/completed'
          element={<AuthenticationGuard component={CompletedTasks} />}
        />
        <Route
          path='/taskdetail/:id'
          element={<AuthenticationGuard component={TaskDetail} />}
        />
        <Route path='/callback' element={<CallbackPage />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;
