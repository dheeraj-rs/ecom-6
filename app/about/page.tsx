'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Award, Heart, TreePine, Users, MapPin, Calendar, Leaf, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';

export default function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);
  
  const heroControls = useAnimation();
  const storyControls = useAnimation();
  const teamControls = useAnimation();
  
  const heroInView = useInView(heroRef, { threshold: 0.1 });
  const storyInView = useInView(storyRef, { threshold: 0.1 });
  const teamInView = useInView(teamRef, { threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start('visible');
    if (storyInView) storyControls.start('visible');
    if (teamInView) teamControls.start('visible');
  }, [heroInView, storyInView, teamInView, heroControls, storyControls, teamControls]);

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
          src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2560_1440_24fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <TreePine className="w-16 h-16 text-green-400 leaf-animation" />
                <div className="absolute -inset-4 bg-green-400/30 rounded-full blur-xl nature-glow"></div>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border-green-400/30 px-6 py-3 text-lg font-medium backdrop-blur-md">
              <Calendar className="w-5 h-5 mr-2" />
              Rooted Since 1984
            </Badge>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-8"
          >
            The Forest Legacy of
            <span className="text-green-400 block">Rajan K K</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-green-200 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Four decades of passion, precision, and pride in every grain of wood we touch, 
            inspired by the eternal wisdom of Kerala's ancient forests.
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        ref={storyRef}
        initial="hidden"
        animate={storyControls}
        variants={containerVariants}
        className="relative py-32 px-6"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/2499611/2499611-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="aspect-[4/5] bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl tree-shadow"
                     style={{ backgroundImage: "url('https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center space-x-4 text-white">
                      <MapPin className="w-6 h-6 text-green-400" />
                      <span className="text-xl font-medium">Koyilandy, Kerala - Heart of the Forest</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-600 to-green-400 p-6 rounded-full shadow-2xl nature-glow">
                  <TreePine className="w-12 h-12 text-white leaf-animation" />
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-10">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Master of the
                  <span className="text-green-400 block">Forest Craft</span>
                </h2>
                <div className="space-y-8 text-green-200 leading-relaxed">
                  <p className="text-xl">
                    Born among the whispering trees of Koyilandy, Rajan K K discovered his calling 
                    in the sacred dance between craftsman and wood at the tender age of 16. What began 
                    as an apprenticeship with forest artisans blossomed into a lifelong communion 
                    with nature's most generous gift.
                  </p>
                  <p className="text-xl">
                    Over four decades, our workshop has become a sanctuary where ancient trees 
                    find new life, where every grain tells a story, and where the spirit of 
                    Kerala's forests lives on in every masterpiece we create.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Calendar, title: '40+', subtitle: 'Forest Years', color: 'text-green-400' },
                  { icon: Award, title: '500+', subtitle: 'Nature Projects', color: 'text-blue-400' },
                  { icon: Users, title: '50+', subtitle: 'Forest Families', color: 'text-yellow-400' },
                  { icon: Heart, title: '100%', subtitle: 'Nature Love', color: 'text-red-400' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 forest-card tree-shadow rounded-2xl backdrop-blur-md wood-grain hover:nature-glow transition-all duration-500"
                  >
                    <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4 leaf-animation`} />
                    <div className="text-3xl font-bold text-white mb-2">{stat.title}</div>
                    <div className="text-green-300 font-medium">{stat.subtitle}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
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
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Forest Values
            </h2>
            <p className="text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              The sacred principles that guide every project, rooted deep like ancient trees, 
              reaching high like forest canopies.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Forest Authenticity',
                description: 'Every piece reflects the genuine spirit of the forest, crafted with traditional techniques passed down through generations like ancient wisdom.',
                icon: '🌲',
                color: 'from-green-600 to-green-400'
              },
              {
                title: 'Nature Quality',
                description: 'We source only the finest materials from sustainable forests, applying meticulous attention to every detail with the patience of growing trees.',
                icon: '⭐',
                color: 'from-yellow-600 to-yellow-400'
              },
              {
                title: 'Forest Innovation',
                description: 'While honoring ancient forest traditions, we embrace modern techniques like new growth reaching toward the sun, meeting contemporary needs.',
                icon: '💡',
                color: 'from-blue-600 to-blue-400'
              }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full forest-card tree-shadow hover:shadow-2xl transition-all duration-700 group-hover:nature-glow">
                  <CardHeader className="text-center pb-6">
                    <div className="relative mb-6">
                      <div className={`text-6xl mb-6 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                        {value.icon}
                      </div>
                      <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-lg group-hover:bg-green-400/30 transition-all duration-500"></div>
                    </div>
                    <CardTitle className="text-3xl text-white group-hover:text-green-300 transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="wood-grain">
                    <p className="text-green-200 text-center leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamControls}
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
              Forest Artisan Family
            </h2>
            <p className="text-2xl text-green-200 max-w-4xl mx-auto leading-relaxed">
              A dedicated family of skilled craftsmen who share the sacred bond with wood, 
              each bringing their unique gifts to our forest workshop.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Rajan K K',
                role: 'Master Forest Craftsman',
                experience: '40+ Years',
                image: 'https://images.pexels.com/photos/6113569/pexels-photo-6113569.jpeg?auto=compress&cs=tinysrgb&w=600&h=600',
                specialization: 'Ancient Kerala Forest Architecture',
                icon: '🌳'
              },
              {
                name: 'Suresh Kumar',
                role: 'Senior Tree Whisperer',
                experience: '25+ Years',
                image: 'https://images.pexels.com/photos/6113553/pexels-photo-6113553.jpeg?auto=compress&cs=tinysrgb&w=600&h=600',
                specialization: 'Custom Forest Furniture Design',
                icon: '🪵'
              },
              {
                name: 'Arun Nair',
                role: 'Nature Finishing Artist',
                experience: '15+ Years',
                image: 'https://images.pexels.com/photos/6113570/pexels-photo-6113570.jpeg?auto=compress&cs=tinysrgb&w=600&h=600',
                specialization: 'Sacred Wood Treatment & Polish',
                icon: '✨'
              }
            ].map((member, index) => (
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
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent group-hover:from-green-900/60 transition-all duration-700"></div>
                    <div className="absolute top-6 left-6">
                      <div className="text-3xl bg-green-400/20 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center">
                        {member.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="bg-green-500/80 text-white mb-3 backdrop-blur-md">
                        <Mountain className="w-4 h-4 mr-2" />
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 text-center wood-grain">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-green-400 font-semibold mb-4 text-lg">{member.role}</p>
                    <p className="text-green-200 leading-relaxed">{member.specialization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}