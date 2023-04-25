'use client'

import Giscus from '@giscus/react';
import { useTheme } from "next-themes"

export default function GiscusComment() {
  const { theme } = useTheme();
  const currentTheme = theme === "light" ? "light" : "dark";
  return (
    <Giscus
      id="comments"
      repo="januarfonti/fonti.dev"
      repoId="R_kgDOJTjh9A"
      category="Show and tell"
      categoryId="DIC_kwDOJTjh9M4CVuVM"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={currentTheme}
      lang="en"
      loading="lazy"
    />
  );
}