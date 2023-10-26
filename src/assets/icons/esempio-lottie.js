import Lottie from 'react-lottie';
import animationData from './Mail_custom_icon.json'; // Sostituisci con il percorso del tuo file JSON

const IconaAnimata = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default IconaAnimata;
