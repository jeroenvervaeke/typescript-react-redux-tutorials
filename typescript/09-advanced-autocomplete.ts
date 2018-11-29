interface AddMessageAction {
  type: 'addMessage';
  payload: {
    from: string;
    message: string;
  };
}

interface UserJoinedAction {
  type: 'userJoined';
  payload: {
    username: string;
    avatar: string;
  };
}

type ChatActions = AddMessageAction | UserJoinedAction;

function ProcessAction(action: ChatActions): void {
  switch (action.type) {
    case 'addMessage':
      console.log(`${action.payload.from} says: '${action.payload.message}'`);
      break;
    case 'userJoined':
      console.log(`${action.payload.username} joined the room`);
      break;
  }
}
