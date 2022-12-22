import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGetStore } from "../../../hooks/stores/useGetStore";
import Map from "../../Map";

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

const StorePage = () => {
  const { data } = useQuery(["store"], useGetStore, {
    select: data =>
      data.GGGOODINFLSTOREST[1].row.filter(
        (item: Store) =>
          item.INDUTYPE_NM === "식음료" || item.INDUTYPE_NM === "식당"
      ),
  });

  console.log(data);

  return <Map />;
};

export default StorePage;
