import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const storeClient = axios.create({
  baseURL: "https://openapi.gg.go.kr",
});

const findStore = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await storeClient.get(
    `/GGGOODINFLSTOREST?key&type=json&pIndex=1&pSize=1000`
  );

  return res.status(200).json(data);
};

export default findStore;
