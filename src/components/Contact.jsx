import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from '../utils/styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { msgSent, msgError } from '../utils/alertMessages';

const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [inputValidation, setInputValidation] = useState({});
    const [error, setError] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleValidate = (e, bound) => {
        setInputValidation(state => ({
            ...state,
            [e.target.name]: form[e.target.name].length < bound,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);



        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Ivo Markov',
                from_email: form.email,
                to_email: "ivo.markoff@gmail.com",
                messsage: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

        ).then(() => {
            setLoading(false);
            msgSent();
            setForm({
                name: "",
                email: "",
                message: "",
            }), (error) => {
                msgError();
                setLoading(false);
                setError(error);
            }
        })
    }

    const isFormValid = Object.values(inputValidation).some(x => x);

    return (
        // TODO: form validation
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.heroSubText}>Get in touch</p>
                <h3 className={styles.heroHeadText}>Contact</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col' htmlFor="name">
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type="text"
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            onBlur={(e) => handleValidate(e, 2)}
                            placeholder="What's your good name"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        {inputValidation.name &&
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        }
                    </label>
                    <label className='flex flex-col' htmlFor="email">
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type="email"
                            name='email'
                            value={form.email}
                            onBlur={(e) => handleValidate(e, 2)}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        {inputValidation.email &&
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        }
                    </label>
                    <label className='flex flex-col' htmlFor="message">
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            rows="9"
                            onChange={handleChange}
                            onBlur={(e) => handleValidate(e, 2)}
                            placeholder='What you want to say'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        {inputValidation.message &&
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        }
                    </label>

                    <button
                        type='submit'
                        disabled={isFormValid ? true : false}
                        className='bg-teriary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending" : "Send"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default SectionWrapper(Contact, "contact");