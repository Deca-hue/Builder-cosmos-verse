import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Leaf, Zap } from "lucide-react";

const Menu = () => {
  const menuCategories = {
    coffee: {
      title: "Coffee",
      items: [
        {
          name: "Signature Dark Roast",
          description: "Our flagship blend with notes of chocolate and caramel",
          price: "KSh 450",
          rating: 4.9,
          badges: ["Popular", "House Blend"]
        },
        {
          name: "Medium Roast",
          description: "Smooth and balanced with hints of nuts and vanilla",
          price: "KSh 400",
          rating: 4.8,
          badges: ["Smooth"]
        },
        {
          name: "Light Roast",
          description: "Bright and fruity with floral undertones",
          price: "KSh 400",
          rating: 4.7,
          badges: ["Bright"]
        },
        {
          name: "Decaf",
          description: "Full flavor without the caffeine, Swiss water processed",
          price: "KSh 380",
          rating: 4.6,
          badges: ["Caffeine Free"]
        },
        {
          name: "Cold Brew",
          description: "Smooth, concentrated coffee steeped for 12 hours",
          price: "KSh 500",
          rating: 4.8,
          badges: ["Cold", "Smooth"]
        },
        {
          name: "Nitro Cold Brew",
          description: "Cold brew infused with nitrogen for creamy texture",
          price: "KSh 550",
          rating: 4.9,
          badges: ["Premium", "Creamy"]
        }
        },
      ],
    },
    espresso: {
      title: "Espresso Drinks",
      items: [
        {
          name: "Vintage Cappuccino",
          description: "Classic cappuccino with house-made foam art",
          price: "KSh 550",
          rating: 4.9,
          badges: ["Popular", "Artistic"]
        },
        {
          name: "Caffe Latte",
          description: "Espresso with steamed milk and light foam",
          price: "KSh 580",
          rating: 4.8,
          badges: ["Classic"]
        },
        {
          name: "Americano",
          description: "Espresso shots with hot water",
          price: "KSh 480",
          rating: 4.7,
          badges: ["Strong"]
        },
        {
          name: "Macchiato",
          description: "Espresso 'marked' with a dollop of foam",
          price: "KSh 450",
          rating: 4.8,
          badges: ["Traditional"]
        },
        {
          name: "Mocha",
          description: "Espresso with chocolate and steamed milk",
          price: "KSh 650",
          rating: 4.7,
          badges: ["Sweet"]
        },
        {
          name: "Flat White",
          description: "Double shot espresso with microfoam",
          price: "KSh 600",
          rating: 4.8,
          badges: ["Strong", "Smooth"]
        }
        },
      ],
    },
    specialty: {
      title: "Specialty Drinks",
      items: [
        {
          name: "Vintage Spice Latte",
          description:
            "Our signature blend with cinnamon, nutmeg, and cardamom",
          price: "$6.50",
          rating: 4.9,
          badges: ["Signature", "Spiced"],
        },
        {
          name: "Salted Caramel Latte",
          description: "House-made caramel with sea salt and espresso",
          price: "$6.25",
          rating: 4.8,
          badges: ["Sweet", "Salty"],
        },
        {
          name: "Vanilla Bean Latte",
          description: "Real vanilla bean with espresso and steamed milk",
          price: "$6.00",
          rating: 4.7,
          badges: ["Vanilla"],
        },
        {
          name: "Matcha Latte",
          description: "Premium ceremonial grade matcha with steamed milk",
          price: "$5.75",
          rating: 4.6,
          badges: ["Green Tea", "Antioxidants"],
        },
        {
          name: "Golden Milk Latte",
          description: "Turmeric, ginger, and warm spices with steamed milk",
          price: "$5.50",
          rating: 4.5,
          badges: ["Caffeine Free", "Wellness"],
        },
        {
          name: "Chai Latte",
          description: "Aromatic spiced tea with steamed milk",
          price: "$5.25",
          rating: 4.7,
          badges: ["Spiced", "Tea"],
        },
      ],
    },
    pastries: {
      title: "Pastries & Baked Goods",
      items: [
        {
          name: "Artisan Croissant",
          description: "Buttery, flaky pastry made fresh daily",
          price: "$3.25",
          rating: 4.8,
          badges: ["Fresh Daily", "Buttery"],
        },
        {
          name: "Blueberry Scone",
          description: "Traditional scone loaded with fresh blueberries",
          price: "$3.75",
          rating: 4.7,
          badges: ["Fresh Berries"],
        },
        {
          name: "Chocolate Muffin",
          description: "Rich chocolate muffin with chocolate chips",
          price: "$3.50",
          rating: 4.6,
          badges: ["Chocolate"],
        },
        {
          name: "Cinnamon Roll",
          description: "House-made with cream cheese frosting",
          price: "$4.25",
          rating: 4.9,
          badges: ["Popular", "Sweet"],
        },
        {
          name: "Danish Pastry",
          description: "Seasonal fruit danish with almond cream",
          price: "$4.00",
          rating: 4.7,
          badges: ["Seasonal"],
        },
        {
          name: "Banana Bread",
          description: "Moist banana bread with walnuts",
          price: "$3.00",
          rating: 4.5,
          badges: ["Nuts"],
        },
      ],
    },
    lunch: {
      title: "Light Lunch",
      items: [
        {
          name: "Avocado Toast",
          description: "Sourdough with smashed avocado, tomato, and herbs",
          price: "$8.50",
          rating: 4.8,
          badges: ["Healthy", "Vegetarian"],
        },
        {
          name: "Grilled Panini",
          description: "Ham, cheese, and tomato on artisan bread",
          price: "$9.25",
          rating: 4.7,
          badges: ["Hot"],
        },
        {
          name: "Soup of the Day",
          description: "Ask your barista about today's selection",
          price: "$6.50",
          rating: 4.6,
          badges: ["Daily Special"],
        },
        {
          name: "Quinoa Salad",
          description: "Mixed greens, quinoa, nuts, and balsamic dressing",
          price: "$10.50",
          rating: 4.7,
          badges: ["Healthy", "Gluten Free"],
        },
        {
          name: "Bagel & Cream Cheese",
          description: "Fresh bagel with choice of cream cheese",
          price: "$4.75",
          rating: 4.5,
          badges: ["Classic"],
        },
        {
          name: "Breakfast Sandwich",
          description: "Egg, cheese, and choice of meat on English muffin",
          price: "$7.50",
          rating: 4.8,
          badges: ["Breakfast"],
        },
      ],
    },
  };

  const getBadgeVariant = (badge: string) => {
    if (badge === "Popular" || badge === "Signature") return "default";
    if (badge === "Healthy" || badge === "Organic") return "secondary";
    if (badge === "Caffeine Free") return "outline";
    return "secondary";
  };

  const getBadgeIcon = (badge: string) => {
    if (badge === "Popular") return <Star className="w-3 h-3 mr-1" />;
    if (badge === "Healthy" || badge === "Organic")
      return <Leaf className="w-3 h-3 mr-1" />;
    if (badge === "Strong") return <Zap className="w-3 h-3 mr-1" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-coffee-100 via-cream-100 to-coffee-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-800 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Crafted with passion, served with pride. Every item on our menu
            represents our commitment to quality and tradition.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 bg-coffee-100">
              {Object.entries(menuCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-coffee-700 data-[state=active]:text-cream-50"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="mb-8">
                  <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-2 text-center">
                    {category.title}
                  </h2>
                  <p className="text-coffee-600 text-center max-w-lg mx-auto">
                    {key === "coffee" &&
                      "Our signature coffee blends, roasted fresh daily"}
                    {key === "espresso" &&
                      "Classic espresso-based drinks made by skilled baristas"}
                    {key === "specialty" &&
                      "Unique creations and seasonal favorites"}
                    {key === "pastries" &&
                      "Freshly baked goods perfect with your coffee"}
                    {key === "lunch" &&
                      "Light meals and healthy options for any time of day"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 border-coffee-200"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="font-serif text-lg text-coffee-800">
                            {item.name}
                          </CardTitle>
                          <div className="flex items-center text-sm text-coffee-600">
                            <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                            {item.rating}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.badges.map((badge, badgeIndex) => (
                            <Badge
                              key={badgeIndex}
                              variant={getBadgeVariant(badge)}
                              className="text-xs flex items-center"
                            >
                              {getBadgeIcon(badge)}
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-coffee-600 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-xl text-coffee-800">
                            {item.price}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;