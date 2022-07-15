import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'

const TodoList = ({ observableTodoStore }: any) => {
    const onNewTodo = () => {
        observableTodoStore.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    }

    return (
        <div>
            {observableTodoStore.report}
            <ul>
                {observableTodoStore.todos.map(
                    (todo: any, idx: any) => <TodoView todo={todo} key={idx} />
                )}
            </ul>
            {observableTodoStore.pendingRequests > 0 ? <p>Loading...</p> : null}
            <button onClick={onNewTodo}>New Todo</button>
            <small> (double-click a todo to edit)</small>
            {/* <RenderCounter /> */}
        </div>
    );
}

const TodoView = observer(({ todo }: any) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    }

    return (
        <li onDoubleClick={onRename}>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            {todo.task}
            {todo.assignee
                ? <small>{todo.assignee.name}</small>
                : null
            }
            {/* <RenderCounter /> */}
        </li>
    );
})

export default inject('observableTodoStore')(observer(TodoList));
