import Link from "next/link";

export default function PixefyMePage() { 
  return (
    <main className = "flex min-h-screen flex-col px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto flex w-full max-w-[480px] flex-1 flex-col">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> 
                        {" / "}
                        <Link href = "/projects" className = "hover:underline">projects</Link>
                        {" / pixefy me"}
                    </span>
                </h1>
            </header>

            <span className = "reveal-line" style = {{animationDelay: "0.5s"}}>
            <h1 className = "mt-6 text-2xl text-stone-50">pixefy me</h1>

            <a
            href = "https://github.com/jensenleedesignstudio/pixefy-me"
            target = "_blank"
            rel = "noopener"
            className="mt-4 inline-block text-stone-500 underline hover:text-stone-50"
            >
            github
            </a> 

            <h1 className = "mt-4 text-sm text-stone-400">pixefy me let's users draw on a canvas, upload an image, add written
                instructions, and generate publish ready characters from openai. the characters can be converted into 3d models via 
                stable fast 3d which is viewable directly on the application.
            </h1>
            </span>

            <span className = "reveal-line" style = {{animationDelay: "1s"}}>
            <iframe 
                className = "mt-6 aspect-video w-full rounded"
                src = "https://www.youtube.com/embed/zSaaSSfwRow?autoplay=1&mute=1&loop=1&playlist=zSaaSSfwRow&playsinline=1"
                title = "pixefy me import demo"
                allow = "autoplay"
                allowFullScreen
            ></iframe>
            </span>

        <nav className = "mt-auto flex flex-wrap justify-center gap-6 pt-8 text-stone-600">
          <a className="reveal-line" style={{ animationDelay: "2.5s" }} href = "mailto:j2355lee@uwaterloo.ca">email</a>
          <a className="reveal-line" style={{ animationDelay: "2.65s" }} href = "https://www.linkedin.com/in/jensen-lee-33b339319/" target = "_blank" rel = "noopener">linkedin</a>
          <a className="reveal-line" style={{ animationDelay: "2.8s" }} href = "https://github.com/jensenleedesignstudio" target = "_blank" rel = "noopener">github</a>
          <a className="reveal-line" style={{ animationDelay: "2.95s" }} href = "https://x.com/__JensenLee_" aria-label = "X profile" target = "_blank" rel = "noopener">𝕏</a>
        </nav>

        </div>
    </main>
    )
}