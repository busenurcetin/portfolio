import { notFound } from "next/navigation"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "JavaScript Galaksisinde Gezinti",
    date: "2023-06-15",
    slug: "javascript-galaksisinde-gezinti",
    content:
      "JavaScript galaksisinde kozmik bir yolculuğa çıkın. Bu yazıda, değişkenlerin gök cisimlerini, fonksiyonların asteroit kuşaklarını ve asenkron programlamanın kara deliklerini keşfedeceğiz. JavaScript'in sürekli genişleyen evreninde gezinmek için roketlerinizi ateşleyin!",
  },
  {
    id: 2,
    title: "React: Frontend'in Süpernovası",
    date: "2023-07-22",
    slug: "react-frontend-supernovasi",
    content:
      "Frontend geliştirmenin süpernovası React'in patlayıcı gücüne tanık olun. Bileşenlerin kuantum mekaniğine, hook'ların çekim gücüne ve durum yönetiminin karanlık enerjisine dalacağız. Bu frontend gücünü kullanmayı öğrenirken bize katılın!",
  },
  {
    id: 3,
    title: "Kodlamanın Karanlık Maddesi: Hata Ayıklama",
    date: "2023-08-30",
    slug: "kodlamanin-karanlik-maddesi-hata-ayiklama",
    content:
      "Kod evrenimizi bir arada tutan karanlık madde olan hata ayıklamanın gizemli alemine girin. Anomalileri tespit etmeyi, ele avuca sığmaz hataları takip etmeyi ve kod tabanınızın hassas dengesini korumayı öğrenin. Programlarınızın en karanlık köşelerini aydınlatacak araçlarla kendinizi donatın!",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id)

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center text-space-accent hover:text-space-accent-hover mb-6 transition-colors"
      >
        <ArrowLeft className="mr-2" size={18} />
        Kozmik Günlüğe Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-space-accent">{post.title}</h1>
      <p className="text-space-light-muted mb-6">Yıldız Tarihi: {post.date}</p>
      <div className="prose prose-invert prose-space mb-12">
        <p>{post.content}</p>
      </div>
      <div className="border-t border-space-light-muted pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-space-accent">Diğer Kozmik Keşifler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((otherPost) => (
            <Link
              key={otherPost.id}
              href={`/blog/${otherPost.slug}`}
              className="block p-6 bg-space-dark-blue rounded-lg shadow-lg hover:shadow-space-accent transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2 text-space-light hover:text-space-accent transition-colors">
                {otherPost.title}
              </h3>
              <p className="text-space-light-muted mb-4">Yıldız Tarihi: {otherPost.date}</p>
              <span className="inline-flex items-center text-space-accent hover:text-space-accent-hover transition-colors">
                <BookOpen className="mr-2" size={18} />
                Görev Kaydını Oku
              </span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}

