<template>
  <router-link :to="to" class="smm2-link">
    <slot></slot>
    <span class="corner-1"></span>
    <span class="corner-2"></span>
    <span class="corner-3"></span>
    <span class="corner-4"></span>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.smm2-link {
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: #531a1b;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 3rem;
  background: white;
  border-radius: 5px;
  border: 2px solid transparent;
}

.corner-1,
.corner-2,
.corner-3,
.corner-4 {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #ff6600;
  z-index: 1;
  transform: scale(0);
  transition: all 0.1s ease;
}

/* 각 코너 위치 설정 */
.corner-1 {
  top: -5px;
  left: -5px;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.corner-2 {
  top: -5px;
  right: -5px;
  clip-path: polygon(100% 0, 100% 100%, 0 0);
}

.corner-3 {
  bottom: -5px;
  left: -5px;
  clip-path: polygon(0 100%, 100% 100%, 0 0);
}

.corner-4 {
  bottom: -5px;
  right: -5px;
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
}

/* 호버 시 각 코너 확대 */
.smm2-link:hover .corner-1,
.smm2-link:hover .corner-2,
.smm2-link:hover .corner-3,
.smm2-link:hover .corner-4 {
  transform: scale(1);
}
</style>
