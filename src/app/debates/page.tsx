import Header from "./_components/Header";
import PageHeader from "./_components/PageHeader";
import LiveDebatesSection from "./_components/LiveDebatesSection";
import UpcomingDebatesSection from "./_components/UpcomingDebatesSection";
import Footer from "./_components/Footer";

// Example: Fetch debates data from server (replace with DB/API call)
async function getDebatesData() {
  return {
    liveDebates: [
      {
        id: 1,
        title: "Freedom of Expression in Digital Age",
        description: "Should social media platforms have the right to moderate content?",
        watchers: 247,
        avatars: ["/young-debater.png", "/young-debater-2.png"],
        icon: "MessageSquare",
      },
      {
        id: 2,
        title: "Climate Justice & Youth Rights",
        description: "How can young people hold governments accountable for climate action?",
        watchers: 189,
        avatars: ["/climate-activist.png", "/placeholder-6tvcm.png"],
        icon: "Globe",
      },
      {
        id: 3,
        title: "Education Access & Equality",
        description: "Is free higher education a fundamental human right?",
        watchers: 156,
        avatars: ["/education-advocate.png", "/placeholder-qn21s.png"],
        icon: "Heart",
      },
    ],
    upcomingDebates: [
      {
        id: 1,
        title: "Privacy vs Security in Digital Era",
        description: "Should governments have access to encrypted communications for national security?",
        date: "Dec 15, 2024",
        time: "3:00 PM EST",
        applicationsOpen: true,
        interested: 247,
        icon: "Scale",
      },
      {
        id: 2,
        title: "Mental Health: A Universal Right?",
        description: "Should mental healthcare be treated as a fundamental human right with universal access?",
        date: "Dec 22, 2024",
        time: "2:00 PM EST",
        applicationsOpen: true,
        interested: 189,
        icon: "Heart",
      },
      {
        id: 3,
        title: "AI Ethics & Human Rights",
        description: "How do we ensure artificial intelligence respects human dignity and rights?",
        date: "Dec 28, 2024",
        time: "4:00 PM EST",
        applicationsOpen: false,
        interested: 156,
        icon: "Zap",
      },
      {
        id: 4,
        title: "Economic Rights in the Gig Economy",
        description: "Do gig workers deserve the same labor protections as traditional employees?",
        date: "Jan 5, 2025",
        time: "1:00 PM EST",
        applicationsOpen: false,
        interested: 203,
        icon: "TrendingUp",
      },
    ],
  };
}

export default async function DebatesPage() {
  const { liveDebates, upcomingDebates } = await getDebatesData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <LiveDebatesSection liveDebates={liveDebates} />
          <UpcomingDebatesSection upcomingDebates={upcomingDebates} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
