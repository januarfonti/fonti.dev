'use client'

import Giscus from '@giscus/react';

export default function GiscusComment() {
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
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}