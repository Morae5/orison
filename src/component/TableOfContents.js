import React, { useEffect, useState } from 'react'
import '../css/TableOfContents.css'
import { useHeadsObserver } from './observer/useHeadsObserver'


//Make table collapsable when window small enough
export default function TableOfContents() {
    const [headings, setHeadings] = useState([])
    const {activeId} = useHeadsObserver()

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
            .map((elem) => ({
                id: elem.id,
                text: elem.innerText,
                level: Number(elem.nodeName.charAt(1))
        }))
        setHeadings(elements)
    }, [])

    const getClassName = (level) => {
        switch (level) {
            case 2:
                return 'head2'
            case 3:
                return 'head3'
            case 4:
                return 'head4'
            default:
                return null
        }
    }

    return (
        <>
            <div className="tocBackground"/>
            <nav className="toc">
                <ul>
                    {headings.map(heading => (
                        <li key={heading.id} className={getClassName(heading.level)}>
                            <a href={`#${heading.id}`} onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(`#${heading.id}`).scrollIntoView({
                                    behavior: "smooth"
                                })}}
                                style={{
                                    fontWeight: activeId === heading.id ? "bold" : "normal",
                                    borderBottom: "none"
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
