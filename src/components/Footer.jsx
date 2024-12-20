/* eslint-disable react/no-unknown-property */
function Footer() {
    return (
      <footer className=" text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              We build modern web solutions using the latest technologies like React, Tailwind CSS, and Vite. Stay connected for updates and resources.
            </p>
          </div>
  
          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-secondary duration-300">About</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-secondary duration-300">Portfolio</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-secondary duration-300">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary duration-300">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Connect With Us</h2>
            <div className="flex gap-5">
              <a href="https://twitter.com/__justcode" target="_blank" rel="noopener noreferrer">
                <svg  xmlns="http://www.w3.org/2000/svg" alt="Twitter" className="w-10 h-9 hover:scale-110 duration-300"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
              </a>
              <a href="https://github.com/emmamayne23" target="_blank" rel="noopener noreferrer">
                <svg  xmlns="http://www.w3.org/2000/svg" alt="Github"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" className="w-8 h-9 hover:scale-110 duration-300"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg  xmlns="http://www.w3.org/2000/svg" alt="LinkedIn"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" className="w-10 h-9 hover:scale-110 duration-300"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
              </a>
              <a href="https://emmamayne23@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" className="w-10 h-9 hover:scale-110 duration-300"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
              </a>
            </div>
          </div>
        </div>
  
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EMs. All rights reserved.
        </div>
        <div className="text-sm text-center my-2">
            Produced by: <span className="text-primary text-sm">Emmanuel Ziem Yaan-Tol</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  