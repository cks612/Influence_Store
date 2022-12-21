import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "../../../utils/auth";

const client = axios.create({
  baseURL: "https://openapi.naver.com/v1",
  headers: {
    "X-Naver-Client-Id": NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    Accept: "application/json",
  },
  withCredentials: true,
});

const naverNews = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await client.get(
    `/search/news?query="선한영향력"&display=20&start=1&sort=date`
  );

  return res.status(200).json(data);
};

export default naverNews;
