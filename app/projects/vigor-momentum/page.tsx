import Link from "next/link"

export default function VigorMomentumPage() {

return (
    <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto max-w-[480px]">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> 
                        {" / "}
                        <Link href = "/projects" className = "hover:underline">projects</Link>
                        {" / vigor momentum"}
                    </span>
                </h1>
            </header>

        <h1 className = "mt-6 text-2xl text-stone-50">vigor momentum</h1>

        <a
        href = "https://jensenleedesignstudio.github.io/Vigor-Momentum-2.0/"
        target = "_blank"
        rel = "noopener"
        className="mt-4 inline-block text-stone-500 underline hover:text-stone-50"
        >
        website
        </a> 
        <span aria-hidden = "true" className = "mx-2 text-stone-500">·</span>
        <a
        href = "https://github.com/jensenleedesignstudio/Vigor-Momentum-2.0"
        target = "_blank"
        rel = "noopener"
        className="mt-4 inline-block text-stone-500 underline hover:text-stone-50"
        >
        github
        </a> 
        

        <h1 className = "mt-4 text-sm text-stone-400">a personalised fitness platform using react, typescript, and vite to track workouts, 
            nutrition, recovery, and progress. developed a coaching engine that analyses training performance and recovery to provide 
            personalised recommendations and visualize long-term progress.</h1>

        <iframe 
            className = "mt-6 aspect-video w-full rounded"
            src = "https://www.youtube.com/embed/hiF0ycdNOG8?autoplay=1&mute=1&loop=1&playlist=hiF0ycdNOG8&playsinline=1"
            title = "block brawl demo"
            allow = "autoplay"
            allowFullScreen
        ></iframe>
        
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