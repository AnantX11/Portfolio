import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const contactDetails = [
    { label: "Email now", value: "theaiverashop@gmail.com", icon: Mail, href: "mailto:theaiverashop@gmail.com" },
    { label: "Call now", value: "+91 98836 59291", icon: Phone, href: "tel:+919883659291" },
    { label: "Insta Now", value: "Send a Direct Message", icon: Instagram, href: "https://www.instagram.com/direct/t/18078353909176244/?__pwa=1" },
  ];

  const socialLinks = [
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/theaivera" },
  ];

  return (
    <section id="contact" className="py-10 md:py-10 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background soft red lighting flare */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-brand-wine/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative text-center">
        {/* Contact Details & Social Hub */}
        <div className="flex flex-col items-center justify-between text-center" id="contact-details-deck">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Ready To <span className="text-glow-red text-brand-light-red">Dominate?</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-white/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto"
            >
              Your brand deserves to stand out. Let's build something that makes your competitors uncomfortable. One conversation changes everything.
            </motion.p>

            {/* Detail Items */}
            <div className="flex flex-col items-center justify-center gap-6 mb-10">
              {contactDetails.map((item, dIdx) => (
                <motion.div 
                  key={dIdx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + dIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 items-center justify-center text-left"
                >
                  <div className="p-3 bg-brand-crimson/10 border border-brand-crimson/20 rounded-xl text-brand-crimson">
                    <item.icon className="w-5 h-5 text-glow-red" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block mb-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-brand-crimson font-mono text-xs font-semibold tracking-wide transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-sans text-xs font-semibold tracking-wide">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social footprint nodes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 border-t border-white/5 w-full flex flex-col items-center"
          >
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block mb-3">
              Connect
            </span>
            <div className="flex gap-4">
              {socialLinks.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  className="p-3 bg-white/3 hover:bg-brand-crimson border border-white/5 text-white/50 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer select-none"
                  title={`Our premium ${soc.label}`}
                >
                  <soc.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
