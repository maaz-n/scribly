import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link";

export function LikedPostCard({ title, content, image, slug }: { title: string; content: string; image: string, slug: string }) {
    return (
        <Link href={`/post/${slug}`}>

            <Card className="flex flex-row items-stretch overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Post Image */}
                <div className="relative w-1/3 min-h-[180px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-lg ml-4"
                    />
                    <Badge className="absolute top-3 right-1 bg-primary shadow-md">
                        ❤
                    </Badge>
                </div>

                {/* Post Content */}
                <CardContent className="flex flex-col justify-center p-6 w-2/3">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h2>
                    <div
                        className="text-muted-foreground line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </CardContent>
            </Card>
        </Link>
    )
}
