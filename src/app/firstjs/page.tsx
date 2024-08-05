"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../firstjs/styles/internal.css';
import { useState } from "react";
import Popup from '../components/Popup';
import Content from "./model/campaign";


export default function Home() {

  const customContent = new Content(
    'Boost Your Leads',
    'Harness AI for Effective Camoaigns',
    'Learn More'
  );

  const contentList: Content[] = [
  customContent, customContent, customContent, customContent, customContent, customContent
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  const openPopup = (content: Content) =>  {
    setSelectedContent(content);
    setIsPopupOpen(true)
  };
  const closePopup = () => setIsPopupOpen(false);
  const handleClick = (content: Content) => {
    console.log(content);
    openPopup(content);

  };



  return (
    <main className="p-8">
    
      <div className="container mx-auto mb-8">
        <div className=" blocks grid grid-cols-2 gap-4">
        {contentList.map((content, index) => (
          
          <div className=" block block1 w-[10rem] h-[10rem] bg-blue-200 p-4 rounded-md border border-black flex items-center justify-center">
          <div className="icon1" onClick={() => handleClick(content)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg></div>

          <div><h1>{content.title}</h1>
            <p>{content.description}</p>
            <button>{content.cta}</button>
          </div>
        </div>
      
        ))};

         
          
          
       
         
        </div>
      </div>



      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div>
          <div className="editBanner"> <h2>Edit Banner</h2></div>
          <div className="banner-preview">
            <div className="banner-content">
              {/* <img src="your-image-source.jpg" alt="Banner Image" className="banner-image"> */}
              <div className="banner-text">
                <h3 className="banner-title">{selectedContent?.title}</h3>
                <p className="banner-description">{selectedContent?.description}</p>
                <button className="learn-more-btn">{selectedContent?.cta}</button>
              </div>
            </div>
          </div>
          <p className="image-attribution">Image Attribution: Photo by Xu Haiwei on <a href="https://unsplash.com">Unsplash</a></p>
          <div className="image-selector">
            <div className="image-option selected"></div>
            <div className="image-option"></div>
            <div className="image-option"></div>
            <div className="image-option"></div>
            <div className="image-option"></div>
          </div>
          <form className="banner-form">
            <label>Title</label>
            <input type="text" id="title" name="title" value={selectedContent?.title} />

            <label>Description</label>
            <input type="text" id="description" name="description" value={selectedContent?.description} />
          </form>
          <button className="done-btn" onClick={() => closePopup()}>Done</button>
          <a href="#" className="download-link">Download</a>
        </div>
      </Popup>
      { }
    </main>
  );
}
