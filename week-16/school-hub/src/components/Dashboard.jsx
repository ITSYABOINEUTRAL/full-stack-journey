import SideBar from "./layout/SideBar";
import TopBar from "./layout/TopBar";
import MainContent from "./MainContent";

// The logged-in layout: sidebar + top bar + page content.
export default function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <TopBar user={user} onLogout={onLogout} />

        <MainContent />
      </div>
    </div>
  );
}
