export default function AboutPage() {
  return (
    <div className="container py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 gradient-text">About Rhenvox</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-rhenvox-muted mb-4">
            Founded in 2023, Rhenvox was born from a vision to create software that doesn't just function, but transforms. 
            Our team of engineers, designers, and researchers work together to build innovative solutions.
          </p>
          <p className="text-rhenvox-muted">
            We're passionate about using technology to solve complex problems and create exceptional user experiences.
          </p>
        </div>
        <div className="bg-rhenvox-surface rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-rhenvox-muted">
            To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation. 
            We believe in creating technology that makes a real difference for our clients and the people they serve.
          </p>
          <div className="mt-8 bg-rhenvox-bg p-4 rounded-md">
            <h3 className="font-medium mb-2">Values</h3>
            <ul className="list-disc pl-5 text-rhenvox-muted">
              <li>Excellence in engineering</li>
              <li>User-centered design</li>
              <li>Continuous innovation</li>
              <li>Transparent collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 