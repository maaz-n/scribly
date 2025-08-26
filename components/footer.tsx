import Link from 'next/link'
import { Github } from 'lucide-react'


export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <p className='text-4xl font-bold'>Scribly</p>
                </Link>

                <div className='flex gap-5 font-bold justify-center mt-5'>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>

                <div className="my-8 flex justify-center items-center gap-6 text-sm">
                    <Link
                        href="https://github.com/maaz-n/scribly"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-muted-foreground hover:text-primary block">
                        <Github/>
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Scribly, All rights reserved</span>
            </div>
        </footer>
    )
}