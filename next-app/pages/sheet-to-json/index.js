import Head from 'next/head'
import { useState } from 'react'

const SheetToJSON = () => {
  const [fileContent, setFileContent] = useState('')

  const upload = async event => {
    const reader = new FileReader()

    reader.onload = async event => {
      const text = (event.target.result)

      setFileContent(text)
    }

    reader.readAsText(event.target.files[0])
  }

  return (
    <div className="converter">
      <Head>
        <title>Convert Sheet to JSON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container_converter">
        <div>
          <textarea
            style={textareaStyles}
            value={ fileContent }
          />
        </div>
        <div>
          <input type="file" onChange={ upload } />
        </div>
      </div>
    </div>
  )
}

const textareaStyles = {
  height: 800,
  width: 500
}

export default SheetToJSON
