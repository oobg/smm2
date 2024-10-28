<template>
  <header>
    <h1>코스 찾기</h1>
    <div style="display: flex; justify-content: space-between">
      <div>이전 페이지</div>
      <div>다음 페이지</div>
    </div>
  </header>
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
    <span>데이터를 불러오고 있습니다...</span>
  </div>
  <main style="display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 100%; height: 100%; padding-bottom: 1rem; overflow: auto">
    <article
      v-for="(course, index) in courses"
      :key="index"
      style="display: flex; flex-direction: column; padding: 20px; gap: 0.5rem; width: 40rem; border-radius: 1rem"
    >
      <h1 style="display: flex; gap: 0.5rem">
        <span>
          {{ course.game_style_name }}
        </span>
        <span>
          {{ course.name }}
        </span>
      </h1>
      <div style="display: flex; gap: 1rem; width: 100%">
        <div style="width: 16rem; height: 9rem; position: relative; text-align: center">
          <img
            v-if="course.course_id"
            :src="makeThumbnailUrl(course.course_id)"
            style="width: 100%; height: auto; display: block; border-radius: 8px;"
            alt="코스 이미지"
            loading="lazy"
          />
          <!-- 텍스트를 이미지 위에 위치시키기 -->
          <span style="
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.9rem;
          ">
            {{ makeUploadDate(course.uploaded_pretty) }}
          </span>
        </div>
        <div style="display: flex; flex-direction: column; width: 8rem; margin-left: 1rem">
          <p>❤️ {{ course.likes }}</p>
          <p>👣 {{ course.attempts }}</p>
          <p>🏷️ {{ makeTagName(course.tag1) }}</p>
          <p>🏷️ {{ makeTagName(course.tag2) }}</p>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
            width: 10rem;
          ">
          <div style="display: flex; gap: 0.5rem">
            <p>{{ makeCountryFlag(course.uploader.country) }}</p>
            <p>{{ course.uploader.name }}</p>
          </div>
          <div
            style="
              width: 5rem;
              height: auto;
              background-color: rgb(252, 252, 252);
              border-radius: 1rem;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            "
          >
            <img
              v-if="course.uploader.mii_image"
              :src="course.uploader.mii_image"
              style="width: 100%; height: 100%; display: block; border-radius: 1rem;"
              alt="맵 제작자 Mii 이미지"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <p class="map-description-color" style="height: 5rem; border-radius: 0.5rem; padding: 0.5rem">{{ course.description }}</p>
      <div style="display: flex; gap: 0.5rem; text-align: center; justify-content: space-between">
        <div class="map-description-color" style="width: 100%; border-radius: 0.5rem">
          <p>베스트 타임</p>
          <p>{{ course.world_record_pretty }}</p>
        </div>
        <div class="map-description-color" style="width: 100%; border-radius: 0.5rem">
          <p>클리어율</p>
          <p>{{ course.clear_rate_pretty }}</p>
        </div>
        <div class="map-description-color" style="width: 100%; border-radius: 0.5rem">
          <p>코스 ID</p>
          <p>{{ formattedCourseID(course.course_id) }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchPopular } from "@/api/mari-over";
import type { FetchPopularResult } from "search_popular_response"
import { CountryCode, mariOverUrl, TagName } from "@/global/constants"

const params = {
  count: 10,
  difficulty: "n" as const,
  rejectRegions: "jue",
}

const data = ref<FetchPopularResult>({ cache_hits: 0, courses: [] });
const courses = ref(data.value.courses);
const isLoading = ref(true);

const makeUploadDate = (date: string) => {
  // 날짜 문자열을 ISO 형식으로 변환
  const formattedDate = date.replace(
    /(\d{1,2})-(\d{1,2})-(\d{4})/,
    (_, day, month, year) => `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  );

  // Date 객체 생성 후 원하는 형식으로 반환
  return new Date(formattedDate).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
};
const makeThumbnailUrl = (courseId: string) => `${mariOverUrl}/level_thumbnail/${courseId}`;
const makeTagName = (tag: number) => TagName[tag] ?? "---";
const makeCountryFlag = (country: string) => CountryCode[country] ?? country;
const formattedCourseID = (courseId: string) => courseId.replace(/([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{3})/, "$1-$2-$3");

onMounted(async () => {
  data.value = await fetchPopular(params);
  courses.value = data.value.courses;
  isLoading.value = false;
});

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

article {
  background: rgb(250, 252, 231);
}

.map-description-color {
  background-color: rgb(254, 241, 203);
}

.loader-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  text-align: -webkit-center;
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1); /* 바깥 테두리 */
  border-top: 4px solid #3498db; /* 회전할 색상 부분 */
  border-radius: 50%; /* 원형으로 만들기 */
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite; /* 회전 애니메이션 */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
