import React, { useState } from "react";
import { useToPng } from "@hugocxl/react-to-image";
import QRCode from "./QRCode";

import "./App.css";

export default function App() {
  const [url, setUrl] = useState();
  const [options, setOptions] = useState();
  // const { ref, isLoading, getSvg, getPng, error } = useToImage();
  const [state, ref, convert] = useToPng();
  function generateQRCode() {
    let website = document.getElementById("website").value;
    console.log(website);
    if (website) {
      setOptions({
        ecLevel: "M", //The error correction level of the QR Code
        enableCORS: false, //Enable crossorigin attribute
        size: 250, //The size of the QR Code
        quietZone: 10, //The size of the quiet zone around the QR Code. This will have the same color as QR Code bgColor
        bgColor: "#FFFFFF", //Background color
        fgColor: "#ebb434", //Foreground color
        logoImage:
          "https://cdn.search.brave.com/serp/v2/_app/immutable/assets/brave-logo-dark.Bg87GL4b.svg", //The logo image. It can be a url/path or a base64 value
        logoWidth: 180,
        logoHeight: 40,
        logoOpacity: 1,
        qrStyle: "squares", //Style of the QR Code modules - dots or squares
      });
      setUrl(website);

      // document.getElementById("qrcode-container").style.display = "block";
    } else {
      alert("Please enter a valid URL");
    }
  }

  return (
    <div ref={ref} className="App">
      <div className="form">
        <h1>QR Code using react-qrcode-logo</h1>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://webisora.com"
          required
        />
        <button type="button" onClick={generateQRCode}>
          Generate QR Code
        </button>

        <div id="qrcode-container">
          <hr />
          <div style={{ padding: "30px" }}>
            <h1>Hello</h1>
            {url ? <QRCode url={url} options={options} /> : null}
          </div>
        </div>
        <div style={{ padding: "30px" }}>
          <img src="src/assets/react.svg" alt="react.svg" />
        </div>
      </div>
      {/* <div style={{ padding: "30px" }}>
        <h1>HEllo </h1>
        <h1>HEllo </h1>
        <h1>HEllo </h1>
      </div> */}
      <button
        onClick={() => {
          console.log("button clicked");
          // getPng();
          convert();
        }}
      >
        Download SVG
      </button>
    </div>
  );
}
