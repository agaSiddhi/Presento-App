import React from "react";
import { storage } from "./firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

/**
 * Renders a PDF viewer component.
 *
 * @return {JSX.Element} The PDF viewer component.
 */
export default function PDFViewer() {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [storedResponse, setStoredResponse] = useState("");
  const [responseUrl, setResponseUrl] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [pptxLink, setPptxLink] = useState("");

  /**
   * Makes a POST request to the server to generate a PPT file.
   *
   * @return {Promise<void>} A promise that resolves when the PPT file is generated.
   */
  const makePPT = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/makePPT", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storedResponse),
    });
    const data = await response.json();
    console.log(data);
    setResponseUrl(data);
  };

  /**
   * Submits the form data asynchronously.
   *
   * @param {Event} e - The event object.
   * @return {Promise<void>} A promise that resolves when the form data is submitted.
   */
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      url: link,
    };

    /**
     * Asynchronously sends a POST request to the specified URL with the given data.
     *
     * @param {any} data - The data to be sent in the request body.
     * @return {Promise<string>} A promise that resolves to the response text.
     */
    async function postData(data) {
      const response = await fetch("http://127.0.0.1:4000/scrape_and_convert", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const data1 = await response.text();
      return data1;
    }

    await postData(data)
      .then((response) => {
        const responseData = response;
        setStoredResponse(responseData);
        console.log(responseData);
        // console.log(storedResponse);
      })
      .catch((error) => {
        console.error(error);
      });

    setLoading(false);
  };

  useEffect(() => {
    if (storedResponse !== "") {
      makePPT();
    }
  }, [storedResponse]);

  useEffect(() => {
    if (responseUrl !== "") {
      setPdfLink(responseUrl.url_pdf);
      setPptxLink(responseUrl.url_pptx);
    }
  }, [responseUrl]);

  return (
    <>
      {pdfLink ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Your Presentation</h1>
          <iframe
            className="mx-10 my-10 border-2 border-gray-700 border-solid"
            src={pdfLink}
            height="500px"
            width="700px"
          ></iframe>
        </div>
      ) : (
        <></>
      )}
      <div className="my-0 mx-0">
        <form className="mx-5 mt-6 mb-12 flex flex-row items-center justify-center gap-20 ">
          <div>
            <label>
              <span>
                <input
                  type="link"
                  name="link"
                  className="
            w-full
            px-16 py-2
            border-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            

          "
                  placeholder="Enter link for article "
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="
            h-10
            px-5 py-2
            text-indigo-100
            bg-gray-800
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        {loading ? (
          <div>
            <LoadingAnimation />
          </div>
        ) : (
          <>
            {pptxLink ? (
              <a href={pptxLink} target="_blank">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-gray-800
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            mb-2
          "
                >
                  Download in pptx format
                </button>
              </a>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
}
