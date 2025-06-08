import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with vintage texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-100 via-cream-100 to-coffee-200">
        <div
          className={
            'absolute inset-0 opacity-10 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="53" cy="7" r="1"/%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3Ccircle cx="7" cy="53" r="1"/%3E%3Ccircle cx="53" cy="53" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]'
          }
        ></div>
      </div>

      {/* Decorative coffee beans */}
      <div className="absolute top-20 left-10 text-coffee-300 opacity-20">
        <Coffee className="w-16 h-16" />
      </div>
      <div className="absolute bottom-32 right-16 text-coffee-300 opacity-20">
        <Coffee className="w-12 h-12" />
      </div>
      <div className="absolute top-40 right-32 text-coffee-300 opacity-20">
        <Coffee className="w-8 h-8" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Vintage badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-coffee-700 text-cream-50 text-sm font-medium mb-6">
            <Coffee className="w-4 h-4 mr-2" />
            Established 1952
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-coffee-800 leading-tight mb-6">
            The Roasted
            <span className="block text-coffee-600">Bean</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-coffee-700 font-vintage mb-8 max-w-2xl mx-auto leading-relaxed">
            Where every cup tells a story of tradition, quality, and the perfect
            roast. Experience coffee crafted with passion since 1952.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-coffee-700 hover:bg-coffee-800 text-cream-50 px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/menu">
                View Our Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-2 border-coffee-700 text-coffee-700 hover:bg-coffee-700 hover:text-cream-50 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-800 mb-1">70+</div>
              <div className="text-coffee-600 text-sm font-medium">
                Years of Excellence
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-800 mb-1">12</div>
              <div className="text-coffee-600 text-sm font-medium">
                Coffee Varieties
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coffee-800 mb-1">5★</div>
              <div className="text-coffee-600 text-sm font-medium">
                Customer Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
