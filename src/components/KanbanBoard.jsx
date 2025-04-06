import { status } from '../utils/Utils';

function KanbanBoard({ todoList, handleEdit }) {
  return (
    <>
      <h2>Kanban Board</h2>
      <div className='kanban-board'>
        {status.map((sts) => {
          const statusFilteredArray = todoList.filter(
            (to) => to.status === sts.key
          );
          return (
            <div
              key={sts.key}
              className='status'>
              <h3
                style={{
                  position: 'sticky',
                  top: '0',
                  backgroundColor: `${sts.bgcolor}`,
                }}>
                {sts.value}
              </h3>
              <hr />
              {statusFilteredArray.length > 0 ? (
                statusFilteredArray.map((todo) => (
                  <div
                    key={todo.taskNumber}
                    onClick={() => handleEdit(todo)}
                    style={{
                      margin: '24px',
                      padding: '8px',
                      boxShadow: '0 0 2px 2px',
                      cursor: 'pointer',
                    }}>
                    <h4>
                      {todo.taskNumber} : {todo.description}
                    </h4>
                    <hr />
                    <p>
                      Assigned to <b>{todo.assignee}</b>
                    </p>
                    <p>Assigned Date: {todo.assignedDate}</p>
                    <p>ECD: {todo.ecd}</p>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}>
                  <p>No Items</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default KanbanBoard;
