import { request } from "../../utils/axios-utils";

const fetchStore = () => {
  return request({
    url: `/stores`,
  });
};

export const useGetStore = async () => {
  const { data } = await fetchStore();
  return data;
};
