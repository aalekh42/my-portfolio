import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices"; // Your slice-to-component map

export default async function Home() {
  const client = createClient();

  const page = await client.getByUID("page", "demo-home");

  return (
    <SliceZone slices={page.data.slices} components={components} />
  );
}
