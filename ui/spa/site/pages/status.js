import { useState, useEffect } from 'react';

const SERVICE_STATUS = {
  DOWN: "Down",
  UP: "UP",
  LOADING: "Loading",
  UNKNOWN: "Unknown",
};

const URLS = {
  MARKETING: 'http://marketing.app.local',
  API: 'http://api.app.local',
}

export default function StatusPage() {
  return (
    <div>
      {
        Object.values(URLS).map(url => <ServiceStatus serviceAddress={url} />)
      }
    </div>
  );
};

const ServiceStatus = ({ serviceAddress }) => {
  const [serviceStatus, setServiceStatus] = useState(SERVICE_STATUS.UNKNOWN);

  useEffect(() => {
    setServiceStatus(SERVICE_STATUS.LOADING);
    fetch(serviceAddress)
      .then(response => {
        if(response.status == 200) {
          setServiceStatus(SERVICE_STATUS.UP);
        } else {
          setServiceStatus(SERVICE_STATUS.DOWN);
        }
      })
      .catch(e => {
        setServiceStatus(SERVICE_STATUS.DOWN);
      })
  });

  return (
    <p>
      {`${serviceAddress} : ${serviceStatus}`}
    </p>
  );
};
