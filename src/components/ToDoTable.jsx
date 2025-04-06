import { getStatus } from '../utils/Utils';

function ToDoTable({ todoList, handleEdit, handleDelete }) {
  return (
    <div className='todo-table'>
      <h2>To Do List</h2>
      <div
        style={{
          paddingBottom: '16px',
          display: 'flex',
          justifyContent: 'center',
          maxHeight: '350px',
          minHeight: todoList.length === 0 ? '350px' : '',
          overflowY: 'auto',
        }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Description</th>
              <th>Status</th>
              <th>Assigned Date</th>
              <th>Estimated Completion Date</th>
              <th>Assignee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList.length === 0 && (
              <tr style={{ textAlign: 'center' }}>
                <td colSpan={7}>No Data Available</td>
              </tr>
            )}
            {todoList.length !== 0 &&
              todoList.map((todo) => (
                <tr
                  key={todo.taskNumber}
                  style={{ textAlign: 'center' }}>
                  <td>{todo.taskNumber}</td>
                  <td align='left'>{todo.description}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    {getStatus(todo.status)}
                  </td>
                  <td>{todo.assignedDate}</td>
                  <td>{todo.ecd}</td>
                  <td>{todo.assignee}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <button
                      style={{ margin: '2px' }}
                      className='btn btn-secondary'
                      onClick={() => handleEdit(todo)}>
                      Edit
                    </button>
                    <button
                      style={{ margin: '2px' }}
                      className='btn btn-danger'
                      onClick={() => handleDelete(todo.taskNumber)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoTable;
