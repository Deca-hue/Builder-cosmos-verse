import {
  Coffee,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-coffee-600 rounded-full">
                <Coffee className="w-5 h-5 text-cream-50" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">
                  The Roasted Bean
                </h3>
                <p className="text-xs text-coffee-300">EST. 1952</p>
              </div>
            </div>
            <p className="text-coffee-200 text-sm leading-relaxed">
              Serving premium coffee and artisanal pastries in the heart of
              downtown for over 70 years. A gathering place for coffee lovers
              and community.
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Hours
            </h4>
            <div className="space-y-2 text-sm text-coffee-200">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>7:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-sm text-coffee-200">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Coffee Street</p>
                  <p>Downtown, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <p>(555) 123-BEAN</p>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Connect</h4>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-coffee-200 hover:text-cream-50 hover:bg-coffee-700"
              >
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-coffee-200 hover:text-cream-50 hover:bg-coffee-700"
              >
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-coffee-200 hover:text-cream-50 hover:bg-coffee-700"
              >
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
            <p className="text-xs text-coffee-300">
              Follow us for daily specials, events, and coffee tips!
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-coffee-600" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-coffee-300">
          <p>&copy; 2024 The Roasted Bean. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Crafted with ❤️ and lots of coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
