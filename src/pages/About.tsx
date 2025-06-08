import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Coffee, Award, Users, Heart, Leaf, Clock } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "1952",
      title: "The Beginning",
      description:
        "Giuseppe Rosetti opens The Roasted Bean with a single Probat roaster and a dream of sharing authentic Italian coffee culture.",
    },
    {
      year: "1967",
      title: "Family Tradition",
      description:
        "Giuseppe's son Marco joins the business, introducing new blends while maintaining the traditional roasting methods.",
    },
    {
      year: "1985",
      title: "Community Hub",
      description:
        "The cafe becomes a gathering place for artists, writers, and coffee lovers, hosting weekly poetry readings and art exhibitions.",
    },
    {
      year: "2003",
      title: "Third Generation",
      description:
        "Marco's daughter Elena takes over, modernizing operations while preserving the vintage charm and family recipes.",
    },
    {
      year: "2020",
      title: "Sustainable Future",
      description:
        "Achieves carbon neutrality through solar power, compostable packaging, and direct trade partnerships with coffee farmers.",
    },
  ];

  const team = [
    {
      name: "Elena Rosetti",
      role: "Owner & Head Roaster",
      bio: "Third-generation coffee expert with a passion for sustainability and community.",
      initials: "ER",
    },
    {
      name: "Marcus Chen",
      role: "Head Barista",
      bio: "Award-winning barista with expertise in latte art and espresso extraction.",
      initials: "MC",
    },
    {
      name: "Sofia Martinez",
      role: "Pastry Chef",
      bio: "Artisan baker specializing in European-style pastries and seasonal treats.",
      initials: "SM",
    },
    {
      name: "David Thompson",
      role: "Manager",
      bio: "Coffee enthusiast ensuring every customer has an exceptional experience.",
      initials: "DT",
    },
  ];

  const values = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Quality First",
      description:
        "We source only the finest beans and maintain the highest standards in roasting and brewing.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community",
      description:
        "More than a cafe, we're a gathering place where relationships are built over great coffee.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "Committed to environmental responsibility through ethical sourcing and eco-friendly practices.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fair Trade",
      description:
        "Supporting coffee farmers worldwide through direct trade relationships and fair pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-coffee-100 via-cream-100 to-coffee-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-coffee-300 text-coffee-700"
          >
            Our Heritage
          </Badge>
          <h1 className="font-serif text-5xl font-bold text-coffee-800 mb-4">
            Our Story
          </h1>
          <p className="text-lg text-coffee-600 max-w-3xl mx-auto leading-relaxed">
            For over seven decades, The Roasted Bean has been more than just a
            coffee shop. We're a family legacy, a community cornerstone, and a
            testament to the art of traditional coffee roasting in an
            ever-changing world.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-6">
                From Sicily to Your Cup
              </h2>
              <p className="text-coffee-600 leading-relaxed mb-6">
                Our story begins in 1952 when Giuseppe Rosetti, a young
                immigrant from Sicily, arrived in America with nothing but a
                passion for coffee and a dream to share authentic Italian coffee
                culture. With his life savings, he purchased a small Probat
                roaster that still serves as the heart of our operation today.
              </p>
              <p className="text-coffee-600 leading-relaxed mb-6">
                Giuseppe believed that coffee was more than just a beverage—it
                was a catalyst for human connection. He designed The Roasted
                Bean to be a place where neighbors could gather, artists could
                create, and friendships could flourish over the perfect cup of
                coffee.
              </p>
              <p className="text-coffee-600 leading-relaxed">
                Today, under the guidance of his granddaughter Elena, we
                continue to honor Giuseppe's vision while embracing modern
                values of sustainability and community engagement. Every cup we
                serve carries forward his legacy of excellence and authentic
                Italian coffee tradition.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-coffee-50 border-coffee-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-coffee-600 mr-3" />
                    <h3 className="font-serif text-xl font-semibold text-coffee-800">
                      70+ Years
                    </h3>
                  </div>
                  <p className="text-coffee-600">
                    Three generations of coffee expertise and community service
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-coffee-50 border-coffee-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-coffee-600 mr-3" />
                    <h3 className="font-serif text-xl font-semibold text-coffee-800">
                      Award Winning
                    </h3>
                  </div>
                  <p className="text-coffee-600">
                    Recognized for excellence in coffee quality and community
                    impact
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Leaf className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="font-serif text-xl font-semibold text-green-800">
                      Carbon Neutral
                    </h3>
                  </div>
                  <p className="text-green-600">
                    Committed to environmental sustainability since 2020
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">
              Our Journey
            </h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              From a small family roastery to a beloved community institution,
              discover the milestones that shaped The Roasted Bean.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-coffee-700 text-cream-50 rounded-full flex items-center justify-center font-bold text-sm">
                    {event.year}
                  </div>
                </div>
                <Card className="flex-1 border-coffee-200">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-coffee-600 leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">
              Our Values
            </h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from bean selection to
              customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 border-coffee-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="text-coffee-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-coffee-800 text-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-coffee-200 max-w-2xl mx-auto">
              The passionate individuals who bring Giuseppe's vision to life
              every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-coffee-700 border-coffee-600 text-center p-6"
              >
                <CardContent className="p-0">
                  <Avatar className="w-16 h-16 mx-auto mb-4 bg-coffee-600">
                    <AvatarFallback className="text-cream-50 font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-serif text-lg font-semibold text-cream-50 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-coffee-300 text-sm mb-3">{member.role}</p>
                  <p className="text-coffee-200 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
