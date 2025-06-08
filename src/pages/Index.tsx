import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Users, Award, Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-coffee-300 text-coffee-700"
              >
                Our Heritage
              </Badge>
              <h2 className="font-serif text-4xl font-bold text-coffee-800 mb-6">
                Three Generations of Coffee Mastery
              </h2>
              <p className="text-coffee-600 text-lg leading-relaxed mb-6">
                Founded in 1952 by Giuseppe Rosetti, The Roasted Bean has been a
                cornerstone of our community for over seven decades. What
                started as a small family roastery has grown into a beloved
                gathering place where tradition meets innovation.
              </p>
              <p className="text-coffee-600 leading-relaxed mb-8">
                We still roast our beans using the original 1952 Probat roaster,
                ensuring every cup carries the authentic flavor that has made us
                a local institution.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-coffee-700 text-coffee-700 hover:bg-coffee-700 hover:text-cream-50"
              >
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 border-coffee-200">
                  <CardContent className="p-0">
                    <Award className="w-8 h-8 text-coffee-600 mx-auto mb-3" />
                    <div className="font-bold text-2xl text-coffee-800 mb-1">
                      25+
                    </div>
                    <div className="text-coffee-600 text-sm">Awards Won</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 border-coffee-200">
                  <CardContent className="p-0">
                    <Users className="w-8 h-8 text-coffee-600 mx-auto mb-3" />
                    <div className="font-bold text-2xl text-coffee-800 mb-1">
                      50K+
                    </div>
                    <div className="text-coffee-600 text-sm">
                      Happy Customers
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-6 bg-coffee-50 border-coffee-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-coffee-600 mr-2" />
                    <span className="font-semibold text-coffee-800">
                      Community First
                    </span>
                  </div>
                  <p className="text-coffee-600 text-sm">
                    We source our beans directly from small farms, ensuring fair
                    trade and supporting coffee growing communities worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <Leaf className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">
                      Sustainability
                    </span>
                  </div>
                  <p className="text-green-600 text-sm">
                    100% compostable cups, solar-powered roasting, and
                    zero-waste initiatives make us carbon neutral since 2020.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Location & Hours Section */}
      <section className="py-16 bg-coffee-800 text-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-coffee-200 text-lg max-w-2xl mx-auto">
              Located in the heart of downtown, we're the perfect spot for your
              morning coffee, lunch break, or evening study session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <Card className="bg-coffee-700 border-coffee-600 text-center p-6">
              <CardContent className="p-0">
                <MapPin className="w-8 h-8 text-coffee-300 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-cream-50 mb-3">
                  Location
                </h3>
                <div className="text-coffee-200 space-y-1">
                  <p>123 Coffee Street</p>
                  <p>Downtown, City 12345</p>
                  <p className="text-sm text-coffee-300 mt-2">
                    Free parking available
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-coffee-700 border-coffee-600 text-center p-6">
              <CardContent className="p-0">
                <Clock className="w-8 h-8 text-coffee-300 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-cream-50 mb-3">
                  Hours
                </h3>
                <div className="text-coffee-200 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span>6AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>7AM - 9PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7AM - 7PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-coffee-700 border-coffee-600 text-center p-6">
              <CardContent className="p-0">
                <Phone className="w-8 h-8 text-coffee-300 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-cream-50 mb-3">
                  Contact
                </h3>
                <div className="text-coffee-200 space-y-2">
                  <p>(555) 123-BEAN</p>
                  <p className="text-sm">hello@roastedbean.com</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-3 border-coffee-500 text-coffee-200 hover:bg-coffee-600 hover:text-cream-50"
                  >
                    <Link to="/contact">Get Directions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
