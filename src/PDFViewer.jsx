import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "./images/resume/wilson_gichuhi_resume.pdf";
import { Header } from "./components/nav/Header.nav";

import './pdf.css'

const url = ResumePDF;

export default function Test() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


  useEffect(() => {
    // Hide the browser scrollbar when the component mounts
    document.body.style.overflow = 'hidden';

    // Restore the browser scrollbar when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      {/* <div className="main"> 
	<Document 
		file={url} 
		onLoadSuccess={onDocumentLoadSuccess} 
	> 
		<Page pageNumber={pageNumber} /> 
	</Document> 
	<div> 
		<div className="pagec"> 
		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} 
		</div> 
		<div className="buttonc"> 
		<button 
		type="button"
		disabled={pageNumber <= 1} 
		onClick={previousPage} 
		className="Pre"
			
		> 
		Previous 
		</button> 
		<button 
		type="button"
		disabled={pageNumber >= numPages} 
		onClick={nextPage} 
		
		> 
		Next 
		</button> 
		</div> 
	</div> 
	</div>  */}
<div className="mt-0 w-[100vw] h-full">
  <Header />
  <iframe
    title="Wilson Gichuhi | My Resume"
    src={ResumePDF}
    style={{
      zoom: "140%",
      // overflow: "hidden",
    }}
    // scrolling="no"
    className="w-full h-[100vh] custom-scrollbar"
  />
</div>

    </>
  );
}
