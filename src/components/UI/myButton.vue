<template>
  <button class="my-btn"><slot /></button>
</template>

<script>
export default {
  name: "myButton",
};
</script>

<style lang="scss">
.my-btn {
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  background-color: #cd5c5c;
  border: none;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background-color: #d68686;
    transition: 500ms;
  }
}
</style>