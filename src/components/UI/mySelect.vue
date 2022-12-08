<template>
  <div class="my-select">
    <p @click="areOptionsVisible = !areOptionsVisible" class="my-select-title">
      {{ selected }}
    </p>
    <div v-if="areOptionsVisible" class="my-select-options-list">
      <p
        v-for="option in optionsList"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySelect",
  props: {
    optionsList: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: { type: Object, default() {} },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideOptionsList() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideOptionsList, true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideOptionsList);
  },
};
</script>

<style lang="scss">
.my-select {
  margin: 20px 0;
  transition: 300ms;
  position: relative;
  width: 200px;
  cursor: default;
  & p {
    margin: 0;
  }
  &-title {
    border: 1px solid grey;
    width: 100%;
    margin: 0px;
  }
  &-options-list {
    background-color: white;
    border: 1px solid grey;
    position: absolute;
    top: 20px;
    width: 100%;
    & :hover {
      background-color: rgb(202, 202, 202);
    }
  }
}
</style>