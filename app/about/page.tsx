export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About PromptMarket</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <p className="text-gray-600">
            PromptMarket is a revolutionary platform that connects GPT prompt creators with users seeking high-quality, effective prompts. Our mission is to foster creativity, productivity, and innovation through the power of well-crafted AI prompts.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where anyone can harness the power of AI to enhance their work, spark creativity, and solve complex problems. PromptMarket aims to be the go-to marketplace for AI enthusiasts, professionals, and curious minds alike.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Browse our extensive collection of prompts across various categories.</li>
            <li>Purchase the prompts that suit your needs.</li>
            <li>Use the prompts with your favorite AI models to achieve outstanding results.</li>
            <li>If you're a creator, sell your own prompts and earn from your expertise.</li>
          </ol>
          
          <h2 className="text-2xl font-semibold text-gray-900">Join Our Community</h2>
          <p className="text-gray-600">
            Whether you're a prompt creator, an AI enthusiast, or someone looking to leverage AI in your work, PromptMarket welcomes you. Join our growing community and be part of the AI revolution!
          </p>
        </div>
      </div>
    </div>
  )
}

