import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">We're Here to Help</h3>
          <p className="text-gray-600">Reach out to us for product inquiries, consultation, or manufacturing partnerships.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                  <p className="text-gray-600">Ayurrekha Ayurvedic Research Centre<br />Kochi, Kerala, India</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-400 mt-1">Mon-Sat: 9AM to 6PM</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <a href="mailto:info@ayurrekha.com" className="text-gray-600 hover:text-primary transition-colors">
                    info@ayurrekha.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-xl bg-white h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 focus-visible:ring-primary h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 focus-visible:ring-primary h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <Input placeholder="How can we help?" className="bg-gray-50 border-gray-200 focus-visible:ring-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      placeholder="Your message here..." 
                      className="bg-gray-50 border-gray-200 focus-visible:ring-primary min-h-[150px] resize-none" 
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <Button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-full">
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                    <Button type="button" variant="outline" className="w-full sm:w-auto h-12 px-8 border-green-500 text-green-600 hover:bg-green-50 rounded-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
