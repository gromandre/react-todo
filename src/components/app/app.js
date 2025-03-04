import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";


const App = () => {
    const todoData = [
        {label: 'Выпить кофе', important: false, id:1},
        {label: 'Создать приложение', important: true, id:2},
        {label: 'Отдохнуть', important: false, id:3}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;