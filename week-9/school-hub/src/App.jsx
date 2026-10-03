import SideBar from './components/layout/SideBar'
import Header from './components/layout/Header'
import MainContent from './components/MainContent'
const App = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <Header />

        <MainContent />
      </div>

      
    </div>
  );
}

export default App;