import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
    const items = ['first1', 'second2'];

    return (
        <ul>
            <li><TodoListItem label='Выпить кофе'/></li>
            <li><TodoListItem label='Создать приложение' important/></li> {/* important={true} */}
            <li><TodoListItem label='Отдохнуть'/></li>
        </ul>
    );
}

export default TodoList;