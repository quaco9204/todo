<template>
  <h1>Todo 수정 페이지</h1>
  <TodoForm :editing="true" />
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
export default {
  components :  {
    TodoForm
  }
}
</script>

<style>

</style>