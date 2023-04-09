'use client'

import { YouTubeEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';

interface SocialMediaEmbedProps {
  url: string;
  type: 'youtube' | 'instagram' | 'twitter';
}

export function SocialMediaEmbed({ url, type }) {
  if (type === 'youtube') {
    return <YouTubeEmbed url={url} />
  } else if (type === 'instagram') {
    return <InstagramEmbed url={url} />
  } else if (type === 'twitter') {
    return <TwitterEmbed url={url} />
  } else {
    return (
      <div className="text-center text-neutral-500">
        <p>Unsupported embed type.</p>
      </div>
    )
  }
}