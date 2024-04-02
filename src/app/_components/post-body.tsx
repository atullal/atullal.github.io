import markdownStyles from "./markdown-styles.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className={markdownStyles["markdown"]}>
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
