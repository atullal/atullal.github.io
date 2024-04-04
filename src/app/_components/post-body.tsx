import markdownStyles from "./markdown-styles.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {

  return (
    <div className="mx-auto max-w-2xl">
      <div className={markdownStyles["markdown"]}>
        <MDXRemote source={content} options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
            format: 'mdx',
          }
        }}/>
      </div>
    </div>
  );
}
