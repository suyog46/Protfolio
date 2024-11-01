import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  // Number of images in the carousel
  const imageCount = 5;
  return (
    <Carousel className="w-full  ">
      <CarouselContent>
        {Array.from({ length: imageCount }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
              <Card className="w-full ">
                <CardContent className="flex  items-center justify-center p-6 ">
                  {/* Display the image */}
                  <img 
                    src={`img/pj1_${index + 1}.jpg`} 
                    alt={`Slide ${index + 1}`} 
                    className="object-cover w-full h-full" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
