import React, { useState} from 'react';
import { ImageCard } from '../components/ImageCard';
import { DescCard } from '../components/DescCard';

import * as tf from '@tensorflow/tfjs';

export const Classify = () => {
  const [progress, setProgress] = useState('idle');
  const [imgPreview, setImgPreview] = useState();
  const [predict, setPredict] = useState([]);
  

  const preProcess = (image) => {
    const imgNormalized = tf.tidy(() => {
      const imgTensor = tf.browser.fromPixels(image);
      const normalized = tf.scalar(1.0).sub(imgTensor.div(tf.scalar(255.0)));
      const batchDims = normalized.expandDims(0);
      const resized = tf.image.resizeBilinear(batchDims, [224, 224]);
      return resized;
    });
    return imgNormalized;
  };

  const classify = async () => {
    try {
      setProgress('process');
      const model = await tf.loadLayersModel('model/model.json');

      const img = document.getElementById('img');
      const imgNormalized = preProcess(img);

      const predictions = tf.tidy(() => {
        const output = model.predict(imgNormalized);
        const predictions = Array.from(tf.argMax(output, 1).dataSync());
        const confidents = Math.round(output.max().arraySync() * 10000) / 100;
        return [predictions[0], confidents];
      });

      setProgress('finish');
      setPredict(predictions);
    } catch (error) {
      console.error(error);
      setProgress((e) => (e = 'error'));
    }
  };

  const handleInput = (e) => {
    const urlPreview = URL.createObjectURL(e.target.files[0]);
    setImgPreview(urlPreview);
  };

  return (
    <div>
      <div className="relative grid grid-cols-1 justify-center justify-items-center gap-5 p-4">
        <div className="absolute top-60 bottom-0 -z-10 w-full bg-[#f0e9d2]"></div>
        <ImageCard
          handleInput={handleInput}
          imgPreview={imgPreview}
          handleClick={classify}
          progressState={progress}
          webcamRef={null} 
     
      
        />
        <DescCard progressState={progress} result={predict} />
      </div>
    </div>
  );
};
