import MovingBackground from "../components/MovingBackground"; 
import Link from "next/link";
export default function Home(){ 

  return (
    <main className = "relative min-h-screen px-6 py-12 font-mono text-sm text-stone-300">
      
      <MovingBackground />
      
      <div className = "relative z-10 mx-auto max-w-[480px]">

        <header className = "flex items-center justify-between">
          
          <span className = "reveal-line" style = {{animationDelay: "0.8"}}>
          <h1 className = "text-stone-50">jensen lee</h1>
          </span>

          <nav className = "flex gap-6 text-stone-400">
            <Link href = "/writing">writing</Link>
            <Link href = "/projects">projects</Link>
          </nav>
        </header>

            <p className = "mt-6 leading-relaxed">
              <span className = "reveal-line" style = {{animationDelay: "1.3s"}}> 
                hi! i'm currently studying biomedical engineering at the {" "}
              <mark className = "bg-yellow-200">
              university of waterloo 
              </mark>
              . i'm interested in ml and full stack development. i'd love to chat!
              </span>
            </p>
        
        <nav className = "mt-auto flex flex-wrap justify-center gap-6 pt-8 text-stone-600">
          <a className="reveal-line" style={{ animationDelay: "2s" }} href = "mailto:j2355lee@uwaterloo.ca">email</a>
          <a className="reveal-line" style={{ animationDelay: "2.15s" }} href = "https://www.linkedin.com/in/jensen-lee-33b339319/" target = "_blank" rel = "noopener">linkedin</a>
          <a className="reveal-line" style={{ animationDelay: "2.3s" }} href = "https://github.com/jensenleedesignstudio" target = "_blank" rel = "noopener">github</a>
          <a className="reveal-line" style={{ animationDelay: "2.45s" }} href = "https://x.com/__JensenLee_" aria-label = "X profile" target = "_blank" rel = "noopener">𝕏</a>
        </nav>

      </div>
    </main>
  )

}