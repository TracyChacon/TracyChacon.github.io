import path from "path";
import fs from "fs";
import Link from "next/link";


// Define post shape
interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

function getBlogPosts(): Post[] {
    const postsDirectory = path.join(process.cwd(), "content/posts");
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const data = JSON.parse(fileContents);
        
        return {
            slug: filename.replace(".json", ""),
            title: data.title,
            date: data.date,
            excerpt: data.exerpt,
        };
    });
}

export default function BlogListPage() {
    const posts = getBlogPosts();

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <Link href="/" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors ">
                ← Back to Portfolio Home
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 mb-8 mt-2">Learning Publicly</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b border-slate-200 pb-6">
                        <span className="text-sm text-slate-500">{post.date}</span>
                        <h2 className="text-2xl font-semibold text-indigo-600 mt-1 hover:underline">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-slate-600 mt-2">{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </main>
    )
}