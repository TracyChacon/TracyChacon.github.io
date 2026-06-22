import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
    params: Promise<{ slug: string }>
}

// Tell Next.js which post files to compile at build time
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "content/posts");
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((filename) => ({
        slug: filename.replace(".json", ""),
    }));
}

// Render the actual post layout
export default async function BlogPost({ params }: PostPageProps) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "content/posts", `${slug}.json`);

    // Guard clause if the file doesn't exist
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const post = JSON.parse(fileContents);

    return (
        <article className="max-w-2xl mx-auto px-4 py-12">
            <Link href="/blog" className="text-sm text-indigo-600 hover:underline mb-4 inline-block">
                ← Back to all posts
            </Link>
            <header className="mb-8">
                <span className="text-sm text-slate-500">
                    {post.date}
                </span>
                <h1  className="text-4xl font-bold text-slate-900 mt-2">
                    {post.title}
                </h1>
            </header>
            <div className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                {post.content}
            </div>
        </article>
    )
}