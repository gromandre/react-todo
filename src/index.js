import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoList from './components/todo-list';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {
    const todoData = [
        {label: 'Выпить кофе', important: false},
        {label: 'Создать приложение', important: true},
        {label: 'Отдохнуть', important: false}
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('.todoapp'));
root.render(<App />)