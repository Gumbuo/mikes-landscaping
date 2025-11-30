"use client";

import { useState } from "react";

// Service Card Component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-green-500">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your quote request! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", address: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-green-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🌿</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-green-700">Mike&apos;s Landscaping</h1>
                <p className="text-sm text-gray-600">Professional Lawn & Landscape Services</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-green-700 font-bold text-xl hover:text-green-800">
                <span className="text-2xl">📞</span>
                (555) 123-4567
              </a>
              <a href="#quote" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Outdoor Space</h2>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              From lawn care to snow removal, we provide year-round landscaping services to keep your property looking its best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors text-lg shadow-lg">
                Our Services
              </a>
              <a href="#quote" className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg border-2 border-green-400">
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="font-bold">Fully Insured</p>
                <p className="text-sm text-green-200">Licensed & Bonded</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="font-bold">5-Star Rated</p>
                <p className="text-sm text-green-200">100+ Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="font-bold">15+ Years</p>
                <p className="text-sm text-green-200">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌱</span>
              <div>
                <p className="font-bold">Eco-Friendly</p>
                <p className="text-sm text-green-200">Green Practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete landscaping solutions for residential and commercial properties
            </p>
          </div>

          {/* Lawn Care Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">🌿</span> Lawn Care Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🌾"
                title="Lawn Mowing"
                description="Regular mowing service with professional-grade equipment for a perfectly manicured lawn."
              />
              <ServiceCard
                icon="🌱"
                title="Fertilization"
                description="Custom fertilization programs to keep your lawn healthy, green, and thriving all season."
              />
              <ServiceCard
                icon="💧"
                title="Aeration & Seeding"
                description="Core aeration and overseeding to promote thick, lush grass growth."
              />
              <ServiceCard
                icon="🍂"
                title="Dethatching"
                description="Remove built-up thatch to allow water and nutrients to reach grass roots."
              />
            </div>
          </div>

          {/* Garden & Planting */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">🌸</span> Garden & Planting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🌺"
                title="Flower Beds"
                description="Design and installation of beautiful flower beds with seasonal color."
              />
              <ServiceCard
                icon="🌳"
                title="Tree & Shrub Planting"
                description="Professional planting of trees and shrubs to enhance your landscape."
              />
              <ServiceCard
                icon="🪴"
                title="Garden Design"
                description="Custom garden design tailored to your style and property conditions."
              />
              <ServiceCard
                icon="🌿"
                title="Mulching"
                description="Premium mulch installation to protect plants and improve curb appeal."
              />
            </div>
          </div>

          {/* Hardscaping */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">🧱</span> Hardscaping
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🪨"
                title="Patios"
                description="Custom patio design and installation using pavers, stone, or concrete."
              />
              <ServiceCard
                icon="🚶"
                title="Walkways"
                description="Beautiful walkways and paths to enhance your landscape flow."
              />
              <ServiceCard
                icon="🧱"
                title="Retaining Walls"
                description="Functional and decorative retaining walls for sloped properties."
              />
              <ServiceCard
                icon="🔥"
                title="Fire Pits & Outdoor Living"
                description="Create the perfect outdoor entertainment space with fire features."
              />
            </div>
          </div>

          {/* Tree Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">🌲</span> Tree Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="✂️"
                title="Tree Trimming"
                description="Professional pruning to maintain tree health and appearance."
              />
              <ServiceCard
                icon="🪓"
                title="Tree Removal"
                description="Safe removal of dead, damaged, or unwanted trees."
              />
              <ServiceCard
                icon="🪵"
                title="Stump Grinding"
                description="Complete stump removal to reclaim your yard space."
              />
              <ServiceCard
                icon="🌿"
                title="Hedge Trimming"
                description="Shape and maintain hedges for a clean, professional look."
              />
            </div>
          </div>

          {/* Irrigation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">💧</span> Irrigation Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🚿"
                title="Sprinkler Installation"
                description="Complete irrigation system design and installation."
              />
              <ServiceCard
                icon="🔧"
                title="System Repairs"
                description="Fix leaks, broken heads, and controller issues."
              />
              <ServiceCard
                icon="📱"
                title="Smart Controllers"
                description="Upgrade to wifi-enabled smart irrigation controllers."
              />
              <ServiceCard
                icon="❄️"
                title="Winterization"
                description="Protect your system from freeze damage with proper blowouts."
              />
            </div>
          </div>

          {/* Seasonal Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">🍂</span> Seasonal Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🍁"
                title="Fall Cleanup"
                description="Leaf removal and fall preparation to protect your lawn."
              />
              <ServiceCard
                icon="🌷"
                title="Spring Cleanup"
                description="Get your property ready for the growing season."
              />
              <ServiceCard
                icon="❄️"
                title="Snow Removal"
                description="Reliable snow plowing and shoveling services all winter."
              />
              <ServiceCard
                icon="🧊"
                title="Ice Management"
                description="Salt and sand application to keep walkways safe."
              />
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="💡"
                title="Landscape Lighting"
                description="Illuminate your property with beautiful outdoor lighting."
              />
              <ServiceCard
                icon="🚜"
                title="Grading & Drainage"
                description="Solve water issues with proper grading and drainage solutions."
              />
              <ServiceCard
                icon="🏠"
                title="Property Maintenance"
                description="Complete grounds maintenance for commercial properties."
              />
              <ServiceCard
                icon="🎨"
                title="Landscape Design"
                description="Full-service landscape design and master planning."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Mike&apos;s Landscaping?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our skilled professionals bring years of expertise to every project.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Quality landscaping services at fair, transparent prices.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Focused</h3>
              <p className="text-gray-600">Your satisfaction is our top priority on every job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
              <p className="text-xl text-green-100">
                Tell us about your project and we&apos;ll provide a detailed estimate within 24 hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Property Address *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                    placeholder="123 Main St, City"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Service Needed *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="Lawn Care">
                      <option value="mowing">Lawn Mowing</option>
                      <option value="fertilization">Fertilization</option>
                      <option value="aeration">Aeration & Seeding</option>
                      <option value="dethatching">Dethatching</option>
                    </optgroup>
                    <optgroup label="Garden & Planting">
                      <option value="flower-beds">Flower Beds</option>
                      <option value="tree-planting">Tree & Shrub Planting</option>
                      <option value="garden-design">Garden Design</option>
                      <option value="mulching">Mulching</option>
                    </optgroup>
                    <optgroup label="Hardscaping">
                      <option value="patio">Patio Installation</option>
                      <option value="walkway">Walkways</option>
                      <option value="retaining-wall">Retaining Walls</option>
                      <option value="fire-pit">Fire Pits & Outdoor Living</option>
                    </optgroup>
                    <optgroup label="Tree Services">
                      <option value="tree-trimming">Tree Trimming</option>
                      <option value="tree-removal">Tree Removal</option>
                      <option value="stump-grinding">Stump Grinding</option>
                      <option value="hedge-trimming">Hedge Trimming</option>
                    </optgroup>
                    <optgroup label="Irrigation">
                      <option value="sprinkler-install">Sprinkler Installation</option>
                      <option value="irrigation-repair">System Repairs</option>
                      <option value="winterization">Winterization</option>
                    </optgroup>
                    <optgroup label="Seasonal">
                      <option value="fall-cleanup">Fall Cleanup</option>
                      <option value="spring-cleanup">Spring Cleanup</option>
                      <option value="snow-removal">Snow Removal</option>
                      <option value="ice-management">Ice Management</option>
                    </optgroup>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800"
                    placeholder="Tell us about your project, property size, timeline, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">Proudly serving communities throughout the region</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Boston", "Cambridge", "Somerville", "Brookline", "Newton", "Quincy", "Medford", "Malden", "Everett", "Revere", "Chelsea", "Waltham", "Watertown", "Arlington", "Belmont", "Lexington"].map((city) => (
              <span key={city} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-green-200">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌿</span>
                <h3 className="text-xl font-bold">Mike&apos;s Landscaping</h3>
              </div>
              <p className="text-green-200">
                Professional landscaping services for residential and commercial properties. Quality work, fair prices, and customer satisfaction guaranteed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-green-200">
                <p className="flex items-center gap-2">
                  <span>📞</span> (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <span>📧</span> info@univershole.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> Greater Boston Area
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <div className="space-y-2 text-green-200">
                <p>Monday - Friday: 7am - 6pm</p>
                <p>Saturday: 8am - 4pm</p>
                <p>Sunday: Closed</p>
                <p className="mt-4 text-sm">24/7 Snow Removal Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} Mike&apos;s Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
