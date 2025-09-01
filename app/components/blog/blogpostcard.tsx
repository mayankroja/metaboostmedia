import { BlogPost } from "@/app/blog/type/blog";
import Link from "next/link";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-r from-[#0a2540] to-[#00d4ff]">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm12 2a2 2 0 00-2-2h-2a2 2 0 00-2 2v11a3 3 0 106 0V4zM6 17a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#00d4ff] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#00d4ff] transition-colors duration-300 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-700 font-medium">
            {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-[#00d4ff] font-semibold hover:underline flex items-center whitespace-nowrap text-sm"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
