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
  payment: {},
};

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_PAYMENT_DETAILS:
      return {
        ...state,
        payment: action.payload,
      };

    default:
      return state;
  }
}
