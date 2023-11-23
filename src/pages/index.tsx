import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "../styles/general.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 >
        Ivan Burgos
      </h1>
      <p>
        I'm Ivan Burgos, a software engineer from Mexico City, the place where you will find the best tacos, especially the pastor ones 🌮.
      </p>
      <p>
        You can talk with me for hours on end if you mention anything about
      </p>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              Currently
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={2}>
              Reading 📚
            </th>
            <td>
              <a href="https://susancain.net/book/quiet/" target="_blank">
                Quiet - Susan Cain
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://kamite.com.mx/scott-pilgrim/270-scott-pilgrim-1-7500588006201.html" target="_blank">
                Scott Pilgrim - Bryan Lee O'Malley
              </a>
            </td>
          </tr>
          <tr>
            <th>
              Learning 📚
            </th>
            <td>
              <a href="https://www.patterns.dev/" target="_blank">
                Learning Patterns - Lydia Hallie and Addy Osmani
              </a>
            </td>
          </tr>
          <tr>
            <th>
              Playing 🎮
            </th>
            <td>
              <a href="https://www.nintendo.com/es-mx/store/products/pikmin-2-switch/" target="_blank">
                Pikmin 2
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button>Work</button>
        <a href="https://www.linkedin.com/in/ivan-pburgos/" target="_blank">LinkedIn</a>
        <a href="https://github.com/iburgos72/" target="_blank">Github</a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>I Burgos</title>
