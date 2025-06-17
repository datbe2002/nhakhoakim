export default function ArticleLayout({ children }) {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="article-content">
        {children}
      </div>
    </article>
  )
} 