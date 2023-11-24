import ResumePDF from "./images/resume/wilson_gichuhi_resume.pdf";

const PDFViewer = () => {
    const zoomStyle = {
        zoom: '140%',
      };
  return (
    <div className="w-screen h-screen">
      <iframe 
      title="Wilson Gichuhi | My Resume"
      src={ResumePDF} 
      style={zoomStyle}
      className="w-full h-full" 
      />
    </div>
  );
};

export default PDFViewer;
