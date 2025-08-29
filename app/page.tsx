'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroBackgroundWaves from './components/HeroBackgroundWaves';
import { 
  Cog, 
  Cpu, 
  Frame, 
  Map, 
  Route, 
  BrainCircuit, 
  ShieldCheck,
  Activity,
  Zap,
  Eye
} from 'lucide-react';

export default function OmniMedShowcase() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground overflow-x-hidden">
      {/* Sleek Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold text-primary tracking-widest">Omni-Med</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#overview" className="text-sm text-muted-foreground hover:text-primary transition-colors">Overview</a>
              <a href="#demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">Demo</a>
              <a href="#hardware" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hardware</a>
              <a href="#software" className="text-sm text-muted-foreground hover:text-primary transition-colors">Software</a>
              <a href="#ml-approach" className="text-sm text-muted-foreground hover:text-primary transition-colors">ML Approach</a>
            </div>
            <Badge variant="outline" className="text-xs text-primary border-primary px-2 py-1">
              Prototype
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <HeroBackgroundWaves />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-lg tracking-[0.75rem]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Omni Med
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            The Sentient Surgical Assistant: Unifying an Agile Body with an Intelligent Mind
          </motion.p>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Badge variant="outline" className="text-primary border-primary text-lg px-6 py-2">
              <Activity className="w-4 h-4 mr-2" />
              Hackathon Prototype
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Overview Section */}
      <section id="overview" className="min-h-screen py-16 px-6 bg-gradient-to-b from-background/50 to-muted/10 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent"></div>
        <motion.div 
          className="max-w-7xl mx-auto relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Overview Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200 drop-shadow-lg"
              variants={itemVariants}
            >
              From Mechanized to Intelligent
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Omni-Med transforms traditional medical robotics through advanced Machine Learning, evolving from simple automation into an intelligent, predictive, and context-aware surgical partner.
            </motion.p>
          </motion.div>

          {/* ML Innovation Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {/* Innovation 1: Predictive Collision Avoidance */}
            <motion.div 
              className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl group"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-card-foreground">Predictive Collision Avoidance</h4>
                  <span className="text-sm text-primary font-medium">Intent-Aware Navigation</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Moves beyond simple &quot;stop if close&quot; to <span className="text-primary font-semibold">predicting future paths of moving obstacles</span> (staff, equipment, patient tables) and planning smooth, pre-emptive avoidance maneuvers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BrainCircuit className="w-3 h-3 text-primary" />
                  <span><strong>CNN:</strong> Computer vision for object classification</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Activity className="w-3 h-3 text-primary" />
                  <span><strong>LSTM:</strong> Motion prediction & trajectory analysis</span>
                </div>
              </div>
            </motion.div>

            {/* Innovation 2: Adaptive Learning Docking */}
            <motion.div 
              className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl group"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-card-foreground">Adaptive Learning Docking</h4>
                  <span className="text-sm text-primary font-medium">Unprecedented Precision</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                <span className="text-primary font-semibold">Learns optimal approach strategies</span> for different docking stations instead of relying on pre-programmed coordinates, achieving perfect alignment every time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Cog className="w-3 h-3 text-primary" />
                  <span><strong>Reinforcement Learning:</strong> Optimized approach angles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-3 h-3 text-primary" />
                  <span><strong>Adaptive Control:</strong> Compensates for misalignment</span>
                </div>
              </div>
            </motion.div>

            {/* Innovation 3: Proactive Workflow Integration */}
            <motion.div 
              className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl group"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-card-foreground">Proactive Workflow Integration</h4>
                  <span className="text-sm text-primary font-medium">Context-Aware Movement</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Becomes an <span className="text-primary font-semibold">active participant in surgical workflow</span>, anticipating where it needs to be next based on operation phase and moving into ready position without explicit command.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Activity className="w-3 h-3 text-primary" />
                  <span><strong>Activity Recognition:</strong> Detects surgical phases</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Route className="w-3 h-3 text-primary" />
                  <span><strong>Sequence Learning:</strong> Anticipatory positioning</span>
                </div>
              </div>
            </motion.div>

            {/* Innovation 4: Self-Optimization */}
            <motion.div 
              className="bg-background/60 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl group"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-card-foreground">Self-Optimization System</h4>
                  <span className="text-sm text-primary font-medium">Surface & Load Adaptation</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                <span className="text-primary font-semibold">Automatically adjusts control parameters</span> in real-time for varying floor conditions, surface traction, and weight loads, ensuring consistent precision.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Eye className="w-3 h-3 text-primary" />
                  <span><strong>Anomaly Detection:</strong> Monitors motor signatures</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="w-3 h-3 text-primary" />
                  <span><strong>Adaptive Control:</strong> Real-time parameter tuning</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Transformation Summary */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20 backdrop-blur-md">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-200 mb-4">The Fundamental Shift</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="text-left">
                  <h4 className="font-semibold text-muted-foreground/80 mb-2">Traditional Robotics:</h4>
                  <ul className="space-y-1 text-muted-foreground/60">
                    <li>• Reactive emergency stops</li>
                    <li>• Pre-programmed movements</li>
                    <li>• Explicit command requirements</li>
                    <li>• Fixed operational parameters</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-primary mb-2">Omni-Med Intelligence:</h4>
                  <ul className="space-y-1 text-primary/80">
                    <li>• Predictive path planning</li>
                    <li>• Adaptive learning systems</li>
                    <li>• Anticipatory movement</li>
                    <li>• Self-optimizing performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Demo Images Section */}
      <section id="demo" className="py-20 px-6 bg-gradient-to-r from-card/30 via-card/50 to-card/30 backdrop-blur-sm">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white drop-shadow-md">
              Omni-Med in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our working prototype in action - demonstrating real-time navigation and surgical assistance capabilities.
            </p>
          </motion.div>

          {/* Featured Working Prototype GIF */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="relative group">
                <Image
                  src="/images/hospitalbot.gif"
                  alt="Omni-Med working prototype demonstration"
                  width={800}
                  height={600}
                  className="w-full rounded-lg shadow-2xl border border-border"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-primary font-bold text-lg mb-2">🤖 Live Prototype Demonstration</p>
                    <p className="text-muted-foreground">
                      Real-time autonomous navigation, obstacle avoidance, and surgical assistance capabilities in action
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-primary text-primary-foreground animate-pulse">
                  <Activity className="w-3 h-3 mr-1" />
                  LIVE DEMO
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-8 text-center drop-shadow-sm">Real-World Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-card/40 backdrop-blur-md p-6 rounded-lg border border-border/50 text-center hover:bg-card/60 transition-all duration-300 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">xx.x%</div>
                  <div className="text-muted-foreground font-medium">Navigation Accuracy</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">Precise path execution</div>
                </div>
                <div className="bg-card/40 backdrop-blur-md p-6 rounded-lg border border-border/50 text-center hover:bg-card/60 transition-all duration-300 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;xx-ms</div>
                  <div className="text-muted-foreground font-medium">Response Time</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">Real-time reactions</div>
                </div>
                <div className="bg-card/40 backdrop-blur-md p-6 rounded-lg border border-border/50 text-center hover:bg-card/60 transition-all duration-300 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground font-medium">Operational Uptime</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">Continuous availability</div>
                </div>
                <div className="bg-card/40 backdrop-blur-md p-6 rounded-lg border border-border/50 text-center hover:bg-card/60 transition-all duration-300 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                  <div className="text-muted-foreground font-medium">Safety Incidents</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">Perfect safety record</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hospital Environment Images - Bento Grid */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-8 text-center drop-shadow-sm">Testing Environments</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Large featured image */}
                <div className="md:col-span-2 md:row-span-2">
                  <div className="relative group h-full min-h-[400px]">
                    <Image
                      src="/images/05830f3b-a8af-464b-8736-d3f241a1ac6e.jpeg"
                      alt="Omni-Med in hospital corridor environment"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg transition-transform group-hover:scale-105 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-primary font-bold text-lg mb-2">🏥 Hospital Corridor Navigation</p>
                        <p className="text-muted-foreground">
                          Autonomous navigation through complex medical facility layouts with dynamic obstacle avoidance
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        Primary Testing
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Smaller complementary image */}
                <div className="md:col-span-1">
                  <div className="relative group h-full min-h-[190px]">
                    <Image
                      src="/images/cf729b64-c2ee-4e6a-83a0-8b327eda41ce.jpeg"
                      alt="Omni-Med operational in medical facility"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg transition-transform group-hover:scale-105 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-primary font-semibold">🏥 Medical Integration</p>
                        <p className="text-xs text-muted-foreground">
                          Seamless hospital infrastructure integration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety and capabilities info card */}
                <div className="md:col-span-1">
                  <div className="bg-card/40 backdrop-blur-md p-6 rounded-lg border border-border/50 h-full min-h-[190px] hover:bg-card/60 transition-all duration-300 shadow-lg">
                    <div className="flex items-start space-x-3 mb-4">
                      <ShieldCheck className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-bold text-card-foreground mb-2">Safety First Design</h4>
                        <p className="text-sm text-muted-foreground">
                          Multiple redundant safety mechanisms with real-time monitoring for patient and staff protection.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="text-center">
                        <BrainCircuit className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">AI Navigation</p>
                      </div>
                      <div className="text-center">
                        <Eye className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">360° Vision</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hardware Platform Section */}
      <section id="hardware" className="py-20 px-6 bg-gradient-to-br from-card to-card/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/5 to-transparent"></div>
        <motion.div 
          className="max-w-7xl mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100 drop-shadow-lg">
              The Agile Body 🦾
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The physical platform is engineered around three pillars: extreme compactness, uncompromising precision, and seamless integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-background/60 backdrop-blur-md border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Cog className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg text-card-foreground">The Drive System</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">An Agile Heart</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    At the core of the platform are our custom Co-Axial Swerve Modules. By stacking the steering and drive motors vertically, this design cuts the footprint of each drive unit by nearly 50%.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Pancake Motors</Badge>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Zero-Backlash</Badge>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Harmonic Drives</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-background/60 backdrop-blur-md border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg text-card-foreground">The Electronics</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">An Integrated Nervous System</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Instead of a complex web of separate components, the platform uses a single, custom all-in-one PCB that houses the central computer, all eight motor controllers, and the sensor fusion hub.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Custom PCB</Badge>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">8x Motor Controllers</Badge>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Sensor Fusion</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-background/60 backdrop-blur-md border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Frame className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg text-card-foreground">The Unibody Frame</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">A Purpose-Built Chassis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All components are housed in a monocoque chassis, machined from a single block of aircraft-grade aluminum with integrated mounting for the full sensor suite.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Monocoque Design</Badge>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">360° LiDAR</Badge>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">Depth Camera</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Navigation Stack Section */}
      <section id="software" className="py-20 px-6 bg-gradient-to-l from-background via-muted/10 to-background">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white drop-shadow-md">
              The Intelligent Mind
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The navigation stack is developed on the ROS 2 framework, using a hierarchical architecture that enhances safety and predictability.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Perception & Localization */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card/60 backdrop-blur-md border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Map className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Perception & Localization</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">&ldquo;Where am I?&rdquo; and &ldquo;What&apos;s around me?&rdquo;</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    An Extended Kalman Filter (EKF) fuses data from wheel odometry, the IMU, and LiDAR scans to produce a smooth and accurate estimate of the robot&apos;s state.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge className="bg-accent text-accent-foreground border-primary text-xs px-2 py-0.5">EKF</Badge>
                    <Badge className="bg-accent text-accent-foreground border-primary text-xs px-2 py-0.5">SLAM</Badge>
                    <Badge className="bg-accent text-accent-foreground border-primary text-xs px-2 py-0.5">AMCL</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Global Path Planner */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-card/60 backdrop-blur-md border-border/50 border-l-4 border-l-chart-2 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Route className="w-6 h-6 text-chart-2" />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Global Path Planner</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">Optimal high-level routing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use the Smac Planner (Hybrid-A*). Unlike standard planners, Hybrid-A* considers the robot&apos;s swerve-drive kinematics, generating paths that are inherently smooth and efficient from the start.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge className="bg-accent text-accent-foreground border-chart-2 text-xs px-2 py-0.5">Smac Planner</Badge>
                    <Badge className="bg-accent text-accent-foreground border-chart-2 text-xs px-2 py-0.5">Hybrid-A*</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Local Planner & Controller */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card/60 backdrop-blur-md border-border/50 border-l-4 border-l-chart-1 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-chart-1" />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Local Planner & Controller</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">Recurrent Deep Reinforcement Learning Agent</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The intelligent core that tracks the global path while dynamically avoiding obstacles. Implemented as a custom ROS 2 controller plugin with a Recurrent Actor-Critic Model.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-chart-1 flex items-center gap-2 text-sm">
                        <Eye className="w-3 h-3" />
                        Inputs
                      </h4>
                      <div className="space-y-1">
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">Depth Camera</Badge>
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">360° LiDAR</Badge>
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">Robot State</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-chart-1 flex items-center gap-2 text-sm">
                        <BrainCircuit className="w-3 h-3" />
                        Memory Core
                      </h4>
                      <div className="space-y-1">
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">CNN</Badge>
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">1D-CNN</Badge>
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">LSTM</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-chart-1 flex items-center gap-2 text-sm">
                        <Zap className="w-3 h-3" />
                        Training
                      </h4>
                      <div className="space-y-1">
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">SAC</Badge>
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">NVIDIA Isaac Sim</Badge>
                        <Badge variant="outline" className="border-chart-1 text-chart-1 block w-fit text-xs px-2 py-0.5">Domain Randomization</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Safety & Monitoring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-card/60 backdrop-blur-md border-border/50 border-l-4 border-l-destructive hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-destructive" />
                    <div>
                      <CardTitle className="text-lg text-card-foreground">Safety & Monitoring Layer</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">Executive safety authority</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A dedicated Safety Node runs in parallel with the navigation stack. It has executive authority to bypass the planner and issue an emergency stop command if its low-level checks detect an imminent collision risk or system fault.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <Badge className="bg-accent text-accent-foreground border-destructive text-xs px-2 py-0.5">Emergency Stop</Badge>
                    <Badge className="bg-accent text-accent-foreground border-destructive text-xs px-2 py-0.5">Collision Detection</Badge>
                    <Badge className="bg-accent text-accent-foreground border-destructive text-xs px-2 py-0.5">System Monitoring</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ML Approach Section */}
      <section id="ml-approach" className="py-20 px-6 bg-gradient-to-r from-background via-muted/10 to-background">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white drop-shadow-md">
              ML Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              How Our ML Local Planner Works: A Step-by-Step Guide to Deep Reinforcement Learning Navigation
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Core Algorithm Introduction */}
            <motion.div
              className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Core Learning Algorithm: Soft Actor-Critic (SAC)</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Our local navigation system leverages the power of deep reinforcement learning to enable robots to move smoothly, safely, and efficiently in complex, real-world environments. At its core is the <span className="text-primary font-semibold">Soft Actor-Critic (SAC)</span> algorithm, which trains the robot through trial and error in simulation, emphasizing both high performance and robust, predictable behaviors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                SAC&apos;s key advantage is its dual objective: it doesn&apos;t just maximize the expected reward (completing tasks safely and efficiently), but also the policy&apos;s <span className="text-primary font-semibold">entropy</span> (randomness). This encourages the robot to explore its environment thoroughly during training, resulting in a final policy that is highly adaptable, smooth, and robust to unexpected changes.
              </p>
            </motion.div>

            {/* ML Approach Diagram */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-border/50 inline-block">
                <Image
                  src="/images/mpapproach.png"
                  alt="ML Local Planner Architecture"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-sm text-muted-foreground mt-4 max-w-2xl">
                  Complete ML Local Planner pipeline: from sensor fusion to intelligent navigation decisions
                </p>
              </div>
            </motion.div>

            {/* Step-by-Step Process */}
            <div className="grid gap-6">
              {/* Step 1: Data Acquisition */}
              <motion.div
                className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-3">Data Acquisition & Preprocessing</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The planner begins by ingesting and standardizing data from multiple sensors.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-2">Inputs:</h5>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• <strong>Depth Image:</strong> 2D matrix providing pixelated world geometry</li>
                          <li>• <strong>LiDAR Scan:</strong> 1D vector with 360° range measurements</li>
                          <li>• <strong>Robot State & Goal:</strong> Current velocity and next k goal points</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-2">Preprocessing:</h5>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• <strong>Normalization:</strong> Scale to common range [-1, 1]</li>
                          <li>• <strong>Clipping:</strong> Replace invalid readings with max range</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Feature Extraction */}
              <motion.div
                className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-3">Per-Modality Feature Extraction</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      High-dimensional sensor data is compressed into lower-dimensional, semantically rich feature vectors using specialized neural networks.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4 text-primary" />
                          Depth Images
                        </h5>
                        <p className="text-muted-foreground">
                          <strong>CNN:</strong> Detects patterns from edges to objects, outputs f_depth
                        </p>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                          <Route className="w-4 h-4 text-primary" />
                          LiDAR Scans
                        </h5>
                        <p className="text-muted-foreground">
                          <strong>1D-CNN:</strong> Identifies geometric patterns like doorways, outputs f_lidar
                        </p>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                          <Activity className="w-4 h-4 text-primary" />
                          Robot State
                        </h5>
                        <p className="text-muted-foreground">
                          <strong>MLP:</strong> Processes motion context and task, outputs f_state
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Multi-Modal Fusion */}
              <motion.div
                className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-3">Multi-Modal Feature Fusion</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The distinct feature vectors from each sensor stream are combined into a single, unified representation of the robot&apos;s current situation.
                    </p>
                    <div className="bg-background/30 p-4 rounded-lg">
                      <h5 className="font-semibold text-card-foreground mb-2">Feature-Level Fusion via Concatenation</h5>
                      <p className="text-muted-foreground text-sm">
                        The three vectors (f_depth, f_lidar, f_state) are concatenated into one comprehensive <span className="text-primary font-semibold">Fused Feature Vector (F)</span>. This preserves all information and allows subsequent layers to learn complex cross-modal relationships—like correlating visual objects with their precise LiDAR distances.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Temporal Fusion */}
              <motion.div
                className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-3">Temporal Fusion (Incorporating Memory)</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      To navigate among moving objects, the robot must understand sequences of events, not just instantaneous snapshots.
                    </p>
                    <div className="bg-background/30 p-4 rounded-lg">
                      <h5 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4 text-primary" />
                        Long Short-Term Memory (LSTM) Network
                      </h5>
                      <p className="text-muted-foreground text-sm">
                        The fused feature vector is fed into an LSTM that maintains internal memory state. It selectively remembers and forgets information, understanding current state (h_t) based on relevant history. This is crucial for predicting trajectories of dynamic obstacles like walking people.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 5: Policy Execution */}
              <motion.div
                className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-3">Policy Execution & Action Generation</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The context-aware state from the LSTM is used to generate smooth, precise velocity commands.
                    </p>
                    <div className="bg-background/30 p-4 rounded-lg">
                      <h5 className="font-semibold text-card-foreground mb-2">Stochastic Policy Sampling</h5>
                      <p className="text-muted-foreground text-sm mb-3">
                        The state vector passes to the <strong>Actor Network</strong>, outputting Gaussian distribution parameters for each action dimension [vx, vy, ω]:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 text-xs">
                        <div>
                          <strong className="text-primary">μ (Mean):</strong> The &quot;ideal&quot; action predicted by the model
                        </div>
                        <div>
                          <strong className="text-primary">σ (Standard Deviation):</strong> Model uncertainty or exploration noise
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mt-3">
                        Final velocity commands are sampled from this distribution, introducing slight randomness for smoother control and robust recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 6: Continuous Learning */}
              <motion.div
                className="bg-card/60 backdrop-blur-md p-6 rounded-xl border border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground mb-3">The Continuous Learning Loop</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The entire system is trained end-to-end in simulation using the SAC algorithm.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground text-sm mb-1">1. Experience Collection</h5>
                        <p className="text-muted-foreground text-xs">Robot interacts with photorealistic simulation, storing experiences in Replay Buffer</p>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground text-sm mb-1">2. Batch Sampling</h5>
                        <p className="text-muted-foreground text-xs">Random batches break correlation between consecutive events for stable training</p>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground text-sm mb-1">3. Critic Update (Value Learning)</h5>
                        <p className="text-muted-foreground text-xs">Two Critic networks predict expected future rewards, minimizing prediction error</p>
                      </div>
                      <div className="bg-background/30 p-3 rounded-lg">
                        <h5 className="font-semibold text-card-foreground text-sm mb-1">4. Actor Update (Policy Learning)</h5>
                        <p className="text-muted-foreground text-xs">Actor network maximizes expected reward + entropy for exploratory, robust policy</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-primary text-sm font-medium">
                        This cycle repeats for millions of iterations until the policy converges to reliably navigate complex environments with smooth, efficient, and safe motions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            Omni-Med © 2025 | Hackathon Prototype
          </p>
          <p className="text-muted-foreground/60 mt-2">
            A revolutionary approach to medical robotics
          </p>
        </div>
      </footer>
    </div>
  );
}
