export const Todo = ({todo}) => {
    return (
        <div className="todo">
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
        </div>
    )
}

