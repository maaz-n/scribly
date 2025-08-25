import Link from 'next/link'
import { Separator } from './ui/separator'
import { Github, MoveRight } from 'lucide-react'


export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <p className='text-4xl font-bold'>Blogify</p>
                </Link>

                <div className='flex gap-5 font-bold justify-center mt-5'>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>

                <div className="my-8 flex justify-center items-center gap-6 text-sm">
                  <span className='text-muted-foreground text-sm flex items-center gap-2'>Check out the code <MoveRight/></span>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-muted-foreground hover:text-primary block">
                        <Github/>
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} WorldJournal, All rights reserved</span>
            </div>
        </footer>
    )
}