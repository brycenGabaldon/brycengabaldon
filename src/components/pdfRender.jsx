import React, { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Resume from "../apps/Resume"

const PdfRender = React.forwardRef(() => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,  });
    return (
        <div>

        <ReactToPrint
          trigger={() => <button onClick={handlePrint}>Print this out!</button>}
          content={() => componentRef.current}
        />
        <Resume ref={componentRef} />
      </div>
    );
});

export default PdfRender;

