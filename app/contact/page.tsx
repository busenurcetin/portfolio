import { Mail, MapPin, Radio, Send } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-space-accent">Establish Communication</h1>
      <p className="mb-8">
        Ready to embark on an interstellar collaboration? Use these subspace channels to reach out:
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="mr-4 text-space-accent" />
          <span>cosmic.coder@galaxy.com</span>
        </div>
        <div className="flex items-center">
          <Radio className="mr-4 text-space-accent" />
          <span>Frequency: 42.1337 MHz</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-4 text-space-accent" />
          <span>Sector ZZ9 Plural Z Alpha</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4 text-space-accent">Send a Transmission</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Cosmic Identity
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded bg-space-dark-blue text-space-light"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Subspace Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded bg-space-dark-blue text-space-light"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Transmission Content
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-2 border rounded bg-space-dark-blue text-space-light"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-space-accent hover:bg-space-accent-hover text-space-dark font-bold py-2 px-4 rounded flex items-center"
        >
          <Send className="mr-2" /> Launch Transmission
        </button>
      </form>
    </div>
  )
}

