import { request } from "../../utils/axios-utils";

const fetchNews = () => {
  return request({
    url: `/news`,
  });
};

export const useGetNews = async () => {
  const { data } = await fetchNews();
  return data;
};
