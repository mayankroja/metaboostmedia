import { BlogPost } from "@/app/blog/type/blog";
import BlogPostCard from "./blogpostcard";


interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-[#666]">No blog posts found.</h3>
        <p className="text-[#666] mt-2">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;