import Head from 'next/head'
import { useState } from 'react'

const SheetToJSON = () => {
  const [fileContent, setFileContent] = useState('')

  const upload = async event => {
    const reader = new FileReader()

    reader.onload = async event => {
      const text = event.target.result
      const lines = text.split('\n')

      const obj = {
        studentsIds: lines[0].replace('\r', '').split(','),
        studentsName: lines[1].replace('\r', '').split(','),
        missions: []
      }

      const generateMissionsNames = (obj, lines) => {
        // get the missions names

        const missionsNamesIndexes = [3, 14, 25]

        lines.forEach(line =>
          line.split(',').forEach((_, key) => {
            obj.missions[key] = {}
            obj.missions[key].names = []
          })
        )

        lines.forEach((line, key) => {
          missionsNamesIndexes.map(index => {
            if (key === index) {
              const currentLine = line.split(',')

              currentLine.map((name, key) =>
                obj.missions[key].names.push(name.replace('\r', ''))
              )
            }
          })
        })
      }

      const generateChallenges = (obj, lines) => {
        // get challenges data
        const challengesIndexes = [
          [5, 7, 8, 9, 11, 12],
          [16, 17, 19, 20, 22, 13],
          [27, 28, 30, 31, 33, 34]
        ]

        lines.forEach(line =>
          line.split(',').forEach((_, key) => {
            obj.missions[key].challenges = []
          })
        )
      }

      generateMissionsNames(obj, lines)
      generateChallenges(obj, lines)

      console.log(obj.missions)

      setFileContent(lines)
    }

    reader.readAsText(event.target.files[0])
  }

  return (
    <div className="converter">
      <Head>
        <title>Convert Sheet to JSON</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="container_converter">
        <div>
          <textarea
            style={textareaStyles}
            value={ fileContent }
          />
        </div>
        <div>
          <input
            type="file"
            onChange={ upload }
          />
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
