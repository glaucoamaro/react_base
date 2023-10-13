const logger = (store) => (next) => (action) => {
  if (action.type === 'buttonClicked/clicked') {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  }
  return next();
};

export default logger;
