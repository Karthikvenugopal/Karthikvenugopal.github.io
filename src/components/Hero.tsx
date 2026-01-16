export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6">
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-accent-primary font-mono text-sm tracking-wide">
          <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></span>
          <span>SYSTEM_READY</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Karthik Venugopal
          <span className="block text-2xl md:text-3xl font-mono text-muted mt-4 font-normal">
            &gt; Building Scalable ML Systems_
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
          Machine Learning Engineer focused on end-to-end MLOps pipelines 
          and production-grade AI architectures. Bridging the gap between 
          research paradigms and scalable deployment.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-700 rounded text-sm font-mono hover:bg-white hover:text-black transition-all duration-300"
          >
            ./view_projects.sh
          </a>
          <a
            href="https://github.com/Karthikvenugopal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-transparent text-gray-400 hover:text-white text-sm font-mono transition-colors"
          >
            github --profile
          </a>
        </div>
      </div>
    </section>
  );
}
