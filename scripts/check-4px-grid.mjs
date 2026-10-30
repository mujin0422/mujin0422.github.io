/**
 * Check authored source dimensions against the 4px design grid.
 * Deliberate exceptions: 1px hairlines, 1px details in textures,
 * fluid units (%, vw, vh, em), SVG drawing geometry, and generated
 * shadcn/ui primitives which are maintained upstream without edits.
 */
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, relative, sep } from 'node:path'

const root = fileURLToPath(new URL('../src/', import.meta.url))
const violations = []

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (relative(root, path).split(sep).join('/') === 'components/ui') continue
      await walk(path)
      continue
    }
    if (!/\.(css|tsx?)$/.test(path)) continue
    const content = await readFile(path, 'utf8')
    const lines = content.split(/\r?\n/)
    for (const [index, line] of lines.entries()) {
      const location = `${relative(root, path)}:${index + 1}`
      if (path.endsWith('.css')) {
        for (const match of line.matchAll(/(-?(?:\d+(?:\.\d+)?|\.\d+))(px|rem)\b/g)) {
          const size = Number(match[1]) * (match[2] === 'rem' ? 16 : 1)
          if (Math.abs(size % 4) < 0.00001) continue
          if (size === 1 && /(?:border|gradient|shadow|height):?/.test(line)) continue
          if (match[0] === '5px' && line.includes('repeating-linear-gradient')) continue
          violations.push(`${location}: ${match[0]}`)
        }
      } else {
        for (const match of line.matchAll(/\bsize=\{(\d+)\}/g)) {
          if (Number(match[1]) % 4 !== 0) violations.push(`${location}: ${match[0]}`)
        }
      }
    }
  }
}

await walk(root)
if (violations.length) {
  console.error('Non-4px dimensions in authored source:\n' + violations.join('\n'))
  process.exitCode = 1
} else {
  console.log('4px grid check passed (author-maintained source; 1px hairlines and shadcn/ui excluded).')
}
