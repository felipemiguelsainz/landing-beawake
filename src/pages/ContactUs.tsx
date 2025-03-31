import ContactForm from '../Components/ContactForm'

export default function ContactUs() {
    return (
        <div className=" bg-[#0c0a25] pb-12 text-white flex justify-center items-center flex-wrap h-auto lg:pt-24">
            <div className="w-full text-end pr-36 my-16">
                <h1 className="maven-pro text-4xl md:text-5xl font-semibold">contact<span className="text-light-blue">Us</span></h1>
            </div>
            <div className='w-full h-auto border-solid border-4 gradient-border mx-12 md:mx-0 md:w-4/12 lg:w-3/12 flex flex-wrap py-4 lg:py-2 md:mb-16'>
                <ContactForm/>
            </div>
        </div>
    );
  }