import { useState, useEffect, Fragment } from 'react';

const SERVICE_STATUS = {
  DOWN: "Down",
  UP: "Up",
  LOADING: "Loading",
  INITIAL: "Starting",
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
  const [serviceStatus, setServiceStatus] = useState(SERVICE_STATUS.INITIAL);
  useEffect(() => {
    if (serviceStatus === SERVICE_STATUS.INITIAL) {
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
    }
  }, [serviceStatus]);

  return (
    <p key={serviceAddress}>
      <a href={serviceAddress}>
        {serviceAddress}
      </a>
      <Fragment>
        {` : ${serviceStatus}`}
      </Fragment>
    </p>
  );
};
