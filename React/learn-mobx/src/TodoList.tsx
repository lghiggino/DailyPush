import { observer } from 'mobx-react-lite'

export const TodoList = observer(({ store }: any) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    }

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map(
                    (todo: any, idx: any) => <TodoView todo={todo} key={idx} />
                )}
            </ul>
            {store.pendingRequests > 0 ? <p>Loading...</p> : null}
            <button onClick={onNewTodo}>New Todo</button>
            <small> (double-click a todo to edit)</small>
            <RenderCounter />
        </div>
    );
})

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
