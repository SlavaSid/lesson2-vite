import {Todo} from './Todo'

export const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo) =>{
                return <Todo todo={todo} key={todo.id} />
            })}
        </div>
    )
}

