

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

const TeamGallery = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "CEO & Founder",
      bio: "Digital marketing expert with over 15 years of experience driving growth for businesses.",
      image: "/team/ceo.jpg", // Replace with actual image path
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "Creative Director",
      bio: "Award-winning designer with a passion for creating compelling brand experiences.",
      image: "/team/creative-director.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "SEO Strategist",
      bio: "Technical SEO specialist with a track record of increasing organic traffic by 200%+.",
      image: "/team/seo-specialist.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Jessica Martinez",
      title: "PPC Manager",
      bio: "Data-driven advertising expert who maximizes ROI for client campaigns.",
      image: "/team/ppc-manager.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      title: "Web Developer",
      bio: "Full-stack developer specializing in high-performance, conversion-optimized websites.",
      image: "/team/developer.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Emily Robinson",
      title: "Content Strategist",
      bio: "Storyteller and content expert who creates engaging narratives that convert.",
      image: "/team/content-strategist.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a2540] mb-12">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Team Member Image */}
              <div className="relative h-64 bg-gradient-to-r from-[#0a2540] to-[#00d4ff] flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1">{member.name}</h3>
                <p className="text-[#00d4ff] font-medium mb-4">{member.title}</p>
                <p className="text-[#666] mb-6">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-[#0a2540] hover:text-[#00d4ff] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-[#0a2540] hover:text-[#00d4ff] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;