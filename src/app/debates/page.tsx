import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Vote,
  Bookmark,
  Play,
  Eye,
  Search,
  Filter,
  BookmarkCheck,
  TrendingUp,
  Globe,
  Scale,
  Heart,
  Zap,
  Plus,
} from "lucide-react"

export default function DebatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">YouthDebate</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/debates" className="text-foreground font-medium">
                Debates
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Apply
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Join Now</Button>
              <Button size="sm" asChild>
                <a href="/debates/create">
                  <Plus className="w-4 h-4 mr-1" />
                  Create Debate
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 via-card to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">All Debates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif leading-relaxed">
              Explore ongoing and upcoming debates on critical human rights issues. Join the conversation that matters.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search debates by topic, debater, or keyword..."
                  className="pl-10 bg-background/80 backdrop-blur-sm"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-background/80 backdrop-blur-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  <SelectItem value="freedom">Freedom of Expression</SelectItem>
                  <SelectItem value="privacy">Privacy Rights</SelectItem>
                  <SelectItem value="education">Education Access</SelectItem>
                  <SelectItem value="climate">Climate Justice</SelectItem>
                  <SelectItem value="health">Mental Health</SelectItem>
                  <SelectItem value="equality">Gender Equality</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-32 bg-background/80 backdrop-blur-sm">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Debates Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="live">Live</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {/* Live Debates Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground font-sans flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    Live Debates
                  </h3>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    3 Active
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {/* Live Debate Cards */}
                  <Card className="border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-red-500 text-white">LIVE</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          247 watching
                        </div>
                      </div>
                      <CardTitle className="text-lg font-sans">Freedom of Expression in Digital Age</CardTitle>
                      <CardDescription className="font-serif">
                        Should social media platforms have the right to moderate content?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex -space-x-2">
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/young-debater.png" />
                            <AvatarFallback>A1</AvatarFallback>
                          </Avatar>
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/young-debater-2.png" />
                            <AvatarFallback>B1</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Vote className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm" asChild>
                          <a href="/debates/1/join">
                            <Play className="w-4 h-4 mr-1" />
                            Join
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="/debates/1/watch">
                            <Eye className="w-4 h-4 mr-1" />
                            Watch
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-red-500 text-white">LIVE</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          189 watching
                        </div>
                      </div>
                      <CardTitle className="text-lg font-sans flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-primary" />
                        Climate Justice & Youth Rights
                      </CardTitle>
                      <CardDescription className="font-serif">
                        How can young people hold governments accountable for climate action?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex -space-x-2">
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/climate-activist.png" />
                            <AvatarFallback>C1</AvatarFallback>
                          </Avatar>
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/placeholder-6tvcm.png" />
                            <AvatarFallback>P1</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Vote className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm" asChild>
                          <a href="/debates/2/join">
                            <Play className="w-4 h-4 mr-1" />
                            Join
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="/debates/2/watch">
                            <Eye className="w-4 h-4 mr-1" />
                            Watch
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-red-500 text-white">LIVE</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          156 watching
                        </div>
                      </div>
                      <CardTitle className="text-lg font-sans flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-primary" />
                        Education Access & Equality
                      </CardTitle>
                      <CardDescription className="font-serif">
                        Is free higher education a fundamental human right?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex -space-x-2">
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/education-advocate.png" />
                            <AvatarFallback>E1</AvatarFallback>
                          </Avatar>
                          <Avatar className="w-8 h-8 border-2 border-background">
                            <AvatarImage src="/placeholder-qn21s.png" />
                            <AvatarFallback>S1</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Vote className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1" size="sm" asChild>
                          <a href="/debates/3/join">
                            <Play className="w-4 h-4 mr-1" />
                            Join
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="/debates/3/watch">
                            <Eye className="w-4 h-4 mr-1" />
                            Watch
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Upcoming Debates Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground font-sans">Upcoming Debates</h3>
                  <Badge variant="outline">12 Scheduled</Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-accent/10">
                          Tomorrow
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <BookmarkCheck className="w-4 h-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">247 interested</span>
                        </div>
                      </div>
                      <CardTitle className="font-sans flex items-center">
                        <Scale className="w-4 h-4 mr-2 text-primary" />
                        Privacy vs Security in Digital Era
                      </CardTitle>
                      <CardDescription className="font-serif">
                        Should governments have access to encrypted communications for national security?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Dec 15, 2024
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          3:00 PM EST
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Applications Open
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            Notify Me
                          </Button>
                          <Button size="sm">Apply to Debate</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-accent/10">
                          Next Week
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">189 interested</span>
                        </div>
                      </div>
                      <CardTitle className="font-sans flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-primary" />
                        Mental Health: A Universal Right?
                      </CardTitle>
                      <CardDescription className="font-serif">
                        Should mental healthcare be treated as a fundamental human right with universal access?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Dec 22, 2024
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          2:00 PM EST
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Applications Open
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            Notify Me
                          </Button>
                          <Button size="sm">Apply to Debate</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-accent/10">
                          Dec 28
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">156 interested</span>
                        </div>
                      </div>
                      <CardTitle className="font-sans flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-primary" />
                        AI Ethics & Human Rights
                      </CardTitle>
                      <CardDescription className="font-serif">
                        How do we ensure artificial intelligence respects human dignity and rights?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Dec 28, 2024
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          4:00 PM EST
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Applications Soon
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            Notify Me
                          </Button>
                          <Button size="sm" disabled>
                            Coming Soon
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-accent/10">
                          Jan 5
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <span className="text-sm text-muted-foreground">203 interested</span>
                        </div>
                      </div>
                      <CardTitle className="font-sans flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                        Economic Rights in the Gig Economy
                      </CardTitle>
                      <CardDescription className="font-serif">
                        Do gig workers deserve the same labor protections as traditional employees?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Jan 5, 2025
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          1:00 PM EST
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Applications Soon
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            Notify Me
                          </Button>
                          <Button size="sm" disabled>
                            Coming Soon
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Debates
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="live">
              {/* Live debates only content */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">Live debates content would be filtered here...</p>
              </div>
            </TabsContent>

            <TabsContent value="upcoming">
              {/* Upcoming debates only content */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">Upcoming debates content would be filtered here...</p>
              </div>
            </TabsContent>

            <TabsContent value="completed">
              {/* Completed debates content */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">Completed debates content would be filtered here...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground">YouthDebate</h4>
              </div>
              <p className="text-muted-foreground font-serif">Empowering young voices in human rights discussions.</p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3 font-sans">Platform</h5>
              <ul className="space-y-2 text-muted-foreground font-serif">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Live Debates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Apply to Debate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3 font-sans">Support</h5>
              <ul className="space-y-2 text-muted-foreground font-serif">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3 font-sans">Legal</h5>
              <ul className="space-y-2 text-muted-foreground font-serif">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground font-serif">
            <p>
              &copy; 2024 YouthDebate. All rights reserved. Built for the next generation of human rights advocates.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
