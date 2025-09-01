// app/blog/page.tsx
"use client";

import { useState, useMemo } from "react";
import BlogGrid from "../components/blog/bloggrid";
import BlogSidebar from "../components/blog/blogsidebar";
import BlogHero from "../components/blog/hero";
import Pagination from "../components/blog/pagination";
import { BlogPost } from "./type/blog";



const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 SEO Strategies That Actually Work in 2024",
    excerpt: "Discover the latest SEO techniques that drive real results in today's competitive digital landscape.",
    content: "Full content here...",
    category: "SEO",
    date: "January 15, 2024",
    slug: "seo-strategies-2024",
    image: "/api/placeholder/400/250",
    readTime: 8,
    author: "Alex Johnson"
  },
  {
    id: "2",
    title: "How to Create Engaging Social Media Content",
    excerpt: "Learn the secrets to creating social media content that captures attention and drives engagement.",
    content: "Full content here...",
    category: "Social Media",
    date: "January 10, 2024",
    slug: "engaging-social-media-content",
    image: "/api/placeholder/400/250",
    readTime: 6,
    author: "Sarah Williams"
  },
  {
    id: "3",
    title: "The Future of Paid Advertising: Trends to Watch",
    excerpt: "Stay ahead of the curve with these emerging trends in paid advertising and PPC campaigns.",
    content: "Full content here...",
    category: "Paid Advertising",
    date: "January 5, 2024",
    slug: "future-paid-advertising-trends",
    image: "/api/placeholder/400/250",
    readTime: 10,
    author: "Michael Chen"
  },
  {
    id: "4",
    title: "Web Design Principles for Higher Conversion Rates",
    excerpt: "Optimize your website design to convert more visitors into customers with these proven principles.",
    content: "Full content here...",
    category: "Web Design",
    date: "December 28, 2023",
    slug: "web-design-conversion-principles",
    image: "/api/placeholder/400/250",
    readTime: 7,
    author: "Jessica Martinez"
  },
  {
    id: "5",
    title: "Building a Brand Strategy That Resonates",
    excerpt: "Create a compelling brand strategy that connects with your target audience and drives loyalty.",
    content: "Full content here...",
    category: "Brand Strategy",
    date: "December 20, 2023",
    slug: "building-brand-strategy",
    image: "/api/placeholder/400/250",
    readTime: 9,
    author: "David Kim"
  },
  {
    id: "6",
    title: "Content Marketing: From Creation to Distribution",
    excerpt: "A comprehensive guide to creating amazing content and getting it in front of the right audience.",
    content: "Full content here...",
    category: "Content Marketing",
    date: "December 15, 2023",
    slug: "content-marketing-guide",
    image: "/api/placeholder/400/250",
    readTime: 11,
    author: "Emily Robinson"
  },
  {
    id: "7",
    title: "The Power of Video Marketing in 2024",
    excerpt: "Learn how to leverage video content to boost engagement and conversions.",
    content: "Full content here...",
    category: "Video Marketing",
    date: "December 10, 2023",
    slug: "power-of-video-marketing",
    image: "/api/placeholder/400/250",
    readTime: 7,
    author: "Ryan Thompson"
  },
  {
    id: "8",
    title: "Email Marketing Strategies That Convert",
    excerpt: "Discover proven email marketing techniques to increase open rates and drive sales.",
    content: "Full content here...",
    category: "Email Marketing",
    date: "December 5, 2023",
    slug: "email-marketing-strategies",
    image: "/api/placeholder/400/250",
    readTime: 9,
    author: "Lisa Anderson"
  },
  {
    id: "9",
    title: "Data-Driven Decision Making for Marketers",
    excerpt: "How to use analytics and data to make informed marketing decisions that drive growth.",
    content: "Full content here...",
    category: "Analytics",
    date: "November 28, 2023",
    slug: "data-driven-marketing",
    image: "/api/placeholder/400/250",
    readTime: 10,
    author: "Mark Wilson"
  },
  {
    id: "10",
    title: "Mobile-First Design: Why It Matters",
    excerpt: "Understanding the importance of mobile optimization in today's digital landscape.",
    content: "Full content here...",
    category: "Web Design",
    date: "November 20, 2023",
    slug: "mobile-first-design",
    image: "/api/placeholder/400/250",
    readTime: 8,
    author: "Jennifer Lee"
  },
  {
    id: "11",
    title: "The Psychology of Color in Marketing",
    excerpt: "How different colors influence consumer behavior and perception of your brand.",
    content: "Full content here...",
    category: "Brand Strategy",
    date: "November 15, 2023",
    slug: "psychology-of-color",
    image: "/api/placeholder/400/250",
    readTime: 6,
    author: "Chris Taylor"
  },
  {
    id: "12",
    title: "Local SEO Strategies for Small Businesses",
    excerpt: "Effective techniques to improve your local search visibility and attract nearby customers.",
    content: "Full content here...",
    category: "SEO",
    date: "November 10, 2023",
    slug: "local-seo-strategies",
    image: "/api/placeholder/400/250",
    readTime: 7,
    author: "Amanda Rodriguez"
  }
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const allCategories = mockPosts.map(post => post.category);
    return Array.from(new Set(allCategories));
  }, []);

  // Get recent posts (most recent 5)
  const recentPosts = useMemo(() => {
    return [...mockPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return mockPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Calculate pagination
  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, page]);

  const totalFilteredPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1); // Reset to first page when searching
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setPage(1); // Reset to first page when filtering
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BlogHero />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <BlogGrid posts={paginatedPosts} />
              
              {totalFilteredPages > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={totalFilteredPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar
                categories={categories}
                recentPosts={recentPosts}
                selectedCategory={selectedCategory}
                onSearch={handleSearch}
                onCategorySelect={handleCategorySelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}