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
        <smm2-link to="/popular">인기 랭킹</smm2-link>
        <smm2-link to="/new">새로운 코스</smm2-link>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const Smm2Link = defineAsyncComponent(() => import("@/components/Smm2Link.vue"));
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
