"use client";
import React, { useEffect, useState } from "react";

const Container = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1548359156-8062c5afb7d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const howItWorks = [
    {
      title: "Step 1: Neural Activation",
      text: "Your dog's brain literally transforms as they engage with our scientifically-designed games.",
      icon: "🧠",
    },
    {
      title: "Step 2: Positive Progress",
      text: "Follow our structured 7-module system, taking your pup from 'Preschool' to 'Einstein' level. Each success builds upon the last, creating lasting behavior changes.",
      icon: "📈",
    },
    {
      title: "Step 3: Genius Emergence",
      text: "Within days, witness your dog:",
      list: [
        "Stop excessive barking",
        "End destructive chewing",
        "Eliminate jumping on guests",
        "Master perfect recall",
        "Develop laser-focus attention",
      ],
      icon: "🌟",
    },
  ];

  const testimonials = [
    {
      quote:
        "My aggressive German Shepherd became the neighborhood's gentlest dog in just 3 weeks!",
      name: "Hannah T.",
      stars: 5,
    },
    {
      quote:
        "Finally, a training method that actually works! My puppy's transformation is incredible.",
      name: "John J.",
      stars: 5,
    },
  ];

  const STILL_DURATION = 10000;
  const ANIMATION_DURATION = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, ANIMATION_DURATION);
    }, STILL_DURATION + ANIMATION_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        />

        {/* Overlay Content */}
        <div className="absolute  w-full max-w-3xl p-8 text-center text-white rounded-lg ">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {`Unlock Your Dog's Genius`}
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light">
            Transform Any Stubborn Pup into an Obedient, Well-Behaved Companion
            in Just
            <span className="font-semibold text-yellow-400"> 21 Days!</span>
          </p>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-semibold text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Discover the Revolutionary{" "}
            <span className="font-bold text-blue-600">Neural Activation</span>{" "}
            Training System That Uses Ancient Brain-Boosting Games to Eliminate
            Bad Behavior – Without Force or Harsh Methods.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto space-y-16">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight animate-slideInDown">
            Watch How It Works
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-r from-indigo-100 via-white to-purple-100 border border-indigo-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                {/* Icon */}
                <div className="text-5xl text-indigo-600 text-center mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                {step.text && (
                  <p className="mt-4 text-gray-600 text-center">{step.text}</p>
                )}

                {/* List */}
                {step.list && (
                  <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                    {step.list.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-indigo-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 animate-fadeIn"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="container mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
            Key Features & Benefits
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎮",
                text: "21 Mind-Enhancing Games: Transform training into playful bonding sessions.",
              },
              {
                icon: "📚",
                text: "7 Intelligence-Boosting Modules: Watch your dog progress from basic commands to genius-level skills.",
              },
              {
                icon: "🤝",
                text: "Force-Free Methods: Build trust while achieving amazing results.",
              },
              {
                icon: "🎥",
                text: "Step-by-Step Video Demonstrations: Never feel lost or confused.",
              },
              {
                icon: "👩‍🏫",
                text: "Expert Support: Direct access to certified trainer Adrienne Farricelli.",
              },
              {
                icon: "📖",
                text: "Comprehensive Problem-Solving Library: Over 100 solutions for common behavior issues.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-white border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col items-start"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 text-blue-600">
                  {feature.icon}
                </div>
                {/* Text */}
                <p className="text-gray-700 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
            What Our Happy Customers Are Saying
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-full p-6 bg-white shadow-lg rounded-lg mx-4">
                <p className="text-lg text-gray-700 italic mb-4">
                  {testimonials[0].quote}
                </p>
                <div className="flex justify-center mb-4">
                  <span className="text-yellow-400">
                    {"⭐".repeat(testimonials[0].stars)}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">
                  - {testimonials[0].name}
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-full p-6 bg-white shadow-lg rounded-lg mx-4">
                <p className="text-lg text-gray-700 italic mb-4">
                  {testimonials[1].quote}
                </p>
                <div className="flex justify-center mb-4">
                  <span className="text-yellow-400">
                    {"⭐".repeat(testimonials[1].stars)}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">
                  - {testimonials[1].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Offer Section */}
      <section
        className="py-16 bg-white text-black animate-fadeIn"
        style={{ animationDelay: "2s" }}
      >
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-black mb-6 tracking-tight transform transition-all duration-500 hover:scale-105">
            Exclusive Bonus 🎉
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold text-gray-900">FREE</span> Behavior
            Training Course
            <span className="font-medium text-gray-600"> ($67 Value)</span>
          </p>

          {/* Price & Offer */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-black border border-gray-300 rounded-lg shadow-2xl py-8 px-6 inline-block mt-6 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <p className="text-lg font-medium text-gray-800">
              Limited Time Offer:
            </p>
            <p className="text-5xl font-extrabold text-black mt-2 mb-4 tracking-tight">
              Get Both Courses for Just
              <span className="text-gray-900"> $67</span>
            </p>
            <p className="text-gray-500 text-sm line-through">Regular $127</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-50 text-gray-800">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Watch The Neural Activation System In Action Now!
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 font-medium">
            Don’t miss out - limited-time special pricing ends soon!
          </p>

          {/* Call to Action Button */}
          <button className="px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-4 focus:ring-green-300">
            👉 Watch Now
          </button>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto text-center">
          {/* Main Text */}
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed mb-6">
            {`Join thousands of delighted dog owners who've discovered the secret
            to unlocking their pet's true potential. Your dog's genius is
            waiting to emerge!`}
          </p>

          {/* Secondary Text */}
          <p className="text-sm text-gray-500 italic mb-8">
            As seen in:{" "}
            <span className="text-gray-700 font-medium">
              USA Today, Every Dog Magazine, Paw Nation
            </span>
            , and more...
          </p>

          {/* Decorative Element */}
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-gray-700 to-gray-900 mb-8"></div>
        </div>
      </section>
    </div>
  );
};

export default Container;
