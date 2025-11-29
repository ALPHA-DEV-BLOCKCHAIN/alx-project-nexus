export default function Contact() {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded h-32"
        ></textarea>

        <button className="bg-black text-white py-2 px-6 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
