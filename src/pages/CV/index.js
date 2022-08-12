import React from 'react'

import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Import Files
import { cv } from '../../assets';

const CV = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
        <div className='bg-slate-600 p-8 border border-slate-600 text-slate-100 text-center shadow-md'>
          <h1 className='text-2xl font-semibold'>Curriculum Vitae</h1>
        </div>
        <div className='px-5 pt-3 h-[40rem]'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={cv} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
    </div>
  )
}

export default CV