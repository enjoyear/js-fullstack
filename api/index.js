import express from 'express';
import data from '../src/testData';
const router = express.Router();

const reusableContests = data.contests.reduce(
  (obj, contest) => {
    obj[contest.id] = contest;
    return obj;
  }, {}
);

router.get('/contests', (req, res) => {
  res.send({
    contests: reusableContests
  });
});

export default router;
