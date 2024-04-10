import KeyCard from "./_components/key-card";
import UrlCard from "./_components/url-card";

const KeysPage = () => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl">Keys & URLs</h1>
      <UrlCard value={"url testing"} />
      <KeyCard value={"key testing"} />
    </div>
  );
};

export default KeysPage;
