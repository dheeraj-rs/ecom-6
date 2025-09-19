'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { 
  Home, 
  Sofa, 
  DoorOpen, 
  TreePine, 
  Hammer, 
  CheckCircle, 
  Star,
  Clock,
  Shield,
  Palette,
  Leaf,
  Mountain
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ratesRef = useRef(null);
  
  const heroControls = useAnimation();
  const servicesControls = useAnimation();
  const ratesControls = useAnimation();
  
  const heroInView = useInView(heroRef, { threshold: 0.1 });
  const servicesInView = useInView(servicesRef, { threshold: 0.1 });
  const ratesInView = useInView(ratesRef, { threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start('visible');
    if (servicesInView) servicesControls.start('visible');
    if (ratesInView) ratesControls.start('visible');
  }, [heroInView, servicesInView, ratesInView, heroControls, servicesControls, ratesControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: Sofa,
      title: 'Forest Custom Furniture',
      description: 'Handcrafted furniture pieces inspired by nature, tailored to bring the serenity of ancient forests into your living space.',
      features: ['Forest Bedroom Sanctuaries', 'Mystical Dining Tables', 'Nature-Inspired Sofas', 'Tree Study Desks', 'Sacred Wardrobes'],
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      color: 'from-green-600 to-green-400'
    },
    {
      icon: DoorOpen,
      title: 'Forest Portal Doors & Windows',
      description: 'Traditional Kerala-style and modern doors and windows that frame nature like living art, crafted with forest precision.',
      features: ['Sacred Forest Doors', 'Modern Nature Designs', 'Mystical Window Frames', 'Guardian Security Doors', 'French Forest Doors'],
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Home,
      title: 'Forest Interior Harmony',
      description: 'Complete interior solutions that echo the harmony and balance found in nature, bringing forest tranquility indoors.',
      features: ['Forest Kitchen Cabinets', 'Living Tree Wall Panels', 'Canopy Ceiling Work', 'Nature Storage Solutions', 'Organic Staircases'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      color: 'from-amber-600 to-amber-400'
    },
    {
      icon: TreePine,
      title: 'Sacred Wood Treatment',
      description: 'Professional wood treatment and finishing services that honor the sacred nature of trees, ensuring longevity and natural beauty.',
      features: ['Forest Polishing', 'Natural Staining', 'Weather Protection', 'Sacred Termite Treatment', 'Ancient Restoration'],
      image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      color: 'from-emerald-600 to-emerald-400'
    }
  ];

  const rates = [
    {
      category: 'Sacred Teak Wood',
      items: [
        { item: 'Per Cubic Foot', price: '₹2,500 - ₹3,500', note: 'Ancient Grade A quality' },
        { item: 'Forest Bedroom Set (5 pieces)', price: '₹1,50,000 - ₹2,50,000', note: 'Complete with nature finishing' },
        { item: 'Mystical Dining Table (6 seater)', price: '₹85,000 - ₹1,25,000', note: 'With forest chairs' }
      ],
      icon: '🌳'
    },
    {
      category: 'Royal Rosewood',
      items: [
        { item: 'Per Cubic Foot', price: '₹3,000 - ₹4,500', note: 'Premium forest grade' },
        { item: 'Sacred Forest Door', price: '₹45,000 - ₹75,000', note: 'With frame & nature hardware' },
        { item: 'Mystical Window Frame', price: '₹25,000 - ₹40,000', note: '4x4 feet forest standard' }
      ],
      icon: '🌹'
    },
    {
      category: 'Noble Mahogany',
      items: [
        { item: 'Per Cubic Foot', price: '₹1,800 - ₹2,800', note: 'First forest quality' },
        { item: 'Forest Kitchen Cabinets', price: '₹2,500 - ₹3,500', note: 'Per running foot' },
        { item: 'Wisdom Study Table', price: '₹35,000 - ₹55,000', note: 'With nature storage' }
      ],
      icon: '🍃'
    }
  ];

  const readyItems = [
    {
      name: 'Sacred Kerala Forest Door',
      price: '₹65,000',
      duration: '3-4 weeks',
      image: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      forestFeature: 'Hand-carved forest motifs'
    },
    {
      name: 'Mystical Dining Circle',
      price: '₹95,000',
      duration: '4-5 weeks',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      forestFeature: 'Ancient tree grain pattern'
    },
    {
      name: 'Forest Portal Window',
      price: '₹32,000',
      duration: '2-3 weeks',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      forestFeature: 'Nature-inspired carvings'
    },
    {
      name: 'Wisdom Tree Desk',
      price: '₹42,000',
      duration: '2-3 weeks',
      image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      forestFeature: 'Organic branch design'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={containerVariants}
        className="relative pt-32 pb-20 px-6 text-center min-h-screen flex items-center"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/2499611/2499611-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <TreePine className="w-16 h-16 text-green-400 leaf-animation" />
                <Leaf className="absolute -top-2 -right-2 w-6 h-6 text-green-300 leaf-animation" />
                <div className="absolute -inset-4 bg-green-400/30 rounded-full blur-xl nature-glow"></div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-8"
          >
            Forest Services &
            <span className="text-green-400 block">Sacred Rates</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-green-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
          >
            Comprehensive forest-inspired woodworking solutions with transparent pricing 
            and guaranteed harmony with nature's timeless quality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, text: 'Forest-Time Delivery', color: 'text-green-400' },
              { icon: Shield, text: '2-Year Nature Warranty', color: 'text-blue-400' },
              { icon: Star, text: 'Sacred Premium Quality', color: 'text-yellow-400' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-4 forest-card rounded-2xl p-6 backdrop-blur-md tree-shadow hover:nature-glow transition-all duration-500"
              >
                <feature.icon className={`w-8 h-8 ${feature.color} leaf-animation`} />
                <span className="text-white font-semibold text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesControls}
        variants={containerVariants}
        className="relative py-32 px-6"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2560_1440_24fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Forest Specialties
            </h2>
            <p className="text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              From traditional Kerala forest craftsmanship to modern nature-inspired designs, 
              we deliver excellence rooted in four decades of forest wisdom.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group"
              >
                <Card className="h-full forest-card tree-shadow hover:shadow-2xl transition-all duration-700 overflow-hidden group-hover:nature-glow">
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent group-hover:from-green-900/60 transition-all duration-700"></div>
                    <div className="absolute top-6 left-6">
                      <div className={`bg-gradient-to-r ${service.color} p-4 rounded-full shadow-2xl nature-glow`}>
                        <service.icon className="w-8 h-8 text-white leaf-animation" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8 wood-grain">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-green-200 mb-8 text-lg leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                        <TreePine className="w-5 h-5 mr-2" />
                        Forest Services Include:
                      </h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-green-200 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Rates Section */}
      <motion.section
        ref={ratesRef}
        initial="hidden"
        animate={ratesControls}
        variants={containerVariants}
        className="relative py-32 px-6"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Sacred Forest Pricing
            </h2>
            <p className="text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing for nature's finest materials and comprehensive forest craftsmanship. 
              All prices include sacred artistry and natural finishing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {rates.map((category, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full forest-card tree-shadow hover:shadow-2xl transition-all duration-700 group-hover:nature-glow">
                  <CardHeader className="text-center pb-6">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <CardTitle className="text-3xl text-white group-hover:text-green-300 transition-colors">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 wood-grain">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-green-500/20 pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-semibold text-lg">{item.item}</span>
                          <span className="text-green-400 font-bold text-xl">{item.price}</span>
                        </div>
                        <span className="text-green-300 italic">{item.note}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Ready-to-Build Items */}
          <motion.div variants={itemVariants}>
            <h3 className="text-4xl font-bold text-white text-center mb-16 flex items-center justify-center">
              <Mountain className="w-10 h-10 mr-4 text-green-400" />
              Ready Forest Creations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {readyItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -15 }}
                  className="group"
                >
                  <Card className="forest-card tree-shadow hover:shadow-2xl transition-all duration-700 overflow-hidden group-hover:nature-glow">
                    <div className="relative aspect-square overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent group-hover:from-green-900/60 transition-all duration-700"></div>
                      <Badge className="absolute top-4 right-4 bg-green-600/80 text-white backdrop-blur-md">
                        <TreePine className="w-4 h-4 mr-1" />
                        Ready
                      </Badge>
                    </div>
                    <CardContent className="p-6 wood-grain">
                      <h4 className="font-bold text-white mb-3 text-xl group-hover:text-green-300 transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-3xl font-bold text-green-400">{item.price}</span>
                        <span className="text-green-300 font-medium">{item.duration}</span>
                      </div>
                      <p className="text-green-200 text-sm italic">{item.forestFeature}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ threshold: 0.1 }}
        className="relative py-32 px-6"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/2499611/2499611-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Sacred Forest Process
            </h2>
            <p className="text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              From forest consultation to final creation, we ensure a harmonious and transparent 
              experience that honors both nature and your vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Forest Consultation', description: 'Discuss your vision with nature wisdom', icon: Palette, color: 'from-green-600 to-green-400' },
              { step: '02', title: 'Sacred Design & Quote', description: 'Detailed forest design and transparent pricing', icon: TreePine, color: 'from-blue-600 to-blue-400' },
              { step: '03', title: 'Forest Crafting', description: 'Expert craftsmanship with regular nature updates', icon: Hammer, color: 'from-amber-600 to-amber-400' },
              { step: '04', title: 'Nature Delivery', description: 'Installation and sacred finishing touches', icon: Home, color: 'from-emerald-600 to-emerald-400' }
            ].map((process, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-r ${process.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl nature-glow group-hover:scale-110 transition-transform duration-500`}>
                    <process.icon className="w-10 h-10 text-white leaf-animation" />
                  </div>
                  <Badge className="absolute -top-3 -right-3 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                    {process.step}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {process.title}
                </h3>
                <p className="text-green-200 leading-relaxed text-lg">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ threshold: 0.1 }}
        className="relative py-32 px-6 text-center"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2560_1440_24fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Ready to Begin Your
            <span className="text-green-400 block">Forest Journey?</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl text-green-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Connect with us for a free forest consultation and personalized quote 
            for your nature-inspired woodworking project.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:from-green-500 hover:via-green-400 hover:to-green-300 text-white px-16 py-8 rounded-full text-2xl font-semibold shadow-2xl hover:shadow-green-500/30 transition-all duration-500 nature-glow"
            >
              <TreePine className="mr-4 w-8 h-8 leaf-animation" />
              Get Free Forest Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-400/60 text-green-100 hover:bg-green-400/20 px-16 py-8 rounded-full text-2xl font-semibold backdrop-blur-md wood-texture"
            >
              <Mountain className="mr-4 w-8 h-8" />
              View Forest Gallery
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}