import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className='scroll-mt-24'>
      <h2 className='mb-4 font-bold text-4xl'>Contact</h2>
      <div className='flex flex-col items-center'>
        <h4>Let&apos;s work together</h4>
        <ContactForm />
      </div>
    </section>);
};

export default Contact;