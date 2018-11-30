import Report from '../models/report';

export async function sendReport(req, res) {
  const { title, time, position } = req.body;
  
  const report = new Report({
    title,
    time: new Date(time),
    position: {
      coordinates: [position.lat, position.long]
    }
  })

  try {
    const newReport = await report.save()
    res.status(201).json(newReport);
  } catch (err) {
    res.status(500).send(err);
  }
}

export function listReports(req, res) {
  const { lat, long } = req.params;

  res.json({list: 'ok'})
}