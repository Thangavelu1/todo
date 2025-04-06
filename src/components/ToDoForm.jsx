import { status } from '../utils/Utils';

function ToDoForm({
  todo,
  update,
  handleChange,
  handleAdd,
  handleUpdate,
  handleClear,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid lightgreen',
        borderRadius: '4px',
        margin: '12px',
        padding: '8px',
      }}>
      <h2>Add Task</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '4px',
          }}>
          <label style={{ fontSize: 'small' }}>Task ID</label>
          <input
            type='text'
            style={{ padding: '8px' }}
            value={todo.taskNumber}
            onChange={(event) => handleChange('taskNumber', event.target.value)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '4px',
          }}>
          <label style={{ fontSize: 'small' }}>Description</label>
          <input
            type='text'
            style={{ padding: '8px' }}
            value={todo.description}
            onChange={(event) =>
              handleChange('description', event.target.value)
            }
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '4px',
          }}>
          <label style={{ fontSize: 'small' }}>Status</label>
          <select
            style={{ padding: '8px' }}
            value={todo.status}
            onChange={(event) => handleChange('status', event.target.value)}>
            <option value={'none'}>Select the Status</option>
            {status.map((sts) => (
              <option
                key={sts.key}
                value={sts.key}>
                {sts.value}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '4px',
          }}>
          <label style={{ fontSize: 'small' }}>Assignee</label>
          <input
            type='text'
            style={{ padding: '8px' }}
            value={todo.assignee}
            onChange={(event) => handleChange('assignee', event.target.value)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '4px',
            }}>
            <label style={{ fontSize: 'small' }}>Assigned Date</label>
            <input
              type='date'
              style={{ padding: '8px' }}
              value={todo.assignedDate}
              onChange={(event) =>
                handleChange('assignedDate', event.target.value)
              }
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '4px',
            }}>
            <label style={{ fontSize: 'small' }}>ECD</label>
            <input
              type='date'
              style={{ padding: '8px' }}
              value={todo.ecd}
              onChange={(event) => handleChange('ecd', event.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <button
            className={'btn btn-primary'}
            onClick={handleAdd}>
            Add
          </button>
          <button
            className={
              update ? 'btn btn-secondary btn-disabled' : 'btn btn-secondary'
            }
            disabled={update}
            onClick={handleUpdate}>
            Update
          </button>
          <button
            className={
              todo.taskNumber === ''
                ? 'btn btn-danger btn-disabled'
                : 'btn btn-danger'
            }
            disabled={todo.taskNumber === ''}
            onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoForm;
