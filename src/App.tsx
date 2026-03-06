import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Shield, 
  Zap, 
  Github, 
  Twitter, 
  Linkedin,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Nexus</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
          >
            <a href="#features" className="block text-base font-medium text-slate-600">Features</a>
            <a href="#pricing" className="block text-base font-medium text-slate-600">Pricing</a>
            <a href="#about" className="block text-base font-medium text-slate-600">About</a>
            <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl text-sm font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 mb-6">
                  Now in Public Beta
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8">
                  Build faster with <br />
                  <span className="text-indigo-600">modern infrastructure</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
                  Nexus provides the tools you need to build, deploy, and scale your applications with confidence. Stop worrying about devops and start shipping.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group">
                    Start Building Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all">
                    View Documentation
                  </button>
                </div>
              </motion.div>

              {/* Hero Image/Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-16 relative"
              >
                <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-2xl">
                  <div className="rounded-xl overflow-hidden bg-white aspect-video flex items-center justify-center border border-slate-100">
                    <div className="w-full h-full bg-slate-50 flex flex-col">
                      <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      </div>
                      <div className="flex-grow p-8 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-4 w-full h-full opacity-20">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-indigo-200 rounded-lg animate-pulse"></div>
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Layers className="w-24 h-24 text-indigo-600/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Powerful features designed to help you build better software, faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-indigo-600" />,
                  title: "Lightning Fast",
                  description: "Optimized for speed at every level. Your users will notice the difference."
                },
                {
                  icon: <Shield className="w-6 h-6 text-indigo-600" />,
                  title: "Secure by Default",
                  description: "Enterprise-grade security built into the core. Your data is always protected."
                },
                {
                  icon: <Layers className="w-6 h-6 text-indigo-600" />,
                  title: "Highly Scalable",
                  description: "From side projects to global scale, our infrastructure grows with you."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-1">10k+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Developers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-1">99.9%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Integrations</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to transform your workflow?</h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
                  Join thousands of developers who are already building the future on Nexus.
                </p>
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-lg">
                  Get Started for Free
                </button>
                <div className="mt-8 flex items-center justify-center gap-6 text-indigo-100 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Cancel anytime
                  </div>
                </div>
              </div>
              {/* Abstract background shapes */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Layers className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">Nexus</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Building the next generation of infrastructure for the modern web.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © 2024 Nexus Infrastructure Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
