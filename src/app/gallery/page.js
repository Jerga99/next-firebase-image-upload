
"use client"

import { listAll, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react"
import { storage } from "../firebaseConfig";
import Image from "next/image";


export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, "images/");

      try {
        const result = await listAll(imagesRef);
        const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));
        setImages(urls);
      } catch(error) {
        console.error("Error fetching images", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{display: "flex", flexDirection: "row"}}>
        {images.map((url, index) =>
          <div key={url} style={{margin: 10, position: 'relative', width: '300px', height: '500px'}}>
            <Image
              src={url}
              alt={`Image ${index}`}
              sizes="300px"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
