import Link from "next/link";
import Image from "next/image";

export default function MyThoughtsOnGamingPage() { 
  return (
    <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto max-w-[480px]">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> 
                        {" / "}
                        <Link href = "/writing" className = "hover:underline">writing</Link>
                        {" / my thoughts on gaming"}
                    </span>
                </h1>
            </header>
        
            <h1 className = "mt-4 text-sm text-stone-400">in progress... for now look at some of these:</h1>

            <div className = "mx-auto mt-10 space-y-6 max-w-[960px] text-center">
                <figure>
                    <Image 
                        src = "/photos/valorant1.jpg"
                        alt = "valorant screenshot"
                        width = {2816}
                        height = {1016}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/valorant2.jpg"
                        alt = "valorant screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/immortal3.jpg"
                        alt = "valorant screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/immortal2.jpg"
                        alt = "valorant screenshot"
                        width = {1222}
                        height = {864}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/immortal 1.jpg"
                        alt = "valorant screenshot"
                        width = {771}
                        height = {850}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/fortnite1.jpg"
                        alt = "fortnite screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/fortnite2.jpg"
                        alt = "fortnite screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/fortnite3.jpg"
                        alt = "fortnite screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/overwatch1.jpg"
                        alt = "overwatch screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

                <figure>
                    <Image 
                        src = "/photos/apexlegends1.jpg"
                        alt = "apex legends screenshot"
                        width = {2168}
                        height = {1058}
                        className = "block h-auto w-full"
                    />      
                </figure>

            </div>


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