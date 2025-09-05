import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link";

export function LikedPostCard({ title, content, image, slug }: { title: string; content: string; image: string, slug: string }) {
    return (
        <Link href={`/post/${slug}`}>

            <Card className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full md:w-1/3 md:ml-4 flex justify-center md:justify-start px-3 md:px-0">
                    <div className="relative w-full aspect-video md:aspect-auto md:min-h-[200px] rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary shadow-md">
                            ❤
                        </Badge>
                    </div>
                </div>

                <CardContent className="flex flex-col justify-center p-4 sm:p-6 w-full md:w-2/3">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-1">
                        {title}
                    </h2>
                    <div
                        className="text-sm sm:text-base text-muted-foreground line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </CardContent>
            </Card>




        </Link>
    )
}
