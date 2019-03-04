function shapeData(data) {
  const serviceData = data.results[0];
  const newObject = {
    lat: serviceData.geometry.location.lat,
    lon: serviceData.geometry.location.lng,
    address: serviceData.formatted_address,
  };
  return newObject;
}

export default shapeData;
