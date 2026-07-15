import React, { useState } from 'react';
import {
  Atom,
  Music,
  Lightbulb,
  Code2,
  Globe2,
  Users,
  ArrowRight,
  Menu,
  X,
  Cpu,
  Sparkles,
  Zap
} from 'lucide-react';
// import { useAuth } from '../../core/providers/AuthContext';
import { useNavigate } from 'react-router-dom';

const LPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { currentUser } = useAuth();
  const navigate = useNavigate();
  // const isAuthenticated = !!currentUser;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-md border-b border-slate-800 [html.theme-dark_&]:bg-[#040e2e] [html.theme-light_&]:bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/favicon.svg" alt="InventZa Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-indigo-400">
                InventZa
              </span>
            </div>
            
            {/* Desktop Menu 
            <div className="hidden md:flex items-center space-x-8">
              {/*<a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Discover</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Marketplace</a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">About</a>
              {/*!isAuthenticated ? (
                <>
                  <button type="button" onClick={() => navigate('login')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition-all border border-slate-700">
                    Sign In
                  </button>
                  <button type="button" onClick={() => navigate('signup')} className="px-4 py-2 bg-linear-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-cyan-500/20">
                    Join Now
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => navigate('dashboard')} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full text-sm font-medium transition-all border border-emerald-500/30">
                  Go to Dashboard
                </button>
              )}
            </div>
            */}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-700 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/*<a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Discover</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Marketplace</a>*/}
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-cyan-400 bg-slate-800">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-500 text-xs font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-2" />
            The Future of Collaboration is Here
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Where <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500">Genius</span> Connects.
          </h1>
          
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The ultimate social platform for innovators, scientists, and composers. 
            We are building the global neural network for creative minds to discover, connect, and innovate together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">Global</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Reach</div>
            </div>
            <div className="p-4 border-l-0 md:border-l border-r-0 md:border-r border-slate-800">
              <div className="text-4xl font-bold text-white mb-2">Multi</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Disciplinary</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-white mb-2">Secure</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Asset Trading</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Who is InventZa for?</h2>
            <p className='inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-widest'><Zap className="w-3 h-3 mr-1" />V1.2</p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We bridge the gap between logic and art, creating a melting pot for the world's most creative problem solvers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Scientists */}
            <div className="group relative p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Atom className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scientists</h3>
              <p className="text-slate-400 leading-relaxed">
                Share research data, find collaborators for peer review, and discuss breakthroughs in a secure environment designed for intellectual rigor.
              </p>
            </div>

            {/* Innovators */}
            <div className="group relative p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <Lightbulb className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovators</h3>
              <p className="text-slate-400 leading-relaxed">
                From tech entrepreneurs to system architects. Prototype ideas, gather feedback, and find the missing link to your next invention.
              </p>
            </div>

            {/* Composers */}
            <div className="group relative p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Music className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Composers</h3>
              <p className="text-slate-400 leading-relaxed">
                Find lyricists, experimental sound engineers, or scientific inspiration for your next symphony. Art meets physics here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight: The Marketplace */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-900 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-800/30 rounded-3xl border border-slate-700/50 p-8 md:p-16 overflow-hidden relative">
            
            {/* Decorative Grid */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
                  <Code2 className="w-3 h-3 mr-2" />
                  LIVE NOW: BETA MARKETPLACE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Turn Your <span className="text-emerald-400">Code</span> Into Capital
                </h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  We believe innovation should be sustainable. Our marketplace is being developed to support creators and innovators in monetizing their work.
                </p>
                <p className="text-slate-400 mb-8">
                  <span className="font-semibold text-white">Coming Soon:</span> We are actively expanding the marketplace to support various types of digital assets and creative works.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex justify-center items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors">
                    Join the Waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="inline-flex justify-center items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Graphic for Code */}
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-30"></div>
                <div className="relative bg-slate-900 rounded-xl border border-slate-700 p-6 font-mono text-sm shadow-2xl">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-slate-500 w-8">1</span>
                      <span className="text-purple-400">const</span> <span className="text-blue-400 ml-2">innovate</span> <span className="text-slate-300">=</span> <span className="text-yellow-400">async</span> <span className="text-slate-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-slate-300">{`{`}</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-500 w-8">2</span>
                      <span className="text-slate-300 ml-4">const</span> <span className="text-blue-400 ml-2">idea</span> <span className="text-slate-300">=</span> <span className="text-yellow-400">await</span> <span className="text-blue-400 ml-2">connect</span><span className="text-slate-300">(</span><span className="text-green-400">'minds'</span><span className="text-slate-300">);</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-500 w-8">3</span>
                      <span className="text-slate-300 ml-4">if</span> <span className="text-slate-300">(</span><span className="text-blue-400">idea</span><span className="text-slate-300">.</span><span className="text-blue-400">isBrilliant</span><span className="text-slate-300">)</span> <span className="text-slate-300">{`{`}</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-500 w-8">4</span>
                      <span className="text-slate-300 ml-8">return</span> <span className="text-blue-400 ml-2">InventZa</span><span className="text-slate-300">.</span><span className="text-yellow-400">publish</span><span className="text-slate-300">(</span><span className="text-blue-400">idea</span><span className="text-slate-300">);</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-500 w-8">5</span>
                      <span className="text-slate-300 ml-4">{`}`}</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-500 w-8">6</span>
                      <span className="text-slate-300">{`}`}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <Users className="w-4 h-4 text-slate-300" />
                      </div>
                      <span className="text-slate-400 text-xs">Purchased 128 times</span>
                    </div>
                    <div className="text-emerald-400 font-bold">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section
      {!isAuthenticated && (
        <section className="py-20 text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to shape the future?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join thousands of other creative minds on the platform. It's free to join, and the possibilities are endless.
          </p>
          <button type="button" onClick={() => navigate('signup')} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors shadow-xl shadow-white/10">
            Create Your Account
          </button>
        </section>
      )}
         */}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Globe2 className="w-6 h-6 text-slate-600" />
              <span className="text-lg font-bold text-slate-500">InventZa</span>
            </div>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <div className="mt-4 md:mt-0 text-slate-600 text-sm">
              © 2024 InventZa. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LPage;
