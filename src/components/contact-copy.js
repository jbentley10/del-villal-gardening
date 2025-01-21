"use client";

const copy = {
  heading: "Contact Us",
  body: "Drop us a line, and we'll get back to you as soon as possible.",
};

export default function ContactCopy() {

  return (
    <div className='flex flex-col items-center justify-center space-y-4 text-center mb-8'>
      <div className='space-y-2'>
        <h2 className='text-primary'>{copy.heading}</h2>
        <p className='text-primary max-w-[900px] text-gray-500 text-2xl md:text-xl dark:text-gray-400'>
          {copy.body}
        </p>
      </div>
    </div>
  );
}
