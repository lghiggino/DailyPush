import { Observer, useLocalObservable, useObserver } from "mobx-react-lite";

export const SmartTodo = () => {
    const todo = useLocalObservable(() => ({
        title: 'Click to toggle',
        done: false,
        toggle() {
            todo.done = !todo.done
        },
        get emoji() {
            return todo.done ? '😜' : '🏃'
        },
    }))

    return (
        <Observer>
            {
                () => (
                    <h3 onClick={todo.toggle}>
                        {todo.title} {todo.emoji}
                    </h3>
                )
            }

        </Observer>
    )
}