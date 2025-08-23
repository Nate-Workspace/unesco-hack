// app/debates/[id]/join/page.tsx
import Header from "./_components/Header"
import SelfPreviewCard from "./_components/SelfPreviewCard"
import DebateStatusCard from "./_components/DebateStatusCard"
import TechnicalCheckCard from "./_components/TechnicalCheckCard"
import Sidebar from "./_components/Sidebar"

export default function JoinDebatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <SelfPreviewCard />
            <DebateStatusCard />
            <TechnicalCheckCard />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
