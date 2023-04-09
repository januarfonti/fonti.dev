import { NextRequest } from "next/server"
import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"

export const config = {
  runtime: "edge",
}

const interRegular = fetch(
  new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading

    const { mode } = values
    const paint = mode === "dark" ? "#fff" : "#000"

    const fontSize = heading.length > 100 ? "60px" : "70px"

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "black"
                : "white",
          }}
        >
          <svg width="26" height="51" viewBox="0 0 26 51" fill="none">
            <path d="M12.1547 50.5234H10.3214C3.81024 50.5234 0.554688 50.0234 0.554688 49.0234C0.554688 48.4457 1.09913 47.8123 2.18802 47.1234C3.29913 46.4345 4.02135 45.4901 4.35469 44.2901C4.71024 43.0679 4.88802 39.6345 4.88802 33.9901C4.88802 28.3457 4.72135 25.1345 4.38802 24.3568C4.07691 23.579 3.48802 22.9012 2.62135 22.3234C1.75469 21.7234 1.32135 21.1901 1.32135 20.7234C1.32135 20.2345 1.81024 19.379 2.78802 18.1568C3.78802 16.9123 4.48802 15.4234 4.88802 13.6901C5.91024 9.37899 7.32135 6.24566 9.12135 4.2901C11.4102 1.77899 14.6214 0.523438 18.7547 0.523438C20.7547 0.523438 22.3547 0.878993 23.5547 1.5901C24.7547 2.27899 25.3547 3.17899 25.3547 4.2901C25.3547 5.40122 25.0547 6.22344 24.4547 6.75677C23.8769 7.2901 23.2547 7.55677 22.588 7.55677C21.9436 7.55677 20.8769 7.15677 19.388 6.35677C17.9214 5.55677 16.8102 5.15677 16.0547 5.15677C14.8325 5.15677 13.888 5.92344 13.2214 7.45677C12.5769 8.96788 12.2547 10.6345 12.2547 12.4568C12.2547 14.279 12.6325 15.6123 13.388 16.4568C13.6547 16.7457 14.6436 17.3345 16.3547 18.2234C18.0658 19.0901 18.9214 19.8568 18.9214 20.5234C18.9214 21.0345 18.0436 21.5568 16.288 22.0901C14.5325 22.6012 13.4436 23.1679 13.0214 23.7901C12.3102 24.8345 11.9547 28.2123 11.9547 33.9234C11.9547 39.6123 12.1547 43.0345 12.5547 44.1901C12.9769 45.3457 13.788 46.3568 14.988 47.2234C16.188 48.0901 16.788 48.7568 16.788 49.2234C16.788 50.0901 15.2436 50.5234 12.1547 50.5234Z" fill={paint} />
          </svg>

          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold tracking-tighter"
              style={{
                fontFamily: "Inter",
                fontWeight: "bolder",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              Januar Fonti - Frontend Developer @ clearview.team
            </div>
            <div
              tw="flex items-center text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path fill={paint} d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
              </svg>
              <div tw="flex ml-2">fonti.dev</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
