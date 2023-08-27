<script setup lang="ts">
import marvelLogo from "../../assets/images/svg/marvel.svg";
const showMenu = ref(false);

const toggleMenu = (): void => {
  showMenu.value = !showMenu.value;
};

const closeMenu = (): void => {
  showMenu.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <router-link to="/">
          <img :src="marvelLogo" />
        </router-link>
      </div>

      <div class="header__menu">
        <button @click="toggleMenu">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png" />
        </button>

        <div class="header__menu--show" v-show="showMenu" @click="closeMenu">
          <router-link to="/">Inicio</router-link>
          <router-link to="/history">Historial</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #000;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  &__logo {
    img {
      height: 50px;
    }
  }

  &__menu {
    button {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: none;
      background-color: #000;
      outline: none;
      cursor: pointer;
      img {
        height: 20px;
      }
    }
  }

  &__menu--show {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    a {
      color: #fff;
      font-size: 20px;
      margin-bottom: 20px;
      text-decoration: none;
      &:hover {
        color: #f59e0b;
      }
    }
  }

  @media (max-width: 768px) {
    &__container {
      padding: 0 10px;
    }
  }
}
</style>
