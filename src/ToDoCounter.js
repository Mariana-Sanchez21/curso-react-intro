import './ToDoCounter.css'

function ToDoCounter({total,completed}){
    return(
  
      <h1>
        Haz completado {completed} de {total} TODO's
        </h1>
    )
  }

  export {ToDoCounter};

