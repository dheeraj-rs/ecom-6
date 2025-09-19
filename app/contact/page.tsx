'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Upload, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Camera,
  FileText,
  TreePine,
  Leaf,
  Mountain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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

export default function Contact() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactRef = useRef(null);
  
  const heroControls = useAnimation();
  const formControls = useAnimation();
  const contactControls = useAnimation();
  
  const heroInView = useInView(heroRef, { threshold: 0.1 });
  const formInView = useInView(formRef, { threshold: 0.1 });
  const contactInView = useInView(contactRef, { threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start('visible');
    if (formInView) formControls.start('visible');
    if (contactInView) contactControls.start('visible');
  }, [heroInView, formInView, contactInView, heroControls, formControls, contactControls]);

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/') || file.type === 'application/pdf';
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      return isValidType && isValidSize;
    });
    
    setSelectedFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: ''
        });
        setSelectedFiles([]);
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
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
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
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
            Let's Create Forest
            <span className="text-green-400 block">Magic Together</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-green-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
          >
            Share your forest vision with us and receive a personalized consultation 
            for your dream nature-inspired woodworking project.
          </motion.p>
        </div>
      </motion.section>

      <div className="relative px-6 pb-32 -mt-20 z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formControls}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <Card className="forest-card tree-shadow backdrop-blur-md">
              <CardHeader className="pb-6">
                <CardTitle className="text-4xl text-white flex items-center gap-4">
                  <div className="relative">
                    <Camera className="w-12 h-12 text-green-400 leaf-animation" />
                    <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md"></div>
                  </div>
                  Custom Forest Order Request
                </CardTitle>
                <p className="text-green-200 text-xl leading-relaxed">
                  Upload reference images and share details about your forest project 
                  for a detailed consultation with our master craftsmen.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-8 wood-grain">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="relative mb-8">
                      <CheckCircle className="w-20 h-20 text-green-400 mx-auto nature-glow" />
                      <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-xl"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Forest Request Submitted Successfully!</h3>
                    <p className="text-green-200 mb-8 text-xl leading-relaxed">
                      Thank you for trusting us with your forest vision. We'll review your project details 
                      and connect with you within 24 hours to begin this magical journey.
                    </p>
                    <Badge className="bg-green-600/80 text-white px-6 py-3 text-lg backdrop-blur-md">
                      <TreePine className="w-5 h-5 mr-2" />
                      Expected Response: Within 24 hours
                    </Badge>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white mb-3 block text-lg font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="py-4 bg-green-900/20 border-green-500/30 text-white placeholder:text-green-300/70 text-lg rounded-xl"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-white mb-3 block text-lg font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="py-4 bg-green-900/20 border-green-500/30 text-white placeholder:text-green-300/70 text-lg rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white mb-3 block text-lg font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="py-4 bg-green-900/20 border-green-500/30 text-white placeholder:text-green-300/70 text-lg rounded-xl"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-white mb-3 block text-lg font-medium">
                          Forest Project Type *
                        </Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger className="py-4 bg-green-900/20 border-green-500/30 text-white rounded-xl">
                            <SelectValue placeholder="Select forest project type" />
                          </SelectTrigger>
                          <SelectContent className="bg-green-900 border-green-500/30 rounded-xl">
                            <SelectItem value="furniture" className="text-white">Forest Custom Furniture</SelectItem>
                            <SelectItem value="doors-windows" className="text-white">Forest Doors & Windows</SelectItem>
                            <SelectItem value="interior" className="text-white">Forest Interior Harmony</SelectItem>
                            <SelectItem value="treatment" className="text-white">Sacred Wood Treatment</SelectItem>
                            <SelectItem value="other" className="text-white">Other Forest Magic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-white mb-3 block text-lg font-medium">
                          Budget Range
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="py-4 bg-green-900/20 border-green-500/30 text-white rounded-xl">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-green-900 border-green-500/30 rounded-xl">
                            <SelectItem value="under-50k" className="text-white">Under ₹50,000</SelectItem>
                            <SelectItem value="50k-100k" className="text-white">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="100k-200k" className="text-white">₹1,00,000 - ₹2,00,000</SelectItem>
                            <SelectItem value="200k-500k" className="text-white">₹2,00,000 - ₹5,00,000</SelectItem>
                            <SelectItem value="above-500k" className="text-white">Above ₹5,00,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-white mb-3 block text-lg font-medium">
                        Forest Timeline
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="py-4 bg-green-900/20 border-green-500/30 text-white rounded-xl">
                          <SelectValue placeholder="When do you need this forest magic completed?" />
                        </SelectTrigger>
                        <SelectContent className="bg-green-900 border-green-500/30 rounded-xl">
                          <SelectItem value="asap" className="text-white">As soon as the forest allows</SelectItem>
                          <SelectItem value="1-2-months" className="text-white">1-2 months</SelectItem>
                          <SelectItem value="3-6-months" className="text-white">3-6 months</SelectItem>
                          <SelectItem value="flexible" className="text-white">Flexible like nature</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <Label htmlFor="description" className="text-white mb-3 block text-lg font-medium">
                        Forest Project Description *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe your forest vision in detail. Include dimensions, style preferences, nature inspirations, specific requirements, etc."
                        required
                        rows={5}
                        className="bg-green-900/20 border-green-500/30 text-white placeholder:text-green-300/70 text-lg rounded-xl"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label className="text-white mb-3 block text-lg font-medium">
                        Forest Reference Images
                      </Label>
                      <p className="text-green-300 mb-4 leading-relaxed">
                        Upload images for reference (JPG, PNG, PDF - Max 10MB each, up to 5 files)
                      </p>
                      
                      <div className="border-2 border-dashed border-green-500/40 rounded-2xl p-12 text-center bg-green-900/10 hover:bg-green-900/20 transition-all duration-300">
                        <input
                          type="file"
                          multiple
                          accept="image/*,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <div className="relative mb-6">
                            <Upload className="w-12 h-12 text-green-400 mx-auto leaf-animation" />
                            <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-lg"></div>
                          </div>
                          <p className="text-white mb-3 text-xl font-medium">Click to upload forest inspiration files</p>
                          <p className="text-green-300 text-lg">or drag and drop your nature references</p>
                        </label>
                      </div>
                      
                      {/* Uploaded Files */}
                      {selectedFiles.length > 0 && (
                        <div className="mt-6 space-y-4">
                          {selectedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between forest-card rounded-2xl p-4 backdrop-blur-md">
                              <div className="flex items-center space-x-4">
                                <div className="relative">
                                  {file.type.startsWith('image/') ? 
                                    <Camera className="w-6 h-6 text-green-400" /> : 
                                    <FileText className="w-6 h-6 text-green-400" />
                                  }
                                </div>
                                <span className="text-white font-medium truncate max-w-xs">{file.name}</span>
                                <Badge className="bg-green-600/80 text-white">
                                  {(file.size / 1024 / 1024).toFixed(1)}MB
                                </Badge>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-full"
                              >
                                <X className="w-5 h-5" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:from-green-500 hover:via-green-400 hover:to-green-300 text-white py-6 text-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-500 nature-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-4"></div>
                          Submitting Forest Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-4" />
                          Submit Custom Forest Order Request
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactControls}
            variants={containerVariants}
            className="space-y-8"
          >
            <Card className="forest-card tree-shadow backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center gap-3">
                  <Mountain className="w-8 h-8 text-green-400" />
                  Connect with Forest
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8 wood-grain">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-green-400 mt-1 leaf-animation" />
                    <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-xl">Forest Workshop Address</h3>
                    <p className="text-green-200 leading-relaxed text-lg">
                      Rajan K K Woodworks<br />
                      Forest Craft Center, Main Road<br />
                      Koyilandy, Kerala, India - 673305<br />
                      <span className="text-green-400 italic">Heart of Nature's Workshop</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Phone className="w-8 h-8 text-green-400 mt-1 leaf-animation" />
                    <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-xl">Forest Hotline</h3>
                    <p className="text-green-200 text-lg">+91 94XXX XXXXX</p>
                    <p className="text-green-200 text-lg">+91 90XXX XXXXX</p>
                    <p className="text-green-400 italic text-sm mt-2">Available during forest hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Mail className="w-8 h-8 text-green-400 mt-1 leaf-animation" />
                    <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-xl">Forest Email</h3>
                    <p className="text-green-200 text-lg">info@rajankkwoodworks.com</p>
                    <p className="text-green-200 text-lg">forestorders@rajankkwoodworks.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Clock className="w-8 h-8 text-green-400 mt-1 leaf-animation" />
                    <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3 text-xl">Forest Working Hours</h3>
                    <p className="text-green-200 text-lg">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-green-200 text-lg">Sunday: By forest appointment</p>
                    <p className="text-green-400 italic text-sm mt-2">Following nature's rhythm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="forest-card tree-shadow backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center gap-3">
                  <TreePine className="w-8 h-8 text-green-400 leaf-animation" />
                  Why Choose Our Forest?
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 wood-grain">
                {[
                  'Free forest consultation and detailed quotation',
                  '40+ years of sacred forest craftsmanship',
                  '2-year nature warranty on all woodwork',
                  'Premium quality materials from sustainable forests',
                  'On-time delivery following nature\'s schedule',
                  '100% customer satisfaction with forest guarantee'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-green-200 text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}