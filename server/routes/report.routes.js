import { Router } from 'express';
import { sendReport, listReports } from '../controllers/report.controller';

const router = new Router();

/**
 * Route to send a report
 */
router.route('/').post(sendReport)

/**
 * Route to get a list with correponding lat and long
 * @param lat
 * @param long
 */
router.route('/:lat/:long').get(listReports)


export default router;