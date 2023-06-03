'use client'

import React, { useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';
import { EditorView } from '@codemirror/view';

import { Button } from '../ui/button';

export function JSONFormatter () {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const outputRef = useRef();

  const beautifyJSON = () => {
    try {
      const jsonObject = JSON.parse(input);
      const formatted = JSON.stringify(jsonObject, null, 2);
      setOutput(formatted);
    } catch (error) {
      setOutput('Invalid JSON');
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  }

  const resetFields = () => {
    setInput('');
    setOutput('');
  }

  const onChange = React.useCallback((value, viewUpdate) => {
    setInput(value);
  }, [])

  const isInputEmpty = input.trim() === '';
  const isOutputEmptyOrInvalid = output.trim() === '' || output === 'Invalid JSON';
  const isInputOutputEmpty = isInputEmpty && isOutputEmptyOrInvalid;

  return (
    <>
    <CodeMirror
      value={input}
      height="500px"
      theme={githubDark}
      extensions={[
        javascript({ jsx: true }),
        EditorView.lineWrapping
      ]}
      onChange={onChange}
      onSubmit={beautifyJSON}
      className="whitespace-pre-wrap"
    />
    <div className='flex gap-4'>
      <Button onClick={beautifyJSON} className="my-5 w-full" disabled={isInputEmpty}>Beautify</Button>
      <Button onClick={copyToClipboard} className="my-5 w-full" disabled={isOutputEmptyOrInvalid}>Copy</Button>
      <Button onClick={resetFields} className="my-5 w-full" disabled={isInputOutputEmpty}>Reset</Button>
    </div>
    <CodeMirror
      value={output}
      height="500px"
      theme={githubDark}
      extensions={[javascript({ jsx: true })]}
      readOnly
    />
    </>
  )
}