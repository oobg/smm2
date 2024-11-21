import { CountryCode, mariOverUrl, TagName } from "@/script/constants"

const useCourseTransformers = () => {
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

  const makeThumbnailUrl = (courseId: string) => {
    return `${mariOverUrl}/level_thumbnail/${courseId}`
  };

  const makeTagName = (tag: number) => {
    return TagName[tag] ?? "---"
  };

  const makeCountryFlag = (country: string) => {
    return CountryCode[country] ?? country
  };

  const formattedCourseID = (courseId: string) => {
    return courseId.replace(/([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{3})/, "$1-$2-$3")
  };

  return {
    makeUploadDate,
    makeThumbnailUrl,
    makeTagName,
    makeCountryFlag,
    formattedCourseID,
  }
}

export default useCourseTransformers;
