<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";

const activeTheme = ref("theme-green");
const showThemes = ref(false); 

const setActiveTheme = (themeId, color) => {
  document.documentElement.style.setProperty("--text-color", color);
  activeTheme.value = themeId;
  localStorage.setItem("themeColor", color);
  localStorage.setItem("themeId", themeId);
};

onMounted(() => {
  const savedColor = localStorage.getItem("themeColor");
  const savedThemeId = localStorage.getItem("themeId");

  if (savedColor && savedThemeId) {
    document.documentElement.style.setProperty("--text-color", savedColor);
    activeTheme.value = savedThemeId;
  }
});
</script>

<template>
  <div class="container-fluid p-4">
    <header class="mb-4 text-center">
      <h1 class="display-3">Szakkörök Projekt</h1>
    </header>

    <div class="theme-toggle" @click="showThemes = !showThemes">
      <i class="bi bi-gear"></i> 
    </div>

    <div v-show="showThemes" class="theme-options">
      <div
        id="theme-green"
        :class="{ active: activeTheme === 'theme-green' }"
        @click="setActiveTheme('theme-green', '#37b18c')"
      ></div>
      <div
        id="theme-blue"
        :class="{ active: activeTheme === 'theme-blue' }"
        @click="setActiveTheme('theme-blue', '#2cf4e0')"
      ></div>
      <div
        id="theme-beige"
        :class="{ active: activeTheme === 'theme-beige' }"
        @click="setActiveTheme('theme-beige', '#F5F5DC')"
      ></div>
      <div
        id="theme-yellow"
        :class="{ active: activeTheme === 'theme-yellow' }"
        @click="setActiveTheme('theme-yellow', '#ffd32c')"
      ></div>
    </div>

    <div class="content-area border rounded p-4">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  background: var(--bg-black-100);
  height: 100%;
  color: #fff;
  user-select: none;
}

.display-3 {
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
span {
  transition: color 0.5s ease !important;
}

div {
  transition: box-shadow 0.5s ease !important;
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10; 
}

.theme-options {
  position: fixed;
  top: 60px; 
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.theme-options div {
  cursor: pointer;
  width: 40px; 
  height: 40px;
  border-radius: 4px;
  display: inline-block;
  opacity: 0.3;
  transition: all 0.3s;
}

.theme-options div.active {
  opacity: 1;
}

#theme-green {
  background-color: #37b18c;
}

#theme-blue {
  background-color: #377ab1;
}

#theme-beige {
  background-color: #F5F5DC;
}

#theme-yellow {
  background-color: #ffd32c;
}

@media only screen and (max-width: 600px) {
  .theme-options {
    position: relative;
    margin: 0;
  }
}
</style>
