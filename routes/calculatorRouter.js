import { Router } from "express";
import * as calc from '../controllers/calculatorController.js';
const router = Router();

router.post('/sum', calc.sum);


router.post('/subtract', calc.sub);


router.post('/product', calc.mul);


export default router;