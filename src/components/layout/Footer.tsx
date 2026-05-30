import { Leaf, Mail, MapPin, Phone } from 'lucide-react';
import certLicensed from '@/assets/cert-licensed.png';
import certFssai from '@/assets/cert-fssai.png';
import certGmp from '@/assets/cert-gmp.png';
import certIso from '@/assets/cert-iso.jpg';

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-bold">Ayurrekha</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ancient Wisdom. Modern Wellness. Combining traditional Ayurvedic wisdom with scientific research and GMP-certified manufacturing.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Our Products</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Manufacturing Services</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Knowledge Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Healthcare Supplements</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Beauty & Hair Care</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Baby Wellness</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Immunity Boosters</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Personal Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">Ayurrekha Ayurvedic Research Centre<br/>Kochi, Kerala, India</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@ayurrekha.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">info@ayurrekha.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certification Logos Strip */}
        <div className="border-t border-white/10 pt-8 mt-4 mb-4">
          <p className="text-center text-xs text-white/40 uppercase tracking-widest mb-6 font-medium">
            Certified &amp; Compliant
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { src: certLicensed, alt: 'Licensed' },
              { src: certFssai, alt: 'FSSAI Certified' },
              { src: certGmp, alt: 'GMP Quality' },
              { src: certIso, alt: 'ISO 9001:2015' },
            ].map(cert => (
              <div
                key={cert.alt}
                title={cert.alt}
                className="w-14 h-14 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center p-2 cursor-default"
              >
                <img src={cert.src} alt={cert.alt} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-4 text-center md:flex md:justify-between md:items-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Ayurrekha Healthcare. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center mt-4 md:mt-0 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
