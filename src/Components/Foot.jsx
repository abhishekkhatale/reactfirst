import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-[#1A98D2]">Technoholic</h2>
            <p className="text-sm text-gray-300">
              Bringing you the latest in tech innovations and gadgets. Stay connected, stay ahead.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 15.2-18 9.2 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5.4c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
            </div>
          </div>
          <div className="space-y-4 animate-fade-in animation-delay-200">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Products</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
          <div className="space-y-4 animate-fade-in animation-delay-400">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                text="info@technoholic.com" 
              />
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                text="+1 (555) 123-4567" 
              />
              <ContactItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                text="123 Tech Street, Silicon Valley, CA 94000" 
              />
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400 animate-fade-in animation-delay-600">
          © {new Date().getFullYear()} Technoholic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
      >
        {children}
      </a>
    </li>
  )
}

const ContactItem = ({ icon, text }) => {
  return (
    <li className="flex items-center space-x-2 text-gray-400">
      {icon}
      <span>{text}</span>
    </li>
  )
}

export default Footer