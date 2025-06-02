import { setPreviewData, redirectToPreviewURL } from "@prismicio/next/pages";

import { createClient } from "../../prismicio";

export default async function handler(req, res) {
  const client = createClient({ req });

  setPreviewData({ req, res });

  return await redirectToPreviewURL({ req, res, client });
}
