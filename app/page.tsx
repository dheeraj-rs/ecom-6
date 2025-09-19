'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowDown, ChevronRight, Star, Users, TreePine, Hammer, Leaf, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  
  const heroControls = useAnimation();
  const statsControls = useAnimation();
  const featuresControls = useAnimation();
  
  const heroInView = useInView(heroRef, { threshold: 0.1 });
  const statsInView = useInView(statsRef, { threshold: 0.1 });
  const featuresInView = useInView(featuresRef, { threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start('visible');
    if (statsInView) statsControls.start('visible');
    if (featuresInView) featuresControls.start('visible');
  }, [heroInView, statsInView, featuresInView, heroControls, statsControls, featuresControls]);

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Forest Video */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={containerVariants}
        className="relative min-h-screen flex items-center justify-center"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        {/* Floating Nature Elements */}
        <div className="absolute inset-0 floating-particles z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <TreePine className="w-20 h-20 text-green-400 leaf-animation" />
              <div className="absolute -inset-4 bg-green-400/30 rounded-full blur-xl nature-glow"></div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Crafting Dreams from
            <span className="text-green-400 block relative">
              Living Forest
              <Leaf className="inline-block w-12 h-12 ml-4 text-green-300 leaf-animation" />
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Four decades of masterful woodworking in the heart of Kerala's forests. 
            Where ancient trees become timeless treasures.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:from-green-500 hover:via-green-400 hover:to-green-300 text-white px-12 py-6 rounded-full text-xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-500 group nature-glow"
            >
              <Mountain className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Explore Our Forest Craft
              <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-400/60 text-green-100 hover:bg-green-400/20 px-12 py-6 rounded-full text-xl font-semibold backdrop-blur-md wood-texture"
            >
              <TreePine className="mr-3 w-6 h-6" />
              Custom Forest Orders
            </Button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-green-400 mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with Nature Theme */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsControls}
        variants={containerVariants}
        className="relative py-32 px-6"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/2499611/2499611-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Rooted in Excellence
            </h2>
            <p className="text-2xl text-green-200 max-w-3xl mx-auto">
              Like the ancient trees we work with, our legacy grows stronger with time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Star, number: '40+', label: 'Years Growing', subtitle: 'Like mighty oaks' },
              { icon: Users, number: '500+', label: 'Forest Families', subtitle: 'Served with love' },
              { icon: Hammer, number: '1000+', label: 'Nature Projects', subtitle: 'Brought to life' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="forest-card tree-shadow hover:shadow-2xl transition-all duration-500 group-hover:nature-glow">
                  <CardContent className="p-12 text-center wood-grain">
                    <div className="relative mb-8">
                      <stat.icon className="w-16 h-16 text-green-400 mx-auto leaf-animation" />
                      <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-lg group-hover:bg-green-400/30 transition-all duration-500"></div>
                    </div>
                    <div className="text-6xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-2xl text-green-200 font-semibold mb-2">{stat.label}</div>
                    <div className="text-green-300/80 text-lg">{stat.subtitle}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Preview with Forest Ambiance */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresControls}
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
              From the heart of Kerala's forests to your home, we craft nature's gifts 
              into timeless masterpieces that tell stories of the wild.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Forest Furniture',
                image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
                description: 'Handcrafted furniture that brings the serenity of ancient forests into your living space',
                icon: '🌳'
              },
              {
                title: 'Traditional Forest Doors',
                image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
                description: 'Authentic Kerala-style wooden portals inspired by forest pathways and natural beauty',
                icon: '🚪'
              },
              {
                title: 'Nature Interior',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
                description: 'Complete interior solutions that echo the harmony and balance found in nature',
                icon: '🏡'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -15 }}
                className="group"
              >
                <Card className="forest-card tree-shadow hover:shadow-2xl transition-all duration-700 overflow-hidden group-hover:nature-glow">
                  <div className="relative aspect-video overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent group-hover:from-green-900/60 transition-all duration-700"></div>
                    <div className="absolute top-6 left-6">
                      <div className="text-4xl bg-green-400/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8 wood-grain">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-green-200 leading-relaxed text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Mystical Forest */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ threshold: 0.1 }}
        className="relative py-32 px-6"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <TreePine className="w-24 h-24 text-green-400 leaf-animation" />
                <Leaf className="absolute -top-2 -right-2 w-8 h-8 text-green-300 leaf-animation" />
                <div className="absolute -inset-6 bg-green-400/30 rounded-full blur-2xl nature-glow"></div>
              </div>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Ready to Create Something
            <span className="text-green-400 block">Naturally Beautiful?</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl text-green-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let the whispers of the forest guide us as we craft your vision into reality 
            with four decades of nature-inspired expertise.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:from-green-500 hover:via-green-400 hover:to-green-300 text-white px-16 py-8 rounded-full text-2xl font-semibold shadow-2xl hover:shadow-green-500/30 transition-all duration-500 group nature-glow"
            >
              <Mountain className="mr-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
              Begin Your Forest Journey
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}