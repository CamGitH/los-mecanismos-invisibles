import { mkdir, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import mammoth from 'mammoth'

const rootDir = process.cwd()
const essaysDir = path.join(rootDir, 'ensayos')
const outputDir = path.join(rootDir, 'src', 'generated')
const outputFile = path.join(outputDir, 'essays.js')

const slugify = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const stripHtml = (value) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

const getTitle = (html, fileName) => {
  const headingMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/i)
  if (headingMatch) {
    return stripHtml(headingMatch[1])
  }

  return path.basename(fileName, path.extname(fileName))
}

const getExcerpt = (html) => {
  const paragraphMatch = html.match(/<p[^>]*>(.*?)<\/p>/i)
  if (!paragraphMatch) {
    return ''
  }

  const text = stripHtml(paragraphMatch[1])
  return text.length > 220 ? `${text.slice(0, 217).trim()}...` : text
}

const removeDuplicatedTitle = (html, title) => {
  const paragraphMatch = html.match(/^<p[^>]*>(.*?)<\/p>/i)
  if (!paragraphMatch || stripHtml(paragraphMatch[1]) !== title) {
    return html
  }

  return html.slice(paragraphMatch[0].length)
}

const files = (await readdir(essaysDir))
  .filter((file) => path.extname(file).toLowerCase() === '.docx')
  .sort((a, b) => a.localeCompare(b, 'es'))

const essays = await Promise.all(
  files.map(async (file) => {
    const sourcePath = path.join(essaysDir, file)
    const result = await mammoth.convertToHtml(
      { path: sourcePath },
      {
        convertImage: mammoth.images.imgElement(async (image) => {
          const imageBuffer = await image.read('base64')
          return {
            src: `data:${image.contentType};base64,${imageBuffer}`,
          }
        }),
      },
    )

    const title = getTitle(result.value, file)
    const html = removeDuplicatedTitle(result.value, title)

    return {
      id: slugify(title),
      title,
      source: file,
      excerpt: getExcerpt(html),
      html,
    }
  }),
)

await mkdir(outputDir, { recursive: true })
await writeFile(
  outputFile,
  `export const essays = ${JSON.stringify(essays, null, 2)}\n`,
  'utf8',
)

console.log(`Generated ${essays.length} essay${essays.length === 1 ? '' : 's'}.`)
