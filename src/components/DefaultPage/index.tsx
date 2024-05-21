import Navbar from "../Navbar";
import StyledBackground from "../StyledBackground";
import Footer from "../Footer";

interface DefaultPageProps {
  children: React.ReactNode;
}

export default function DefaultPage({ children }: DefaultPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="isolate sm:mb-8 mb-14 flex-grow">
        <StyledBackground />
        {children}
      </main>
      <Footer />
    </div>
  );
}
