import { ContactForm } from '@/components/contact/contact-form'

export function ContactSection() {
  return (
    <section className='container flex flex-col items-center justify-center md:max-w-5xl py-8'>
      <h2 className='font-bold text-3xl md:text-4xl'>Contact</h2>
      <div className='w-full md:w-fit'>
        <ContactForm />
      </div>
    </section>
  )
}
