import React from 'react'
import cn from 'classnames'
import project from '../../../package.json'
import styles from './styles.css'

const LibrariesPage = () => {
  const keys = Object.keys(project.devDependencies)
    .concat(Object.keys(project.dependencies))
    .sort()

  return (
    <section className={ cn('main', styles.libraries) }>
      <p>web-starter-kit uses the following packages:</p>
      <table>
        <tbody>
          {keys.map((key) => (
            <tr key={key}>
              <td>
                <a href={ `https://www.npmjs.com/package/${key}` } target="_blank" rel="noopener noreferrer">{key}</a>
              </td>
              <td>
                {project.devDependencies[key] || project.dependencies[key]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default LibrariesPage
