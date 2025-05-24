const express = require('express');
const router = express.Router();
const HistoryController = require('../controller/historyController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/', HistoryController.addHistory);
router.get('/:userId/:exerciseId', HistoryController.getHistoryByUserExercise);

module.exports = router;
