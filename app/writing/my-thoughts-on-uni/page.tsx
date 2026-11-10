import Link from "next/link";

export default function MyThoughtsOnUniPage() { 
  return (
    <main className = "min-h-screen bg-[#1a1a1a] px-6 py-12 font-mono text-sm text-stone-300">
        <div className = "mx-auto max-w-[480px]">

            <header className = "flex items-center justify-between">
                <h1 className = "text-stone-50">
                    <Link href = "/">jensen lee</Link>
                    <span className = "text-stone-400"> 
                        {" / "}
                        <Link href = "/writing" className = "hover:underline">writing</Link>
                        {" / my thoughts on university so far"}
                    </span>
                </h1>
            </header>

            <h1 className = "mt-4 text-xl text-stone-400">two months in waterloo</h1>

            <h1 className = "mt-4 text-sm text-stone-400">
                it's been two months. somehow it feels like two weeks and two years at the same time. 
                <br/><br/>
                where do i even begin? university is like the final boss of schooling yet it doesn't feel like it at all. 
                for me it's less about what you learn and the struggle for grades, but what you do with your time. i hate to admit it but i feel like a chud everyday. 
                it's odd. in university you're presented with 24 free hours.
                <br/><br/>
                no obligations. no chores. and although it's sad to say no family. 
                <br/><br/>
                i've spent way too many hours exploring this old campus. more than i'd like to admit. i met so many cool "strangers?" who somehow
                become familar faces in a week or two. and i've spent a quite a bit of time just talking and hanging out with people. 
                the next day it hits me. there is an enourmous pile of papers and work i have to do. 
                <br/><br/>
                tommorow is a reccuring theme.
                <br/><br/>
                there's this constant feeling that i'm behind. behind on lectures. behind on sleep. behind on the nightly debriefs #fomo. behind 
                on whatever everyone else seems to be doing with their lives. it's funny how you can be surrounded by thousands of students the same age 
                as you and still you feel like you're the only one who has absolutely no idea what's going on. what to do next. 
                <br/><br/>
                and yet, i don't think i'd trade these past two months for anything. 
                <br/><br/>
                find the perfect in the imperfect. somwhere along the way bike cage became my favourite place. not because there's anything fancy or special 
                about it like e7. it's just a bike cage. small homey. but i love it because of how imperfect it is. where a quick conversation about 
                brain rot somehow turns into hours, where the most pointless discussions become the funniest memories. where ultimately the best times talking 
                turns into some of the most valuable lessons and information i learned. 
                <br/><br/>
                i remember taliking about this with a few friends. i wonder how many places that we'll remember when we get older. the 4 am nights. the debriefs. 
                the places that mean absolutely nothing to a stranger but somehow hold massive chapters of our lives. 
                <br/><br/>
                one of the biggest contributors to these chapters of my life have been saying yes. random plans. unfamilar places. conversations 
                with people i probably wouldn't have apparoached before. at times nothing comes out of it. somtimes i go home where 
                i genuinely wonder why i even bothered. but ocassionally, something happens that makes the entire day worth remembering. 
                <br/><br/>
                and i think that is what i've been enjoying the most. not knowing. 
                <br/><br/>
                not knowing who i'll meet tommorow. where i'll end up next weekend. whether the people i talked to yesterday 
                will become lifelong friends. 
                <br/><br/>
                everyday i still worry about falling behind. am i really doing enough to get to where i wanna be. but maybe along 
                this short journey i've been measuring my days using the wrong things. because when i think back of these two months i don't remember the assignments
                i submitted or the hours i spent studying nearly as much as i remember the nights that went a little too long. the conversations that made an 
                unfamilar city feel like home. 
                <br/><br/>
                i came to waterloo expecting to figure out what i wanted to do with my life. 
                <br/><br/>
                two months later, i've done that maybe a little bit, but i have more questions than when i arrived. 
                <br/><br/>
                i've learned that a perfectly good day can consist of getting nothing done. 
                <br/><br/>
                <strong>maybe, just maybe, i'll catch up tommorow. but immma chud out a little first.</strong>



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