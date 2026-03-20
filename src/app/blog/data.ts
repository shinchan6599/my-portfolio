export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
  external: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "binary-business-1",
    title: "Binary Business: SaaS, Software Engineering & Business Strategy",
    excerpt: "Exploring the intersection of software engineering decisions and high-level SaaS business strategy.",
    date: "Binary Business Series",
    category: "Binary Business",
    link: "https://www.linkedin.com/posts/dhyey-bhansali_saas-softwareengineering-businessstrategy-activity-7430641613850202112-rhtK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACB5b2gBxoTdfo_CYcFsiQj5jwcdJdnCM60",
    external: true,
  },
  {
    id: "binary-business-2",
    title: "Binary Business: Bootstrapped vs Funded SaaS Startups",
    excerpt: "A deep dive into the dynamics of bootstrapped SaaS startups and how they scale efficiently.",
    date: "Binary Business Series",
    category: "Binary Business",
    link: "https://www.linkedin.com/posts/dhyey-bhansali_startups-bootstrapped-saas-activity-7433161143021592577-7UIZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACB5b2gBxoTdfo_CYcFsiQj5jwcdJdnCM60",
    external: true,
  },
  {
    id: "binary-business-3",
    title: "Binary Business: Tech Business & Entrepreneurship",
    excerpt: "Analyzing the role of technology in modern entrepreneurship and building sustainable technical moats.",
    date: "Binary Business Series",
    category: "Binary Business",
    link: "https://www.linkedin.com/posts/dhyey-bhansali_binarybusiness-techbusiness-entrepreneurship-activity-7435680768577687553-THOb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACB5b2gBxoTdfo_CYcFsiQj5jwcdJdnCM60",
    external: true,
  },
  {
    id: "binary-business-4",
    title: "Binary Business: Startups & Tech Value Creation",
    excerpt: "Understanding how startups create value through technology and strategic product decisions.",
    date: "Binary Business Series",
    category: "Binary Business",
    link: "https://www.linkedin.com/posts/dhyey-bhansali_binarybusiness-startups-techbusiness-activity-7438349478320930816-H2UO?utm_source=share&utm_medium=member_desktop&rcm=ACoAACB5b2gBxoTdfo_CYcFsiQj5jwcdJdnCM60",
    external: true,
  }
];

// Extract unique categories for the filter
export const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
