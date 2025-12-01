import React from "react";
import jsPDF from "jspdf";
import  { PDFDownloadLink }  from '@react-pdf/renderer';
import { ResumePDF } from "./ResumePDF";



const Header = () => {
    // const downloadResume = () => {
    //     const doc = new jsPDF();
    //     doc.text('Рыскелди Мырзалиев - Frontend Developer', 10, 10);
    //     doc.text('Навыки: HTML, CSS, JavaScript, React', 10, 30);
    //     doc.save('resume.pdf');
    // };

    const DownlaodButton = () => (
    <PDFDownloadLink 
    document={<ResumePDF />}
    fileName="Ryskeldi-Myyrzaliev-Resume.pdf"
    >  {({ loading }) => (
      <button className="button button-green">
        {loading ? "Генерируется..." : "Скачать резюме"}
      </button>
    )}
    </PDFDownloadLink>
)

    return (
        <header className="header">
            <div className="header-container">
                <div>
                    <h1 className="header-title">Рыскелди Мырзалиев</h1>
                    {/* <img src="profile.jpg" alt="profile" className="icon-image" /> */}
                    <p className="header-subtitle">Frontend Developer</p>
                    <p className="header-desc">JavaScript · TypeScript · React</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <DownlaodButton />
                        <address>
                        <a href="mailto:+996770229992" className="button button-green">
                            Связаться
                        </a>
                        </address>
                </div>
            </div>
        </header>
    );
};
export default Header;