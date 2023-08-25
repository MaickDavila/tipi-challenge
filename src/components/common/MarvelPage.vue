<template>
  <div class="main-container">
    <div class="main-box">
      <slot name="title">
        <div class="main-title">
          <h1>Title</h1>
        </div>
      </slot>

      <div class="main-content">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-title {
  text-align: center;

  h1 {
    color: white;
    font-size: 5rem;
  }
}

.main-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.main-content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: calc(100vh - 300px);
  overflow-y: auto;
  padding: 20px;
  color: white;
}
</style>
