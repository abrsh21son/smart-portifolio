import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import { projects } from "@/constantData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { TooltipContent } from "@/components/ui/tooltip";

function Work() {
  return (
    <Container className="mt-24 py-3 md:py-6 max-w-[1000px]">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {projects.map((project, id) => (
            <CarouselItem key={id}>
              <Card className="bg-[#0B1120] border-lightColor/20 text-white group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    <div className="w-full md:w-1/2 order-2 md:order-1 md:mb-0 ">
                      <div className="space-y-5">
                        <h2 className="text-3xl font-black w-fit bg-clip-text text-transparent  bg-gradient-to-r from-purple-400 via-green-600 to-red-500 group-hover:text-green-300">
                          {project.id}
                        </h2>
                        <h2 className="text-xl md:text-2xl font-bold leading-none bg-clip-text text-transparent  bg-gradient-to-r from-purple-400 via-green-600 to-red-500 group-hover:text-green-300">
                          {project.title}
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold leading-none text-white">
                          {project?.catagory} project
                        </h3>
                        <p className="text-sm md:text-base text-white/60">
                          {project?.description}
                        </p>
                        <ul className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
                          {project?.stack.map((item, index) => (
                            <li
                              className="text-sm md:text-base text-lightColor"
                              key={index}
                            >
                              {item}
                              {index != project.stack?.length - 1 && ","}
                            </li>
                          ))}
                        </ul>
                        <div className="w-full h-1 text-gray-700  mr-10 bg-gray-800/60 mb-5">
                          {" "}
                        </div>
                        <div className=" flex gap-3">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={project?.liveURL}
                                  target="blank"
                                  className=""
                                >
                                  <Button className="bg-lightColor/5 text-white border-lightColor hover:bg-lightColor/45">
                                    <ArrowUpRight size={30} />
                                    <span className="sr-only">
                                      View project live
                                    </span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent className="bg-transparent text-white ml-10">
                                view live project
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link
                                  href={project?.liveURL}
                                  target="blank"
                                  className=""
                                >
                                  <Button className="bg-lightColor/5 text-white border-lightColor hover:bg-lightColor/45">
                                    <Github size={30} />
                                    <span className="sr-only">
                                      Viw On Github
                                    </span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent className=" bg-transparent text-white ml-10">
                                Viw On Github
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <div className="relative h-auto bg-gray-700 overflow-hidden rounde-lg ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-fit h-80"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=" absolute -top-8 right-10 ">
          <CarouselPrevious className="bg-lightColor/5 text-white border-lightColor/10 hover:bg-lightColor/45 rounded-md " />
          <CarouselNext className="bg-lightColor/5 text-white border-lightColor/10 hover:bg-lightColor/45 rounded-md " />
        </div>
      </Carousel>
    </Container>
  );
}

export default Work;
