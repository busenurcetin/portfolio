import Link from "next/link"
import { BookOpen, Calendar, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "JavaScript Galaksisinde Gezinti",
    date: "2023-06-15",
    slug: "javascript-galaksisinde-gezinti",
    excerpt: "JavaScript'in geniş evreninde bir yolculuğa çıkın ve temel kavramların yıldızlarını keşfedin.",
  },
  {
    id: 2,
    title: "React: Frontend'in Süpernovası",
    date: "2023-07-22",
    slug: "react-frontend-supernovasi",
    excerpt: "React'in patlayıcı gücüyle tanışın ve modern web geliştirmenin ufuklarını genişletin.",
  },
  {
    id: 3,
    title: "Kodlamanın Karanlık Maddesi: Hata Ayıklama",
    date: "2023-08-30",
    slug: "kodlamanin-karanlik-maddesi-hata-ayiklama",
    excerpt: "Hata ayıklamanın gizemli dünyasına dalın ve kodunuzun gizli sırlarını çözün.",
  },
]

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-space-accent text-center">
        Kozmik Günlük: Bir Kod Gezgininin Kronikleri
      </h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-card">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="blog-post-title">{post.title}</h2>
            </Link>
            <p className="blog-post-date">
              <Calendar className="mr-2" size={16} />
              Yıldız Tarihi: {post.date}
            </p>
            <p className="blog-post-excerpt">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="blog-post-link group">
              <BookOpen className="mr-2" size={18} />
              Görev Kaydını Oku
              <ChevronRight className="blog-post-link-icon group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

