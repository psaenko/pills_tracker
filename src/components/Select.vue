<template>
  <div class="custom-select-wrapper">
    <span v-if="isOpen" class="overlay"></span>
    <div class="custom-select__title" @click="isOpen =! isOpen">
      <p class="custom-select__title-text">{{ title }}
        <i class="bi bi-chevron-down" :style="[isOpen ? 'transform: rotate(180deg)' : '']"></i></p>
    </div>
    <div class="custom-select__options" v-if="isOpen">
      <div class="custom-select__option" v-for="option in options" @click="change(option)">
        <p class="custom-select__option-text">
          <i v-if="currant === option.id" class="bi bi-check-lg"></i>
          {{ option.title }}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Select',
  data: () => ({
    isOpen: false,
    currant: null,
    title: ''
  }),
  props: {
    options: {
      required: true,
      type: Object,
      default: {id: 1, title: "Значения отстутствуют"}
    },
    currantOption: {
      required: true,
      type: Number,
      default: 0
    }
  },
  methods: {
    change(option) {
      this.currant = option.id
      this.title = option.title
      this.$emit('changeOption', {optionId: option.id})
    }
  },
  created() {
    this.currant = this.currantOption
    this.title = this.options.find(el => el.id = this.currant).title
    console.log(this.currant)
  }
}
</script>

<style scoped lang="scss">
i {
  display: inline-block;
  transition: 0.3s ease;
}

.custom-select-wrapper {
  color: #1f2835;
  width: auto;
  position: relative;

  .custom-select__title {
    width: 100%;

    &:hover {
      cursor: pointer;
    }

    .custom-select__title-text {
      font-size: 42px;
      font-weight: 600;
      user-select: none;

      i {
        font-size: 32px;
        margin-top: 5px;
      }
    }
  }

  .custom-select__options {
    width: auto;
    min-width: 30%;
    position: absolute;
    background: #ffffff;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    margin-top: 20px;

    .custom-select__option {
      width: 100%;
      padding: 10px;

      &:hover {
        background: #edf0f7;
        border-radius: 20px;
        cursor: pointer;

        .custom-select__option-text {
          font-weight: 700;
        }
      }

      .custom-select__option-text {
        font-size: 24px;
        padding: 10px;
        position: relative;

        i {
          font-size: 24px;
          margin-right: 5px;
        }
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .custom-select-wrapper {

    .overlay {
      contain: layout;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      z-index: 999;
    }

    .custom-select__options {
      position: absolute;
    }
  }

}
</style>
