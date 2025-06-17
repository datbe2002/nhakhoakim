'use client'

import { useState, useEffect } from 'react'

export default function TableOfContents({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0% -80% 0%' }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
      
      if (item.children) {
        item.children.forEach((child) => {
          const childElement = document.getElementById(child.id)
          if (childElement) observer.observe(childElement)
        })
      }
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-900">Nội dung chính</h4>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-500 hover:text-gray-700"
        >
          <svg className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`block text-sm py-1 px-2 rounded transition-colors ${
                    activeId === item.id
                      ? 'bg-blue-100 text-blue-800 font-medium'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.title}
                </a>
                {item.children && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(child.id)
                          }}
                          className={`block text-sm py-1 px-2 rounded transition-colors ${
                            activeId === child.id
                              ? 'bg-blue-100 text-blue-800 font-medium'
                              : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
} 