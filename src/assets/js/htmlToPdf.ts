import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

export class HtmlToPdf {
  config = {
    title: null,
    template: document.querySelector('body')
  };

  constructor(config: {}) {
    Object.assign(this.config, config);
  }

  getPdf() {
    html2canvas(this.config.template, { allowTaint: true }).then(canvas => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      const pageHeight = (contentWidth / 592.28) * 841.89;
      let leftHeight = contentHeight;
      let position = 0;
      const imgWidth = 595.28;
      const imgHeight = (592.28 / contentWidth) * contentHeight;
      const pageData = canvas.toDataURL('image/jpeg', 1.0);
      // console.log(pageData);
      const printHtml = `
      <img src="${pageData}">
      `
      const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
      WindowPrt.document.write(printHtml);
      console.log(WindowPrt);
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
      window.open()
      const PDF = new JsPDF('', 'pt', 'a4');
      if (leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= 841.89;
          if (leftHeight > 0) {
            PDF.addPage();
          }
        }
      }
      PDF.save(this.config.title + '.pdf');
    });
  }
}
