function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-6 sm:mt-14 sm:py-8"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 text-gray-900">
          <span className="flx">
            &copy; 2024 RPG Gallery. Made with ❤️ by{" "}
            <a href="https://www.mateuseap.com" className="text-indigo-600">
              @mateuseap
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
