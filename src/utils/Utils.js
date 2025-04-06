export function getStatus(sts) {
  switch (sts) {
    case 'todo':
      return 'To Do';
    case 'inprogress':
      return 'In Progress';
    case 'onhold':
      return 'On Hold';
    case 'done':
      return 'Done';
    default:
      break;
  }
}

export const status = [
  {
    key: 'todo',
    value: 'To Do',
    bgcolor: 'red'
  },
  {
    key: 'inprogress',
    value: 'In Progress',
    bgcolor: 'orange'
  },
  {
    key: 'onhold',
    value: 'On Hold',
    bgcolor: 'blue'
  },
  {
    key: 'done',
    value: 'Done',
    bgcolor: 'green'
  },
]