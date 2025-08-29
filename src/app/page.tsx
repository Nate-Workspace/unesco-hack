import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Users, MessageSquare, Vote, Bookmark, Play, Eye } from "lucide-react"


// added to read created debates from the database
import { getDebates } from "./debates/actions";


      export default async function HomePage() {
        const debates = await getDebates();

        const now = new Date();

        const liveDebates = debates.filter(debate => {
        const start = new Date(debate.startTime);
        const end = new Date(start.getTime() + debate.duration * 60000); // duration in minutes
        return start <= now && now <= end;
      });


        const upcomingDebates = debates.filter(
          d => new Date(d.startTime) > now
        );

        return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">YouthDebate</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground font-medium">Home</a>
            <a href="/debates" className="text-muted-foreground hover:text-foreground transition-colors">Debates</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Apply</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Join Now</Button>
            <Button variant="outline" size="sm">About</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-card to-accent/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-sans">
            Your Voice Matters in
            <span className="text-primary block">Human Rights</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            Join a vibrant community of young debaters discussing the most important human rights issues of our time.
            Engage, learn, and make your voice heard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Play className="w-5 h-5 mr-2" />
              Join Live Debate
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Eye className="w-5 h-5 mr-2" />
              Watch & Learn
            </Button>
          </div>
        </div>
      </section>

   
      {/* Live Debates Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center font-sans">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              Live Debates
            </h3>
            <Badge variant="secondary" className="bg-accent text-accent-foreground animate-pulse">
              {liveDebates.length} Active
            </Badge>
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
                <AvatarImage src="/young-debater-1.png" />
                <AvatarFallback>A1</AvatarFallback>
              </Avatar>
              <Avatar className="w-8 h-8 border-2 border-background">
                <AvatarImage src="/young-debater-2.png" />
                <AvatarFallback>B1</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost">
                <MessageSquare className="w-4 h-4 mr-1" />
                Ask
              </Button>
              <Button size="sm" variant="ghost">
                <Vote className="w-4 h-4 mr-1" />
                Poll
              </Button>
            </div>
          </div>
          <Button className="w-full">Join Discussion</Button>
        </CardContent>
      </Card>

          <div className="flex gap-6 overflow-x-auto py-4 scroll-smooth scroll-container">
            {liveDebates.map(debate => (
              <Card key={debate.id} className="min-w-[300px] border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-red-500 text-white">LIVE</Badge>
                  <CardTitle className="text-lg font-sans">{debate.title}</CardTitle>
                  <CardDescription className="font-serif">{debate.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Join Discussion</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Button className="w-full">Join Discussion</Button>
      </CardContent>
    </Card>

    {/* Card 6 */}
    <Card className="min-w-[300px] border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge className="bg-red-500 text-white">LIVE</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            95 watching
          </div>
        </div>
        <CardTitle className="text-lg font-sans">Youth Engagement in Politics</CardTitle>
        <CardDescription className="font-serif">
          How can young people actively participate in shaping government policies?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2">
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/youth-politics.png" />
              <AvatarFallback>G1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-5vg2g.png" />
              <AvatarFallback>P4</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost">
              <MessageSquare className="w-4 h-4 mr-1" />
              Ask
            </Button>
            <Button size="sm" variant="ghost">
              <Vote className="w-4 h-4 mr-1" />
              Poll
            </Button>
          </div>
        </div>
        <Button className="w-full">Join Discussion</Button>
      </CardContent>
    </Card>
  </div>
</div>
</section>



      {/* Upcoming Debates Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-foreground font-sans">Upcoming Debates</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingDebates.map(debate => (
              <Card key={debate.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-sans">{debate.title}</CardTitle>
                  <CardDescription className="font-serif">{debate.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(debate.debateDate).toDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(debate.startTime).toLocaleTimeString()}
                    </div>
                  </div>
                  <Button size="sm" variant="secondary">Apply to Debate</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 font-sans">
            Ready to Make Your Voice Heard?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-serif">
            Join thousands of young people engaging in meaningful discussions about human rights. Every voice matters,
            every perspective counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Apply as Debater
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Join as Audience
            </Button>
          </div>
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
