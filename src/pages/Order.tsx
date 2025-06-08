import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, ShoppingCart, Star, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  customizations?: string;
}

interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const Order = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: "Signature Dark Roast",
        description: "Our flagship blend with notes of chocolate and caramel",
        price: 450,
        rating: 4.9,
        category: "coffee",
      },
      {
        id: 2,
        name: "Medium Roast",
        description: "Smooth and balanced with hints of nuts and vanilla",
        price: 400,
        rating: 4.8,
        category: "coffee",
      },
      {
        id: 3,
        name: "Light Roast",
        description: "Bright and fruity with floral undertones",
        price: 400,
        rating: 4.7,
        category: "coffee",
      },
      {
        id: 4,
        name: "Cold Brew",
        description: "Smooth, concentrated coffee steeped for 12 hours",
        price: 500,
        rating: 4.8,
        category: "coffee",
      },
    ],
    espresso: [
      {
        id: 5,
        name: "Vintage Cappuccino",
        description: "Classic cappuccino with house-made foam art",
        price: 550,
        rating: 4.9,
        category: "espresso",
      },
      {
        id: 6,
        name: "Caffe Latte",
        description: "Espresso with steamed milk and light foam",
        price: 580,
        rating: 4.8,
        category: "espresso",
      },
      {
        id: 7,
        name: "Americano",
        description: "Espresso shots with hot water",
        price: 480,
        rating: 4.7,
        category: "espresso",
      },
      {
        id: 8,
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: 650,
        rating: 4.7,
        category: "espresso",
      },
    ],
    pastries: [
      {
        id: 9,
        name: "Artisan Croissant",
        description: "Buttery, flaky pastry made fresh daily",
        price: 300,
        rating: 4.8,
        category: "pastries",
      },
      {
        id: 10,
        name: "Blueberry Scone",
        description: "Traditional scone loaded with fresh blueberries",
        price: 350,
        rating: 4.7,
        category: "pastries",
      },
      {
        id: 11,
        name: "Cinnamon Roll",
        description: "House-made with cream cheese frosting",
        price: 400,
        rating: 4.9,
        category: "pastries",
      },
      {
        id: 12,
        name: "Chocolate Muffin",
        description: "Rich chocolate muffin with chocolate chips",
        price: 320,
        rating: 4.6,
        category: "pastries",
      },
    ],
  };

  const addToOrder = (item: any) => {
    setOrderItems((prev) => {
      const existingItem = prev.find((orderItem) => orderItem.id === item.id);
      if (existingItem) {
        return prev.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromOrder = (id: number) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    const subtotal = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const deliveryFee = orderType === "delivery" ? 200 : 0;
    return subtotal + deliveryFee;
  };

  const handleSubmitOrder = () => {
    if (orderItems.length === 0) {
      alert("Please add items to your order");
      return;
    }

    if (!customerInfo.name || !customerInfo.phone) {
      alert("Please fill in your name and phone number");
      return;
    }

    if (orderType === "delivery" && !customerInfo.address) {
      alert("Please provide a delivery address");
      return;
    }

    // Here you would integrate with a payment system or API
    console.log("Order submitted:", {
      items: orderItems,
      customer: customerInfo,
      orderType,
      total: getTotal(),
    });

    alert("Order placed successfully! We will contact you shortly.");

    // Reset form
    setOrderItems([]);
    setCustomerInfo({ name: "", phone: "", email: "", address: "", notes: "" });
  };

  const handleCustomerInfoChange = (
    field: keyof CustomerInfo,
    value: string,
  ) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-coffee-100 via-cream-100 to-coffee-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-coffee-800 mb-4">
            Place Your Order
          </h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Order your favorite coffee and pastries for pickup or delivery in
            Nairobi. Fresh, quality items prepared with care.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <Card className="border-coffee-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-coffee-800">
                  Select Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="coffee" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6 bg-coffee-100">
                    <TabsTrigger
                      value="coffee"
                      className="data-[state=active]:bg-coffee-700 data-[state=active]:text-cream-50"
                    >
                      Coffee
                    </TabsTrigger>
                    <TabsTrigger
                      value="espresso"
                      className="data-[state=active]:bg-coffee-700 data-[state=active]:text-cream-50"
                    >
                      Espresso
                    </TabsTrigger>
                    <TabsTrigger
                      value="pastries"
                      className="data-[state=active]:bg-coffee-700 data-[state=active]:text-cream-50"
                    >
                      Pastries
                    </TabsTrigger>
                  </TabsList>

                  {Object.entries(menuItems).map(([category, items]) => (
                    <TabsContent key={category} value={category}>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <Card
                            key={item.id}
                            className="border-coffee-200 hover:shadow-md transition-shadow"
                          >
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h3 className="font-serif text-lg font-semibold text-coffee-800">
                                    {item.name}
                                  </h3>
                                  <p className="text-coffee-600 text-sm mb-2">
                                    {item.description}
                                  </p>
                                  <div className="flex items-center space-x-2">
                                    <span className="font-bold text-coffee-800">
                                      KSh {item.price}
                                    </span>
                                    <div className="flex items-center text-sm text-coffee-600">
                                      <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                                      {item.rating}
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  onClick={() => addToOrder(item)}
                                  className="bg-coffee-700 hover:bg-coffee-800 text-cream-50"
                                  size="sm"
                                >
                                  <Plus className="w-4 h-4 mr-1" />
                                  Add
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Order Type Selection */}
            <Card className="border-coffee-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-coffee-800">
                  Order Type
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={orderType === "pickup" ? "default" : "outline"}
                    onClick={() => setOrderType("pickup")}
                    className={cn(
                      orderType === "pickup"
                        ? "bg-coffee-700 hover:bg-coffee-800 text-cream-50"
                        : "border-coffee-300 text-coffee-700 hover:bg-coffee-50",
                    )}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Pickup
                  </Button>
                  <Button
                    variant={orderType === "delivery" ? "default" : "outline"}
                    onClick={() => setOrderType("delivery")}
                    className={cn(
                      orderType === "delivery"
                        ? "bg-coffee-700 hover:bg-coffee-800 text-cream-50"
                        : "border-coffee-300 text-coffee-700 hover:bg-coffee-50",
                    )}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Delivery
                  </Button>
                </div>

                {orderType === "pickup" && (
                  <div className="bg-coffee-50 p-3 rounded-md">
                    <p className="text-coffee-700 text-sm">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Ready in 15-20 minutes
                    </p>
                    <p className="text-coffee-600 text-xs mt-1">
                      Kimathi Street, Nairobi CBD
                    </p>
                  </div>
                )}

                {orderType === "delivery" && (
                  <div className="bg-coffee-50 p-3 rounded-md">
                    <p className="text-coffee-700 text-sm">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Delivery: KSh 200 (within 5km)
                    </p>
                    <p className="text-coffee-600 text-xs mt-1">
                      Estimated time: 30-45 minutes
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Cart */}
            <Card className="border-coffee-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-coffee-800 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Your Order ({orderItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {orderItems.length === 0 ? (
                  <p className="text-coffee-600 text-center py-4">
                    No items in your order yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {orderItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-3 bg-coffee-50 rounded-md"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-coffee-800">
                            {item.name}
                          </h4>
                          <p className="text-coffee-600 text-sm">
                            KSh {item.price} each
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <Separator className="my-4" />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>
                          KSh{" "}
                          {orderItems.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0,
                          )}
                        </span>
                      </div>
                      {orderType === "delivery" && (
                        <div className="flex justify-between">
                          <span>Delivery:</span>
                          <span>KSh 200</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>KSh {getTotal()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="border-coffee-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-coffee-800">
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      handleCustomerInfoChange("name", e.target.value)
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      handleCustomerInfoChange("phone", e.target.value)
                    }
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      handleCustomerInfoChange("email", e.target.value)
                    }
                    placeholder="your.email@example.com"
                  />
                </div>

                {orderType === "delivery" && (
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) =>
                        handleCustomerInfoChange("address", e.target.value)
                      }
                      placeholder="Building name, street, area, landmarks..."
                      rows={3}
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea
                    id="notes"
                    value={customerInfo.notes}
                    onChange={(e) =>
                      handleCustomerInfoChange("notes", e.target.value)
                    }
                    placeholder="Any special requests or notes..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Place Order Button */}
            <Button
              onClick={handleSubmitOrder}
              className="w-full bg-coffee-700 hover:bg-coffee-800 text-cream-50 py-6 text-lg"
              size="lg"
              disabled={orderItems.length === 0}
            >
              Place Order - KSh {getTotal()}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
