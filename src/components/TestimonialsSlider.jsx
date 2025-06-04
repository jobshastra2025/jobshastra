'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    title: '“I Found My Dream Job”',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
    name: 'Sophia Moore',
    role: 'CEO at flow Agency',
    image: '/images/profile_img.png',
  },
  {
    title: '“Job Shastra is #1”',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
    name: 'Adam Smith',
    role: 'Webflow Developer',
    image: '/images/profile_img.png',
  },
  {
    title: '“Highly Recommended Platform”',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo nec purus elementum tincidunt.',
    name: 'Priya Sharma',
    role: 'Product Designer',
    image: '/images/profile_img.png',
  },
  {
    title: '“Fantastic Experience”',
    description:
      'Suspendisse potenti. Proin lacinia metus non justo fermentum, non varius nulla fermentum.',
    name: 'Rahul Verma',
    role: 'UX Consultant',
    image: '/images/profile_img.png',
  },
];

export default function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); // default for desktop

  // Update number of visible testimonials based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-white py-10 px-4 md:px-12 relative max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#4A42A3] mb-8">Testimonials</h2>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute -left-2 sm:-left-6 top-1/2 transform -translate-y-1/2 bg-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-800 z-10"
        >
          &#8592;
        </button>

        <div className="flex justify-center gap-3 sm:gap-6 transition-all duration-500">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 w-full max-w-sm p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>
              <p className="text-sm text-gray-600 mt-3">{t.description}</p>
              <div className="flex items-center gap-3 mt-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-indigo-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-3 sm:-right-6 top-1/2 transform -translate-y-1/2 bg-indigo-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-800 z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
