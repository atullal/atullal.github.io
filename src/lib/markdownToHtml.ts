import { remark } from "remark";
import html from "remark-html";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkMath).use(html).use(rehypeKatex).process(markdown);
  return result.toString();
}
