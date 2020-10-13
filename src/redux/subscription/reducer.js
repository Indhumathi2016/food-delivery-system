import actions from './actions';

const initState = {
  plans: [
    {
      id: 1,
      name: 'Monthly Plan',
      description:
        'Spice up your life for a week with the best of our traditional cuisine has to offer. Six days of sensational food that’s both healthy and yummy delivered to you on time. Get ahead of the game with Atchayapatra’s weekly subscription plan. Quality food to enhance your day for the whole week. Our sheer variety will simply amaze you.',
      price: 'Rs. 2599',
    },
    {
      id: 2,
      name: 'Weekly Plan',
      description:
        'Spice up your life for a week with the best of our traditional cuisine has to offer. Six days of sensational food that’s both healthy and yummy delivered to you on time. Get ahead of the game with Atchayapatra’s weekly subscription plan. Quality food to enhance your day for the whole week. Our sheer variety will simply amaze you.',
      price: 'Rs. 599',
    },
  ],
};

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_ADD_MODAL_VISIBLE:
      return {
        ...state,
        isShowAddModal: action.payload,
      };
    case actions.ADD_TODO:
      const updatedTodos = state.todos.concat(action.payload);
      // setItemLocal('todos', updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    case actions.MARK_AS_COMPLETE:
      const updatedTodo = state.todos.map((todo) => {
        if (todo.id === action.todo.id) {
          todo.status = 'completed';
        }
        return todo;
      });
      // setItemLocal('todos', updatedTodo);
      return {
        ...state,
        todos: updatedTodo,
      };
    case actions.DELETE_TODO:
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.id);
      // setItemLocal('todos', filteredTodos);
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
}
