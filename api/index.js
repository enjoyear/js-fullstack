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

router.get('/contests/:contestId', (req, res) => {
  let contest = reusableContests[req.params.contestId];
  contest.description = 'This is the extra description that you can only get from the api call.';
  res.send({
    contests: contest
  });
});


export default router;
