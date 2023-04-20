// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const queryObject = req.query;
  const query = queryObject.q.replace(/ /g, "+");
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${query}&countrycodes=de&dedupe=[1]&format=jsonv2`
  );
  const data = await response.json();
  console.log("daten für " + query, data);

  res.status(200).json(data);
}
