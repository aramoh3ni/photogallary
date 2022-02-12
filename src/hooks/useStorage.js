import { useState, useEffect } from "react";

import {
  getDownloadURL,
  ref as strgRef,
  uploadBytesResumable,
} from "firebase/storage";

import { storage } from "../firebase/config";

export const useStorage = (file, cRef) => {
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (!file) return;

    const path = cRef + file.name;
    // reference
    const storageRef = strgRef(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setErr(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  }, [file]);

  return { progress, url, err };
};
