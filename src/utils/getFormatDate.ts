import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const formatDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};