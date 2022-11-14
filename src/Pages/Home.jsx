import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Home;
