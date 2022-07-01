<template>
  <div class="flex shadow-sm py-3 mt-3 px-3" :class="[task.done ? 'bg-green-300' : 'bg-gray-200']">
    <div class="my-auto text-gray-700 text-sm font-medium w-full line-clamp-3">
      {{ task.content }}
    </div>

    <div class="flex items-center text-sm font-bold ml-10">
      <button @click="toggleDone">
        {{ task.done ? "Undone" : "Done" }}
      </button>
    </div>

    <div class="flex items-center text-red-700 text-sm font-bold ml-10">
      <button @click="removeTask">
        Delete
      </button>
    </div>
  </div>
</template>


<script>
export default {
  props: ['task'],
  methods: {
    toggleDone(task) {
      this.$store.commit('TOGGLE_TASK', this.task);
    },
    removeTask(task) {
      this.$store.commit('REMOVE_TASK', this.task);
    }
  },
  data() {
    return {
      color: this.task.done ? "bg-green-300" : "bg-gray-200",
      doneText: this.task.done ? "Undone" : "Done",
    }
  }
}
</script>