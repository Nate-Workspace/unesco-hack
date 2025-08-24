import Header from "./_components/Header"
import VideoPlayer from "./_components/VideoPlayer"
import DebateInfo from "./_components/DebateInfo"
import LivePolling from "./_components/LivePolling"
import ChatSidebar from "./_components/ChatSidebar"

export default function WatchDebatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-4">
            <VideoPlayer />
            <DebateInfo />
            <LivePolling />
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <ChatSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
