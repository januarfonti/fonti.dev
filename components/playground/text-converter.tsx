'use client'

import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function TextConverter() {
  const [inputText, setInputText] = useState('')
  const [convertedText, setConvertedText] = useState('')
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
    setConvertedText(
      e.target.value
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/ /g, '-')
        .toLowerCase()
    )
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(convertedText)
    toast({
      title: 'Copied!',
      description: 'The converted text has been copied to your clipboard.'
    })
  }
  return (
    <section>
      <div className="my-5 flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Input text here"
          value={inputText}
          onChange={handleInputChange}
        />
        <Button
          type="button"
          onClick={handleCopyClick}
          disabled={inputText === ''}
        >
          Copy
        </Button>
      </div>
      {convertedText === '' ? null : (
        <div>
          <span className="font-semibold">Result:</span> {convertedText}
        </div>
      )}
    </section>
  )
}
