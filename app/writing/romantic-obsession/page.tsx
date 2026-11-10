import Link from "next/link";

export default function RomanticObsessionPage() { 
  return (
    <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto max-w-[480px]">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> 
                        {" / "}
                        <Link href = "/writing" className = "hover:underline">writing</Link>
                        {" / romantic obsession"}
                    </span>
                </h1>
            </header>

            <h1 className = "mt-4 text-xl text-stone-400">what is love?</h1>
            
            <h1 className = "mt-4 text-sm text-stone-400">in today's society we often misinterpret kindness for some sort of "love."
                a compliment. a smile. a hug. the slightest bit of attention can convince us that there is something deeper beneath the surface.
                the next day you dream. you imagine the scenarios, overanalysing the interactions. you begin to develop feelings for someone who you barely know. 
                <br/> <br/>
                what is this emotional investment from? why does their attention bring us happiness, while their absence leaves us feeling empty?
                <br/><br/>
                sometimes the answer has less to do with love and more to do with our inability to understand what we want from life. 
                everyday we want connection. the feeling of being appreciated. understood. and feeling important to someone. yet when we lack a clear 
                sense of direction, we begin attaching our whole personalities to someone because they provide something we struggle to find indepdently:
                <br/><br/>
                a sense of purpose.
                <br/><br/>
                they become your centre of the universe. your everything. day by day you develop to look forward to their messages, imagine a future together, and allow
                their smallest actions to influence your emotions. suddenly, your day revolves around them. 
                <br/><br/>
                <strong>but perhaps you're not entirely in love with that person. perhaps you're in love with the feeling of having something to look forward to everyday</strong>
                <br/><br/>
                i think purpose doesn't necessarily mean having a successful career or achieving something extradionary like a nobel prize. sometimes it simply means 
                enjoying the process of understanding ourselves, discovering what we value, what interests us, and what makes life meaningful.
                <br/><br/>
                understanding ourselves takes time. it requires us to experience life, to be uncertain, and to discover things we never knew we wanted. that is the essence of love.
                <br/><br/>
                of course, love is a natural human desire. everyone wants a little bit of it. but not every romantic attachment stems from a lack of purpose. at the end of the 
                day you must ask: do i want to share my life with this person or do i need this person to give my life meaning? maybe both. and that is fine. 
                <br/><br/>
                perhaps everything i've written becomes completely meaningless when that person eventually becomes your world. becomes what you work for. what you look forward to. 
                and what makes life worth experiencing. the very thing we mistake for a lack of purpose becomes our purpose itself.
                <br/><br/>
                <strong>that is the beauty of love.</strong>
            </h1>

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