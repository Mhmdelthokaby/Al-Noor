"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const contactInfo = [
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "info@alnooracademy.com", desc: "We respond within 24 hours" },
  { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+1 (800) 123-4567", desc: "Mon-Fri, 8AM-8PM GMT" },
  { icon: <MapPin className="h-5 w-5" />, label: "Address", value: "123 Islamic Center, Medina", desc: "Saudi Arabia" },
  { icon: <Clock className="h-5 w-5" />, label: "Working Hours", value: "Monday - Saturday", desc: "8:00 AM - 8:00 PM GMT" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6">
              <MessageCircle className="h-3.5 w-3.5" />
              Contact Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Get in{" "}
              <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4 p-5 rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm font-medium mt-0.5">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.desc}</p>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-2xl border border-border bg-card shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-5 w-5 text-success" />
                  <span className="font-semibold text-sm">WhatsApp</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Chat with us directly on WhatsApp for quick responses.</p>
                <Button variant="success" size="sm" className="gap-2 w-full rounded-xl">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-card">
                <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="rounded-xl" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" className="rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={5}
                      className="flex w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all resize-none"
                      placeholder="Write your message..."
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2 rounded-xl h-12">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
