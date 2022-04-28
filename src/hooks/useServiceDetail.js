import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [serviceDetail, setServiceDetail] = useState({});

  useEffect(() => {
    fetch(`https://peaceful-cove-33691.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
      });
  }, [serviceId]);

  return [serviceDetail, setServiceDetail];
};

export default useServiceDetail;
