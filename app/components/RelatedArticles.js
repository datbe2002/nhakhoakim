export default function RelatedArticles({ articles }) {
  return (
    <section className="mt-16 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Bài viết liên quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <article key={index} className="group">
            <a href={article.url} className="block">
              <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
} 