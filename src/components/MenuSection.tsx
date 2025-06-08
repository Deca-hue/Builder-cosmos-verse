import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const MenuSection = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Signature Dark Roast",
      description: "Our flagship blend with notes of chocolate and caramel",
      price: "KSh 450",
      category: "Coffee",
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Artisan Croissant",
      description: "Buttery, flaky pastry made fresh daily",
      price: "KSh 300",
      category: "Pastry",
      featured: true,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Vintage Cappuccino",
      description: "Classic cappuccino with house-made foam art",
      price: "KSh 550",
      category: "Coffee",
      featured: true,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Blueberry Scone",
      description: "Traditional scone loaded with fresh blueberries",
      price: "KSh 350",
      category: "Pastry",
      featured: true,
      rating: 4.7,
    },
  ];

  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-coffee-300 text-coffee-700"
          >
            Menu Highlights
          </Badge>
          <h2 className="font-serif text-4xl font-bold text-coffee-800 mb-4">
            Taste the Tradition
          </h2>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Discover our most beloved creations, each crafted with time-honored
            techniques and the finest ingredients sourced from around the world.
          </p>
        </div>

        {/* Featured items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 border-coffee-200 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-coffee-100 text-coffee-700 hover:bg-coffee-200"
                  >
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-coffee-600">
                    <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                    {item.rating}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-2 group-hover:text-coffee-600 transition-colors">
                  {item.name}
                </h3>

                <p className="text-coffee-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-coffee-800">
                    {item.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-coffee-600 hover:text-coffee-800 hover:bg-coffee-50 p-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-coffee-700 hover:bg-coffee-800 text-cream-50 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
