
  const distanciaEnKm = (origin, destiny) => {
    const lat1 = origin.lat;
    const lon1 = origin.lon;
    const lat2 = destiny.lat;
    const lon2 = destiny.lon;
    const radius = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1); 
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    const distance = radius * c; // Distance in km
    return distance;
  }

  const variableCost = (cost) =>{
    return cost;
  }

  const fixedCost = (cost) =>{
    return cost;
  }
  const increase = (percentage) =>{
    return percentage;
  }

module.exports = {
  distanciaEnKm, 
  variableCost,
  fixedCost,
  increase,
};