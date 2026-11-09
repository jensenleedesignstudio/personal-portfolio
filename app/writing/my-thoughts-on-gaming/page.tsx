import Link from "next/link";

export default function MyThoughtsOnGamingPage() { 
  return (
    <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto max-w-[480px]">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> 
                        {" / "}
                        <Link href = "/writing" className = "hover:underline">writings</Link>
                        {" / my thoughts on gaming"}
                    </span>
                </h1>
            </header>

            <h1 className = "mt-4 text-sm text-stone-400">in progress...</h1>

        <nav className = "mt-6 flex gap-6 text-stone-600"> 
          <a href = "mailto:j2355lee@uwaterloo.ca">email</a>
          <a href = "https://www.linkedin.com/in/jensen-lee-33b339319/" target = "_blank" rel = "noopener">linkedin</a>
          <a href = "https://github.com/jensenleedesignstudio" target = "_blank" rel = "noopener">github</a>
          <a href = "https://x.com/__JensenLee_" aria-label = "X profile" target = "_blank" rel = "noopener">𝕏</a>
        </nav>

        </div>
    </main>
    )
}