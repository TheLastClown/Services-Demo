function shapeData(result) {
  const data = result.routes[0];
  const legs = data && data.legs[0];
  return {
    distance: legs.distance.text,
    time: legs.duration.text,
  };
}

export default shapeData;
