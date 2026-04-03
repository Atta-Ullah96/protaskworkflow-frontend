

const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, suggestions, or feedback about proTaskWorkflow? We'd love to hear from you!
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <span className="font-semibold">Email:</span> support@protaskworkflow.com
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +92 300 1234567
            </div>
            <div>
              <span className="font-semibold">Office:</span> Peshawar, Pakistan
            </div>
          </div>

          <div className="mt-6">
            <iframe
              className="w-full h-60 rounded-md shadow-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.105513918554!2d71.5249152!3d34.0060336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93d5d4fc29f4b%3A0xceb35e9872399c5f!2sPeshawar%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1715965888690!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
