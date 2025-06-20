import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Car, Bus, Coffee } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-coffee-100 via-cream-100 to-coffee-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-800 mb-4">
            Visit Us
          </h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            We'd love to see you! Come visit our cozy cafe, or get in touch if
            you have any questions. We're always happy to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-coffee-600 leading-relaxed mb-8">
                  Whether you're planning a visit, have questions about our
                  coffee, or want to inquire about catering services, we're here
                  to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-coffee-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="w-6 h-6 text-coffee-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-2">
                          Location
                        </h3>
                        <p className="text-coffee-600">
                          Kimathi Street
                          <br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-coffee-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="w-6 h-6 text-coffee-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-2">
                          Phone
                        </h3>
                        <p className="text-coffee-600">+254 700 123 456</p>
                        <p className="text-coffee-500 text-sm">
                          Call us during business hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-coffee-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="w-6 h-6 text-coffee-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-2">
                          Email
                        </h3>
                        <p className="text-coffee-600">
                          hello@roastedbean.co.ke
                        </p>
                        <p className="text-coffee-500 text-sm">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-coffee-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="w-6 h-6 text-coffee-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-2">
                          Hours
                        </h3>
                        <div className="text-coffee-600 space-y-1 text-sm">
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-coffee-200">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-coffee-800">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-coffee-700">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-coffee-200 focus:border-coffee-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-coffee-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-coffee-200 focus:border-coffee-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-coffee-700">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="border-coffee-200 focus:border-coffee-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-coffee-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows={5}
                        required
                        className="border-coffee-200 focus:border-coffee-600"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-coffee-700 hover:bg-coffee-800 text-cream-50"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">
              Getting Here
            </h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of downtown with multiple
              transportation options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Parking */}
            <Card className="text-center p-6 border-coffee-200">
              <CardContent className="p-0">
                <Car className="w-8 h-8 text-coffee-600 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-3">
                  By Car
                </h3>
                <p className="text-coffee-600 text-sm leading-relaxed">
                  Paid parking available nearby. Street parking on Kimathi
                  Street and surrounding areas in Nairobi CBD.
                </p>
              </CardContent>
            </Card>

            {/* Public Transit */}
            <Card className="text-center p-6 border-coffee-200">
              <CardContent className="p-0">
                <Bus className="w-8 h-8 text-coffee-600 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-3">
                  By Matatu
                </h3>
                <p className="text-coffee-600 text-sm leading-relaxed">
                  Take any matatu to the CBD and alight at the Kimathi Street
                  stage. We're just a 1-minute walk from the matatu stage.
                </p>
              </CardContent>
            </Card>
            {/* Walking */}
            <Card className="text-center p-6 border-coffee-200">
              <CardContent className="p-0">
                <Coffee className="w-8 h-8 text-coffee-600 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-3">
                  On Foot
                </h3>
                <p className="text-coffee-600 text-sm leading-relaxed">
                  Located in the bustling Nairobi CBD walking area. Perfect for
                  a coffee break during your city exploration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Google Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              Located in the heart of Nairobi CBD on Kimathi Street. Click and
              drag to explore the area around our cafe.
            </p>
          </div>

          <Card className="border-coffee-200 overflow-hidden">
            <CardContent className="p-0">
              <GoogleMap className="h-96 w-full" />
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Button
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=Kimathi+Street,+Nairobi,+Kenya",
                  "_blank",
                )
              }
              className="bg-coffee-700 hover:bg-coffee-800 text-cream-50"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
