exports.getFindArg = (filterValue) => {
  if (filterValue === 'completed') {
    return { completed: true };
  }
  if (filterValue === 'active') {
    return { completed: false };
  }
  return {};
};