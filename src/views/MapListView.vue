<template>
  <header>
    <h1>코스 찾기</h1>
    <div style="display: flex; justify-content: space-between">
      <div>이전 페이지</div>
      <div>다음 페이지</div>
    </div>
  </header>
  <main>
    <article
      v-for="(course, index) in courses"
      :key="index"
    >
      <h1>{{ course.name }}</h1>
      <img
        v-if="course.course_id"
        :src="makeThumbnailUrl(course.course_id)"
        alt="코스 이미지"
        loading="lazy"
      />
      {{ makeUploadDate(course.uploaded_pretty) }}
      <p>좋아요 수: {{ course.likes }}</p>
      <p>도전 수: {{ course.attempts }}</p>
      <p>{{ makeTagName(course.tag1) }}</p>
      <p>{{ makeTagName(course.tag2) }}</p>
      <p>코스 설명</p>
      <p>{{ course.description }}</p>
      <div style="display: flex; gap: 20px">
        <div>베스트 타임</div>
        <div>클리어율</div>
        <div>코스 ID</div>
      </div>
      <div style="display: flex;; gap: 20px">
        <div>{{ course.world_record_pretty }}</div>
        <div>{{ course.clear_rate_pretty }}</div>
        <div>{{ course.course_id }}</div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchPopular } from "@/api/mari-over";
import type { FetchPopularResult } from "search_popular_response"
import { mariOverUrl, TagName } from "@/global/constants"

const params = {
  count: 1,
  difficulty: "n" as const,
  rejectRegions: "jue",
}

const data = ref<FetchPopularResult>({ cache_hits: 0, courses: [] });
const courses = ref(data.value.courses);

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
const makeTagName = (tag: number) => TagName[tag] ?? "태그 없음";

onMounted(async () => {
  data.value = await fetchPopular(params);
  courses.value = data.value.courses;
});

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

article {
  background: #f0f0f0;
}
</style>
