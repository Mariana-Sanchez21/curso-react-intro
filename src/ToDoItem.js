import './ToDoItem.css'

function ToDoItem({text,completed,OnComplete,OnDelete}){
    return(
  
      <li className="ToDoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}` } onClick={OnComplete}>V</span>
        <p className={`ToDoItem-p ${completed && 'ToDoItem-p--completed'}`}>{text}</p>
        <span className='Icon Icon--delete' onClick={OnDelete}>X</span>
      </li>
    )
  }
  export {ToDoItem};