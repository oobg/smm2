<template>
  <main>
    <div class="smm2-container">
      <div class="smm2-subject">
        <div class="smm2-subject-1">SUPER</div>
        <div class="smm2-subject-2">
          MARIO MAKER
          <span class="smm2-subject-3">2</span>
        </div>
      </div>
      <div class="smm2-flex">
        <router-link to="/popular" class="smm2-link">
          인기 랭킹
          <span class="corner-1"></span>
          <span class="corner-2"></span>
          <span class="corner-3"></span>
          <span class="corner-4"></span>
        </router-link>

        <router-link to="/new" class="smm2-link">
          새로운 코스
          <span class="corner-1"></span>
          <span class="corner-2"></span>
          <span class="corner-3"></span>
          <span class="corner-4"></span>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
}

div.smm2-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.smm2-subject {
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.smm2-subject-1 {
  font-size: 3rem;
}

.smm2-subject-2 {
  font-size: 4rem;
  margin-top: -90px;
}

.smm2-subject-3 {
  font-size: 7rem;
  color: #E30013;
}

div.smm2-flex {
  display: flex;
  justify-content: space-around;
}

.smm2-link {
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: #531A1B;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
  height: 3rem;
  background: white;
  border-radius: 5px;
  border: 2px solid transparent;
}

/* 각 코너 위치 설정 */
.corner-1, .corner-2, .corner-3, .corner-4 {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #ff6600;
  z-index: 1;
  transform: scale(0);
  transition: all 0.1s ease;
}

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

/* 반응형 처리 */
@media screen and (max-width: 970px) {
  .smm2-subject-1 {
    font-size: 2.5rem;
  }

  .smm2-subject-2 {
    font-size: 3.5rem;
    margin-top: -60px;
  }

  .smm2-subject-3 {
    font-size: 5rem;
  }

  .smm2-flex {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}

@media screen and (max-width: 827px) {
  .smm2-subject {
    width: 420px;
  }
}

@media screen and (max-width: 530px) {
  .smm2-subject-1 {
    font-size: 2.5rem;
  }

  .smm2-subject-2 {
    font-size: 3.5rem;
    margin-top: -60px;
  }

  .smm2-subject-3 {
    font-size: 5rem;
  }

  .smm2-flex {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}

@media screen and (max-width: 479px) {
  .smm2-subject {
    width: 380px;
    padding-left: 8px;
  }

  .smm2-subject-1 {
    font-size: 2rem;
  }

  .smm2-subject-2 {
    font-size: 3rem;
    margin-top: -45px;
  }

  .smm2-subject-3 {
    font-size: 4rem;
  }
}
</style>
