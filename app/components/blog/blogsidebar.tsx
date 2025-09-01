// components/blog/BlogSidebar.tsx

import { BlogPost } from "@/app/blog/type/blog";
import NewsletterSignup from "./newslettersignup";

interface BlogSidebarProps {
  categories: string[];
  recentPosts: BlogPost[];
  selectedCategory: string | null;
  onSearch: (query: string) => void;
  onCategorySelect: (category: string | null) => void;
}

const BlogSidebar = ({
  categories,
  recentPosts,
  selectedCategory,
  onSearch,
  onCategorySelect,
}: BlogSidebarProps) => {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[#0a2540] mb-4">
          Search Articles
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-colors"
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className="absolute right-3 top-3 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[#0a2540] mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategorySelect(null)}
              className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                selectedCategory === null
                  ? "bg-[#f0fdff] text-[#00d4ff] font-semibold"
                  : "text-[#666] hover:bg-gray-50"
              }`}
            >
              All Categories
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategorySelect(category)}
                className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-[#f0fdff] text-[#00d4ff] font-semibold"
                    : "text-[#666] hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-[#0a2540] mb-4">
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li
              key={post.id}
              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <a
                href={`/blog/${post.slug}`}
                className="text-[#0a2540] hover:text-[#00d4ff] transition-colors font-medium"
              >
                {post.title}
              </a>
              <p className="text-sm text-[#666] mt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>


<NewsletterSignup />
    </aside>
  );
};

export default BlogSidebar;
