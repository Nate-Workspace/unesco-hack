import Header from "./_components/Header"
import VideoPlayer from "./_components/VideoPlayer"
import DebateInfo from "./_components/DebateInfo"
import LivePolling from "./_components/LivePolling"
import ChatSidebar from "./_components/ChatSidebar"
import { getDebateDetailsAction } from "./_actions/watch-debate.query"

export default async function WatchDebatePage() {
  const debateDetails = await getDebateDetailsAction("859f817f-f3ee-410b-956e-a42673d22801");
  console.log("Debate details data: ", debateDetails)
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <VideoPlayer />
            <DebateInfo Details={debateDetails} />
            <LivePolling Details={debateDetails}/>
          </div>

          <div className="lg:col-span-1">
            <ChatSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
