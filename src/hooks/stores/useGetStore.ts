import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/axios-utils";

export type Store = {
  BIZREGNO: string | null;
  BSN_TM_NM: string | null;
  CMPNM_NM: string | null;
  DETAIL_ADDR: string | null;
  INDUTYPE_NM: string | null;
  PROVSN_PRODLST_NM: string | null;
  PROVSN_TRGT_NM1: string | null;
  PROVSN_TRGT_NM2: string | null;
  REFINE_LOTNO_ADDR: string | null;
  REFINE_ROADNM_ADDR: string | null;
  REFINE_WGS84_LAT: string | null;
  REFINE_WGS84_LOGT: string | null;
  REFINE_ZIPNO: string | null;
  SIGUN_NM: string | null;
};

export const fetchStore = async () => {
  const { data } = await request({
    url: `/stores`,
  });
  return data;
};

export const getStore = async () => {
  const response = await fetchStore();
  return response;
};

export const useGetStore = () => {
  return useQuery(["store"], fetchStore, {
    select: data =>
      data.GGGOODINFLSTOREST[1].row.filter(
        (item: Store) =>
          item.INDUTYPE_NM === "식음료" || item.INDUTYPE_NM === "식당"
      ),
  });
};
