'use client';

import { BackgroundVideo } from '@/components/shared/BackgroundVideo';
import { contactContent } from '@/constants';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden md:rounded-2xl lg:rounded-3xl xl:rounded-4xl"
    >
      <BackgroundVideo
        videoSrc={contactContent.videoSrc}
        posterSrc={contactContent.posterSrc}
        posterAlt="Dental laboratory technician working on high-precision restorations"
        overlayClassName="bg-black/80 lg:bg-black/60"
      />

      <div className="main-container relative z-10 flex flex-col-reverse gap-12 pb-16 md:pt-32 lg:grid lg:grid-cols-2 lg:gap-20 lg:pt-40 xl:grid-cols-[32rem_1fr]">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
