import Report from '../models/report';


/**
 * Post a report
 * @param req contains the title, time and position of the post
 * @param res
 */
export async function sendReport(req, res) {
  const { title, time, position } = req.body;
  
  const report = new Report({
    title,
    time: new Date(time),
    position: {
      coordinates: [position.long, position.lat]
    }
  })

  try {
    const newReport = await report.save()
    res.status(201).json({ report: newReport });
  } catch (error) {
    res.status(500).json({ error });
  }
}

/**
 * Get reports in the area
 * @param req contains lat and long
 * @param res
 */
export async function listReports(req, res) {
  const { lat, long } = req.params;

  const maxDistance = 10000; // in meters
  const limit = 10;
  const timeSort = -1 // 1 = older to new; -1 = new to older

  try {
    const reports = await Report.find({
      position: {
        $near: {
          $maxDistance: maxDistance,
          $geometry: {
            type: 'Point',
            coordinates: [long, lat]
          }
        }
      }
    }).sort({ time: timeSort }).limit(limit);
    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ error });
  }
}