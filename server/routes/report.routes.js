import { Router } from 'express';
import { sendReport, listReports } from '../controllers/report.controller';

const router = new Router();

router.route('/').post(sendReport)

router.route('/:lat/:long').get(listReports)


export default router;