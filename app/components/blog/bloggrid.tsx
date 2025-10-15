// components/blog/BlogGrid.tsx
"use client";
import { BlogPost } from "@/app/blog/type/blog";
import BlogPostCard from "./blogpostcard";
import AnimateIn from "../common/animate-in";

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <AnimateIn yOffset={30} duration={0.6}>
        <div className="text-center py-12">
          <h3 className="text-xl text-[#666]">No blog posts found.</h3>
          <p className="text-[#666] mt-2">Try adjusting your search or filters.</p>
        </div>
      </AnimateIn>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <AnimateIn
          key={post.id}
          yOffset={40}
          duration={0.6}
          delay={0.1 * index}
        >
          <BlogPostCard post={post} />
        </AnimateIn>
      ))}
    </div>
  );
};

export default BlogGrid;