import { defineStore } from 'pinia'

export const useToDoListStore = defineStore( 'todoList', {
  state: () => ({
    todoList: []
  }),
})
