'use client';
import { useState } from "react";
import '../../public/style.css'

// Freelancer Name: Ekky Mulia Lasardi

export default function Home() {
  const [selectedPages, setSelectedPages] = useState([]);
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const togglePage = (page) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const toggleAll = () => {
    setSelectedPages(selectedPages.length === pages.length ? [] : [...pages]);
  };

  return (
    <div className="area">
      <div className="box">
        <div className="header">
          <span className="font-light">All pages</span>
          <input type="checkbox" checked={selectedPages.length === pages.length} onChange={toggleAll} />
        </div>
        
        <div className="content">
          {pages.map((page, index) => (
            <div key={index} className="page-item">
              <span>{page}</span>
              <input type="checkbox" checked={selectedPages.includes(page)} onChange={() => togglePage(page)} />
            </div>
          ))}
        </div>
        <div className="done-button-container">
          <button className="done-button">Done</button>
        </div>
      </div>
    </div>
  );
}