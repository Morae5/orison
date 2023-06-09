import { useEffect, useState, useRef } from 'react';

export function useHeadsObserver() {
    const observer = useRef()
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleObsever = (entries) => {
            entries.forEach((entry) => {
              if (entry?.isIntersecting) {
                setActiveId(entry.target.id)
              }
            })
          }
        
          observer.current = new IntersectionObserver(handleObsever, {
            rootMargin: "0px 0px -890px 0px",
            threshold: 1
          }
          )
        
          const elements = document.querySelectorAll("h2, h3", "h4")
          elements.forEach((elem) => observer.current.observe(elem))
          return () => observer.current?.disconnect()
    }, [])

    return {activeId}
}