<template>
  <div class="main-container">
    <div class="main-container__box">
      <slot name="header">
        <h1 class="main-container__box__title">
          <b class="text-color-base">Marvel</b> Universe
        </h1>
      </slot>

      <div class="main-container__content">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 20px);

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    &__title {
      color: white;
      font-size: 5rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    color: white;
  }
}
</style>
