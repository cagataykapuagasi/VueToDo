<template>
  <div class="flex w-full h-full justify-center">
    <div class="lg:w-1/2 w-full px-10">
      <label class="block text-gray-700 text-sm font-bold mt-3">
        To-Do List
      </label>
      <label class="block text-gray-700 text-sm font-bold mb-1 mt-10" for="username">
        Task
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="text" type="text" @keypress.enter="addTask">

      <div class="flex justify-end">
        <button @click="addTask"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5">
          Add task
        </button>
      </div>

      <to-do v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addTask() {
      if (this.text) {
        this.$store.commit('ADD_TASK', this.text);
        this.text = '';
      }
    }
  }
};
</script>
