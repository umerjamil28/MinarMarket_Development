import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function ProductCard({
  _id,
  title,
  images,
  price,
  category,
  status
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Badge variant="default" className="absolute m-2 z-10">
          {category}
        </Badge>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images?.map((image, index) => (
                <CarouselItem key={image._id || index}>
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={image.url || "https://placehold.co/600x400/png"}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <h3 className="font-semibold py-4 px-2">{title}</h3>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">${price}</span>
          <Badge variant="secondary">Product</Badge>
        </div>
        <Link href={`/send-proposal/${_id}`} className="w-full">
          <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
            Send Proposal
          </button>
        </Link>
      </CardFooter>
    </Card>
  )
}


export function ServiceCard({
  _id,
  title,
  images,
  rate,
  category,
  status
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Badge variant="default" className="absolute m-2 z-10">
          {category}
        </Badge>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images?.map((image, index) => (
                <CarouselItem key={image._id || index}>
                  <AspectRatio ratio={4/3}>
                    <Image
                      src={image.url || "https://placehold.co/600x400/png"}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
              {
                images?.length === 0 && (
                  <CarouselItem>
                    <AspectRatio ratio={4/3}>
                      <Image
                        src="https://placehold.co/600x400/png"
                        alt={`${title} - Image`}
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                  </CarouselItem>
                )
              }
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <h3 className="font-semibold py-4 px-2">{title}</h3>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">${rate}</span>
          <Badge variant="secondary">Service</Badge>
        </div>
        <Link href={`/send-proposal/${_id}`} className="w-full">
          <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
            Send Proposal 
          </button>
        </Link>
      </CardFooter>
    </Card>
  )
}

