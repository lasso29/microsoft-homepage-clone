
import React from "react";
import './ProductCard.css';

import cardImageFive from '../assets/card-image-five.avif';
import cardImageOne from '../assets/card-image-one.avif';

const ProductCard = () => {
  return (
    <>
      <div className="card-section">
        <div className="card-container">

          {/* First card */}
          <div className="card-item">
            <img
              src={cardImageOne}
              alt="Windows 11"
              className="card-image"
            />

            <div className="card-content">
              <h2>Designed for life today—and tomorrow</h2>

              <p>
                The next-generation of games. Your goals.
                Friends and family. Windows 11 was made to
                bring you closer to everything you love.
              </p>

              <a
                href="https://www.microsoft.com/en-gb/windows/windows-11?icid=mscom_marcom_CPH1a_Win11PChlth#pchealthcheck"
                className="card-link"
              >
                See if your PC is ready
              </a>
            </div>
          </div>

          {/* Second card */}
          <div className="card-item">
            <img
              src={cardImageOne}
              alt="Bing Wallpaper"
              className="card-image"
            />

            <div className="card-content">
              <h2>Bring the world closer with Bing Wallpaper</h2>

              <p>
                Download the free app and enjoy breathtaking
                views with a new background each day.
              </p>

              <a
                href="https://www.microsoft.com/en-us/bing/bing-wallpaper"
                className="card-link"
              >
                Get Bing Wallpaper
              </a>
            </div>
          </div>

          {/* Third card */}
          <div className="card-item">
            <img
              src={cardImageOne}
              alt="Microsoft Edge"
              className="card-image"
            />

            <div className="card-content">
              <h2>Microsoft Edge</h2>

              <p>
                Expect more from your browser. Discover a
                faster, more secure way to browse the web.
              </p>

              <a
                href="https://www.microsoft.com/en-ng/edge"
                className="card-link"
              >
                Download now
              </a>
            </div>
          </div>

          {/* Fourth card */}
          <div className="card-item">
            <img
              src={cardImageOne}
              alt="Microsoft OneDrive"
              className="card-image"
            />

            <div className="card-content">
              <h2>Microsoft OneDrive</h2>

              <p>
                Save your files and photos to OneDrive
                and access them from any device, anywhere.
              </p>

              <a
                href="https://www.microsoft.com/en-ng/microsoft-365/onedrive/online-cloud-storage"
                className="card-link"
              >
                Learn more
              </a>
            </div>
          </div>

        </div>

        {/* Organize your life section */}
        <div className="organize-container">

          <div className="left-container-organize">
            <h2>Organize your life</h2>

            <p>
              Keep your ideas and notes organized with OneNote.
            </p>

            <a
              href="https://www.microsoft.com/en-ng/microsoft-365/onenote/digital-note-taking-app"
              className="organize-button"
            >
              Learn more
            </a>
          </div>

          <img
            src={cardImageFive}
            alt="Organize your notes with OneNote"
            className="card-image-five"
          />

        </div>
      </div>
    </>
  );
};

export default ProductCard;
