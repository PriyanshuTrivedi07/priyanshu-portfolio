// ./src/components/Resume.jsx
import React from 'react';
import { Container } from "../index"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Helmet } from 'react-helmet';
// Make sure to provide the correct path to your PDF file
import resumePdf from '../../assets/Priyanshu_resume.pdf';

const Resume = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className='py-8 my-8'>

            <Helmet>
                <title>Resume | Priyanshu Trivedi</title>
                <meta name="description" content="View and download my resume. This page showcases my professional experience, skills, and education in a downloadable PDF format." />
                <meta name="keywords" content="resume, CV, download resume, professional experience, skills, education, priyanshu-resume, priyanshu trivedi, priyanshutrivedi, priyanshutrivedi.vercel.app priyanshu-portfolio" />

                <meta property="og:title" content="All Repositories | Priyanshu Trivedi" />
                <meta property="og:description" content="View and download my resume. This page showcases my professional experience, skills, and education in a downloadable PDF format." />
                <meta property="og:image" content="https://priyanshutrivedi.vercel.app/assets/about-CVj-9Jni.svg" />
                <meta property="og:url" content="https://priyanshutrivedi.vercel.app/resume" />

                <meta name="twitter:title" content="All Repositories | Priyanshu Trivedi" />
                <meta name="twitter:description" content="View and download my resume. This page showcases my professional experience, skills, and education in a downloadable PDF format." />
                <meta name="twitter:image" content="https://priyanshutrivedi.vercel.app/assets/about-CVj-9Jni.svg" />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://priyanshutrivedi.vercel.app/resume" />
            </Helmet>

            <Container>

                <div className="flex justify-center">
                    <a
                        role='button'
                        href={resumePdf}
                        download="My_Resume.pdf"
                        className="bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
                    >
                        <i className="fa-solid fa-file-arrow-down mr-2"></i> Download Resume
                    </a>
                </div>

                <div className="my-4 w-full ">
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                        <div className=''>
                            <Viewer
                                fileUrl={resumePdf}
                                // plugins={[defaultLayoutPluginInstance]}
                                className=""
                            />
                        </div>
                    </Worker>
                </div>

                <div className="flex justify-center">
                    <a
                        role='button'
                        href={resumePdf}
                        download="My_Resume.pdf"
                        className="bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
                    >
                        <i className="fa-solid fa-file-arrow-down mr-2"></i> Download Resume
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Resume;

