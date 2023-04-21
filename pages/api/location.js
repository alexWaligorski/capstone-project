// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const queryObject = req.query;
  const query = queryObject.q.replace(/ /g, "+");

  const data = await fetchHere(query);

  res.status(200).json(data);
}

async function fetchNominatim(query) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${query}&countrycodes=de&dedupe=[1]&format=jsonv2`
  );
  const data = await response.json();

  const transformedData = data.map((location) => ({
    id: location.place_id,
    lat: location.lat,
    long: location.lon,
    address: location.display_name,
    location: location.display_name,
  }));

  return transformedData;
}

async function fetchHere(query) {
  const response = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${query}+Deutschland&limit=10&in=countryCode:DEU&apiKey=aQ53YjIpxKWprpGASMWoNQ742HvS9T7iddzcK1Uvcco`
  );
  const data = await response.json(query);

  const transformedData = data.items.map((location) => ({
    id: location.id,
    lat: location.position.lat,
    long: location.position.lng,
    address: location.address.label,
    location: location.title,
  }));

  return transformedData;
}
