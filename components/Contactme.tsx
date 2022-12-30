import React, { useRef } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name: string;
    email: string;
    message: string;
    subject: string;
  };
const Contactme = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:kishanprasad09102001@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}  "[this is a mail from ${formData.email}]"`
    };
    
    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className="flex flex-col space-y-6">
                <h4 className="text-4xl font-semibold text-center">
                    I have got what you need.{" "}
                    <span className='decoration-[#7E6BDB]/50 underline'>Lets Talk</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className='text-[#7E6BDB] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+91 8088011369</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className='text-[#7E6BDB] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Kishanprasad09102001@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className='text-[#7E6BDB] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>My Address</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col space-y-2 w-[90%] mx-auto'>
                    <div className="flex w-full space-x-2">
                        <input {...register('name')} placeholder='Name' className='contactInput w-[50%]' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput w-[50%]' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#7E6BDB] py-4 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contactme