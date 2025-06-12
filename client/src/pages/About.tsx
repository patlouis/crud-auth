import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <h1 className="text-5xl font-bold text-indigo-800 drop-shadow-md">
          About
        </h1>
      </div>
        <Footer />
    </div>
  );
}

export default About;
