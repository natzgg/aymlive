import { getSelf } from "@/lib/auth-service";
import { ConnectModal } from "./_components/connect-modal";
import KeyCard from "./_components/key-card";
import UrlCard from "./_components/url-card";
import { getStreamByUserId } from "@/lib/stream-service";

const KeysPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found.");
  }

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Keys & URLs</h1>
        <ConnectModal />
      </div>
      <UrlCard value={stream.serverUrl} />
      <KeyCard value={stream.streamKey} />
    </div>
  );
};

export default KeysPage;
