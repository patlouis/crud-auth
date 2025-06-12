function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} CRUD Auth. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/privacy" className="hover:text-indigo-600">Privacy</a>
          <a href="/terms" className="hover:text-indigo-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
