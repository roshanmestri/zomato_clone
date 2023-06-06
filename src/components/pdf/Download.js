import ReactPDF from '@react-pdf/renderer';
import { PdfComp } from './PdfComp';


import React from 'react'

const Download = () => {

    const downloadPdf= ()=>{
ReactPDF.render(<PdfComp />, `/example.pdf`);

    }
  return (
    <div onClick={()=> downloadPdf}>
        <button>Download pdf</button>

    </div>
  )
}

export default Download
