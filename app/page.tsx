"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink, Github, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MobileMenu } from "@/components/mobile-menu"

export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="flex h-14 items-center px-4">
          <MobileMenu />
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span className="font-bold">Your Name</span>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation (20% - hidden on mobile) */}
      <div className="hidden md:flex w-[20%] border-r bg-muted/20 p-6 flex-col h-screen sticky top-0 overflow-y-auto">
        <div className="flex items-center space-x-2 mb-8">
          <User className="h-6 w-6" />
          <span className="font-bold text-xl">Your Name</span>
        </div>

        {/* Navigation Links */}
        <div className="mb-8">
          <nav className="flex flex-col space-y-2">
            <Link
              href="#projects"
              className="px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm font-medium">
              About
            </Link>
            <Link
              href="/resume.pdf"
              className="px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm font-medium flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Link>
          </nav>
        </div>

        <Separator className="my-4" />

        {/* Contact & Links */}
        <div className="mt-auto">
          <h3 className="font-bold text-lg mb-4">Contact & Links</h3>
          <div className="flex flex-col space-y-4">
            <Link
              href="mailto:your-email@example.com"
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>your-email@example.com</span>
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content (80% on desktop, 100% on mobile) */}
      <div className="w-full md:w-[80%] overflow-y-auto">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Your Name</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate developer showcasing my course projects and skills
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button className="gap-1">
                      View My Projects <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Course Projects</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the projects I've completed during my coursework
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 1"
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>E-Commerce Platform</CardTitle>
                    <CardDescription className="mt-2">
                      A full-stack e-commerce application with user authentication, product catalog, and shopping cart
                      functionality.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>MongoDB</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link href="#" className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 2"
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>Weather Dashboard</CardTitle>
                    <CardDescription className="mt-2">
                      A weather application that displays current and forecasted weather data using a third-party API.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>JavaScript</Badge>
                      <Badge>API Integration</Badge>
                      <Badge>CSS</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link href="#" className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 3"
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>Task Management App</CardTitle>
                    <CardDescription className="mt-2">
                      A productivity application that allows users to create, organize, and track their tasks and
                      projects.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Firebase</Badge>
                      <Badge>Tailwind CSS</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link href="#" className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 4"
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>Data Visualization Dashboard</CardTitle>
                    <CardDescription className="mt-2">
                      An interactive dashboard that visualizes complex datasets using charts and graphs.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>D3.js</Badge>
                      <Badge>React</Badge>
                      <Badge>CSV Processing</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link href="#" className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 5"
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>Social Media Clone</CardTitle>
                    <CardDescription className="mt-2">
                      A social media platform with user profiles, posts, comments, and real-time notifications.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Socket.io</Badge>
                      <Badge>Express</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link href="#" className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Project 6"
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle>Machine Learning Model</CardTitle>
                    <CardDescription className="mt-2">
                      A predictive model that analyzes data patterns and makes accurate predictions.
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>TensorFlow</Badge>
                      <Badge>Data Science</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Link href="#" className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a passionate developer currently pursuing [Your Degree/Course] at [Your Institution]. I love
                    building applications that solve real-world problems and am constantly learning new technologies to
                    improve my skills.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">[Your Degree/Course] - [Your Institution] (20XX - Present)</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Interests</h3>
                  <p className="text-muted-foreground">
                    Web Development, Mobile Applications, UI/UX Design, Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="w-full border-t py-6">
            <div className="container px-4 md:px-6">
              <p className="text-center text-sm leading-loose text-muted-foreground">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
