'use client'

import {DiscussionEmbed} from "disqus-react"
import { absoluteUrl } from "@/lib/utils"

const DisqusComments = ({ post }) => {
  const disqusShortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME || ''
  const disqusConfig = {
    url: absoluteUrl(post.slug),
    identifier: post.slug, 
    title: post.title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;