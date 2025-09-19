'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Search, Filter, Grid, List, Star, Calendar, Eye, TreePine, Leaf } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';

interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  image: string;
  description: string;
  rating: number;
  duration: string;
  client: string;
  forestInspired: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Ancient Forest Bedroom Sanctuary',
    category: 'Furniture',
    year: 2023,
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    description: 'Complete bedroom set inspired by the tranquil depths of Kerala forests, featuring traditional motifs and modern comfort.',
    rating: 5,
    duration: '3 months',
    client: 'Pillai Family, Kozhikode',
    forestInspired: true
  },
  {
    id: 2,
    title: 'Mystical Forest Dining Circle',
    category: 'Furniture',
    year: 2023,
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    description: 'Elegant 8-seater dining table crafted from ancient teak, designed to bring families together like forest gatherings.',
    rating: 5,
    duration: '6 weeks',
    client: 'Nair Residence, Calicut',
    forestInspired: true
  },
  {
    id: 3,
    title: 'Forest Portal Windows',
    category: 'Architecture',
    year: 2022,
    image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    description: 'Authentic Kerala-style wooden window frames with intricate forest carvings that frame nature like living art.',
    rating: 5,
    duration: '4 weeks',
    client: 'Heritage Forest Home Project',
    forestInspired: true
  },
  {
    id: 4,
    title: 'Modern Forest Kitchen',
    category: 'Interior',
    year: 2023,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    description: 'Contemporary kitchen design that harmonizes modern functionality with the organic beauty of forest craftsmanship.',
    rating: 4,
    duration: '8 weeks',
    client: 'Kumar Family, Koyilandy',
    forestInspired: true
  },
  {
    id: 5,
    title: 'Wisdom Tree Bookshelf',
    category: 'Furniture',
    year: 2022,
    image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    description: 'Floor-to-ceiling bookshelf designed like a mighty tree, with built-in reading nook resembling a forest hideaway.',
    rating: 5,
    duration: '5 weeks',
    client: 'Dr. Menon, Kannur',
    forestInspired: true
  },
  {
    id: 6,
    title: 'Sacred Forest Doors',
    category: 'Architecture',
    year: 2023,
    image: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    description: 'Collection of handcrafted doors for a luxury villa, each telling stories of ancient forest spirits and natural beauty.',
    rating: 5,
    duration: '10 weeks',
    client: 'Luxury Forest Villa Project',
    forestInspired: true
  }
];

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  
  const headerControls = useAnimation();
  const galleryControls = useAnimation();
  
  const headerInView = useInView(headerRef, { threshold: 0.1 });
  const galleryInView = useInView(galleryRef, { threshold: 0.1 });

  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (galleryInView) galleryControls.start('visible');
  }, [headerInView, galleryInView, headerControls, galleryControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || project.year.toString() === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const categories = Array.from(new Set(projects.map(p => p.category)));
  const years = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Header */}
      <motion.section
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
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
            Forest Masterpiece
            <span className="text-green-400 block">Gallery</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-green-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
          >
            Explore four decades of exceptional forest-inspired woodworking projects that showcase 
            our dedication to nature's artistry and timeless craftsmanship.
          </motion.p>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ threshold: 0.1 }}
        className="relative px-6 mb-16 -mt-20 z-30"
      >
        <div className="max-w-7xl mx-auto">
          <Card className="forest-card tree-shadow backdrop-blur-md">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-6 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 w-5 h-5" />
                    <Input
                      placeholder="Search forest projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 py-4 bg-green-900/20 border-green-500/30 text-white placeholder:text-green-300/70 text-lg rounded-xl"
                    />
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-48 py-4 bg-green-900/20 border-green-500/30 text-white rounded-xl">
                      <Filter className="w-5 h-5 mr-2 text-green-400" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-green-900 border-green-500/30 rounded-xl">
                      <SelectItem value="all" className="text-white">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category} className="text-white">{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-full sm:w-36 py-4 bg-green-900/20 border-green-500/30 text-white rounded-xl">
                      <Calendar className="w-5 h-5 mr-2 text-green-400" />
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent className="bg-green-900 border-green-500/30 rounded-xl">
                      <SelectItem value="all" className="text-white">All Years</SelectItem>
                      {years.map(year => (
                        <SelectItem key={year} value={year.toString()} className="text-white">{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' 
                      ? 'bg-green-600 hover:bg-green-500 px-6 py-4' 
                      : 'border-green-500/50 text-white hover:bg-green-900/20 px-6 py-4'
                    }
                  >
                    <Grid className="w-5 h-5" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' 
                      ? 'bg-green-600 hover:bg-green-500 px-6 py-4' 
                      : 'border-green-500/50 text-white hover:bg-green-900/20 px-6 py-4'
                    }
                  >
                    <List className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        ref={galleryRef}
        initial="hidden"
        animate={galleryControls}
        variants={containerVariants}
        className="relative px-6 pb-32"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2560_1440_24fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-20"
            >
              <div className="text-8xl mb-8">🌲</div>
              <h3 className="text-3xl font-bold text-white mb-4">No forest projects found</h3>
              <p className="text-green-200 text-xl">Try adjusting your search or filter criteria to discover more forest masterpieces.</p>
            </motion.div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                : "space-y-8"
            }>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: viewMode === 'grid' ? 1.03 : 1.01, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Card className={`forest-card tree-shadow hover:shadow-2xl transition-all duration-700 overflow-hidden group-hover:nature-glow ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}>
                    <div className={`bg-cover bg-center relative overflow-hidden ${
                      viewMode === 'list' 
                        ? 'sm:w-1/3 aspect-video sm:aspect-square' 
                        : 'aspect-video'
                    }`}
                         style={{ backgroundImage: `url(${project.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent group-hover:from-green-900/60 transition-all duration-700"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-green-500/80 text-white backdrop-blur-md">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.year}
                        </Badge>
                      </div>
                      {project.forestInspired && (
                        <div className="absolute top-6 right-6">
                          <div className="bg-green-400/20 backdrop-blur-md rounded-full p-2">
                            <TreePine className="w-5 h-5 text-green-400 leaf-animation" />
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-6 right-6 flex gap-3">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 group-hover:bg-green-500/50 transition-all duration-300">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className={`p-8 wood-grain ${viewMode === 'list' ? 'sm:flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="bg-green-600/80 text-white text-sm px-3 py-1">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-green-200 mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3 text-green-300">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Duration:</span>
                          <span className="text-green-400 font-semibold">{project.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Client:</span>
                          <span className="text-green-400 font-semibold text-right">{project.client}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ threshold: 0.1 }}
        className="relative py-32 px-6 text-center"
      >
        <VideoBackground 
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          className="z-0"
        />
        
        <div className="relative z-20 max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Ready to Create Your
            <span className="text-green-400 block">Forest Masterpiece?</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl text-green-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Let's bring your vision to life with our four decades of forest-inspired expertise 
            and passion for nature's timeless beauty.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:from-green-500 hover:via-green-400 hover:to-green-300 text-white px-16 py-8 rounded-full text-2xl font-semibold shadow-2xl hover:shadow-green-500/30 transition-all duration-500 nature-glow"
            >
              <TreePine className="mr-4 w-8 h-8 leaf-animation" />
              Start Your Forest Project
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}