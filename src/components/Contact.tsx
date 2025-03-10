import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className='scroll-mt-24'>
      <h2 className="text-center mb-4">Contact</h2>
      <div className='flex flex-col items-center'>
        <ContactForm />
      </div>
    </section>);
};

export default Contact;
