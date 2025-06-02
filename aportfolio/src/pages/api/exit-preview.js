import { exitPreview } from "@prismicio/next/pages";

export default function handler(req, res) {
  return exitPreview({ req, res });
}
