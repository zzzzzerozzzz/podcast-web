import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
    id: string;
    slug: string;
    title: string;
    date: string;
    category: string;
    readTime: string;
    excerpt: string;
    featured?: boolean;
    image?: string;
    contentHtml?: string;
    content?: string;
}

export function getAllPosts(): PostData[] {
    // Create directory if it doesn't exist (for safety during dev)
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id/slug
        const id = fileName.replace(/\.md$/, '');
        const slug = id;

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            slug,
            ...(matterResult.data as { date: string; title: string; category: string; excerpt: string; readTime: string; featured?: boolean; image?: string }),
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id: slug,
        slug,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; category: string; excerpt: string; readTime: string; featured?: boolean; image?: string }),
    };
}

export async function getPostsByCategory(category: string): Promise<PostData[]> {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.category === category);
}
