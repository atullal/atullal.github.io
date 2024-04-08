import { remark } from "remark";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkParse, {fragment: true})
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype as any, { allowDangerousHtml: true }) // Add 'as any' to bypass type checking
    .use(rehypeKatex)
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
