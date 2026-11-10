import Link from "next/link";

export default function WritingPage() {

    return (
        <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
            <div className = "mx-auto max-w-[480px]">
                
                <header className = "flex items-center justify-between">
                    <h1 className = "text-stone-50">
                        <Link href = "/">jensen lee</Link>
                        <span className = "text-stone-400"> / writing</span>
                    </h1>
                </header>

                <ul className = "mt-6 space-y-4">

                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/writing/my-thoughts-on-uni">
                                my thoughts on university so far
                            </Link>
                        </h2>
                        <p className = "mt-1 text-xs text-stone-400">
                            waterloo and the breakdown of my first 2 months 
                        </p>
                    </li>

                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/writing/my-thoughts-on-gaming">
                                my thoughts on gaming
                            </Link>
                        </h2>
                        <p className = "mt-1 text-xs text-stone-400">
                            a reflection on gaming and its impact on my life
                        </p>
                    </li>

                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/writing/romantic-obsession">
                                romantic obsession
                            </Link>
                        </h2>
                        <p className = "mt-1 text-xs text-stone-400">
                            your lack of personal purpose is causing your romantic obsession
                        </p>
                    </li>
                </ul>


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