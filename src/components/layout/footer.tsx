import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  academy: [
    { label: "About Us", href: "/about" },
    { label: "Our Teachers", href: "/#teachers" },
    { label: "Courses", href: "/#courses" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  courses: [
    { label: "Quran Reading", href: "/#courses" },
    { label: "Quran Memorization", href: "/#courses" },
    { label: "Arabic Language", href: "/#courses" },
    { label: "Islamic Studies", href: "/#courses" },
    { label: "Tajweed Rules", href: "/#courses" },
  ],
  support: [
    { label: "FAQs", href: "/#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Help Center", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Al-Noor Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Premium online Quran and Arabic academy with certified teachers, flexible scheduling, and personalized learning paths for students worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@alnooracademy.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Islamic Center, Medina, Saudi Arabia</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Academy</h4>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                    <ChevronRight className="h-3 w-3 text-primary/0 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                    <ChevronRight className="h-3 w-3 text-primary/0 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                    <ChevronRight className="h-3 w-3 text-primary/0 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Al-Noor Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Facebook", "Twitter", "Instagram", "YouTube", "WhatsApp"].map((social) => (
              <Link
                key={social}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
              >
                <span className="text-xs font-medium">{social[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
