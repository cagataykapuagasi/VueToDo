export const state = () => ({
  tasks: [
    { content: "Buy 8 eggs", done: false },
    { content: "Buy 8 eggs", done: true },
  ],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push({ content: task, done: false });
    // state.tasks = [{ content: task, done: false }, ...state.tasks];
    //state.tasks.unshift({ content: task, done: false })
  },

  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  },
};
