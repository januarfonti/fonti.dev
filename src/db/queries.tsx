"use server";

import { sql } from "@vercel/postgres";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";

export async function getBlogViews() {
  noStore();
  const data = await sql`
    SELECT count
    FROM views
  `;

  return data.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount() {
  noStore();
  const data = await sql`
    SELECT slug, count
    FROM views
  `;

  return data.rows as { slug: string; count: number }[];
}
