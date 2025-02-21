// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
export default function Testimonials(){
    return (<>
    <div className="container mx-auto">
      <div className="px-24"><h1 className="text-[#4A42A3] font-bold">Testimonials</h1></div>
    <div className="flex flex-col justify-center items-center">
        {/* <Carousel className="w-full max-w-lg">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious size="icon" className="bg-[#4A42A3] text-white" />
      <CarouselNext size="icon" className="bg-[#4A42A3] text-white" />
    </Carousel> */}
    </div>
    </div></>);
}