import Link from "next/link";

export default function ProjectsPage() {

  return (
    <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto max-w-[480px]">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> / projects</span>
                </h1>
            </header>

                <ul className = "mt-6 space-y-4">

                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/projects/pixefy-me">
                                pixefy me
                            </Link>
                            </h2>
                            <p className = "mt-1 text-xs text-stone-400">
                                an ai-powered platform using computer vision and generative AI to turn photos into personalised pixel-art avatars
                            </p>
                    </li>

                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/projects/block-brawl">
                                block brawl
                            </Link>
                            </h2>
                            <p className = "mt-1 text-xs text-stone-400">
                                a fast pace arcade boxing game using webcam-based controls and reinforced learning opponents
                            </p>
                    </li>
                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/projects/3d-liver-tumour-segmentation">
                                3d liver tumour segmentation
                            </Link>
                        </h2>
                            <p className = "mt-1 text-xs text-stone-400">
                                a 3d medical imaging project for liver tumour segmentation using deep learning techniques
                            </p>
                    </li>
                    <li>
                        <h2 className = "text-stone-300">
                            <Link href = "/projects/vigor-momentum">
                                vigor momentum
                            </Link>
                        </h2>
                            <p className = "mt-1 text-xs text-stone-400">
                                an all-in-one fitness tracking application using large data structures and algorithims
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