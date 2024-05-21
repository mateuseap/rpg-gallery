import Footer from "../Footer";
import Navbar from "../Navbar";

interface DefaultPageProps {
  children: React.ReactNode;
}

export default function DefaultPage({ children }: DefaultPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
