export function overallPerformance(
  puzzleId,
  playerId,
  correctAnswers,
  wrongAnswers
) {
  let res = this.reqSubmit(puzzleId, playerId, correctAnswers, wrongAnswers);

  return res.compareResults[1];
}

// Server dump calls
// All of the bellow should happen on server
export function reqSubmit(puzzleId, playerId, correctAnswers, wrongAnswers) {
  let res = {};

  res.compareResults = this.compareResults(
    puzzleId,
    correctAnswers,
    wrongAnswers
  );

  res.submitResults = this.submitResults(
    puzzleId,
    playerId,
    correctAnswers,
    wrongAnswers
  );

  return res;
}

export function compareResults(puzzleId, correctAnswers, wrongAnswers) {
  // current client's stats
  let totalAnswers = correctAnswers + wrongAnswers;
  let clientScore = correctAnswers / totalAnswers;

  // other player's stats
  let results = this.getData();
  let totalNumber = results[puzzleId].length;
  let lowerScores = 0,
    higherScores = 0;

  for (let result of results[puzzleId]) {
    let puzzleAnswers = result.correctAnswers + result.wrongAnswers;
    let tempScore = result.correctAnswers / puzzleAnswers;
    if (tempScore >= clientScore) {
      higherScores++;
    } else {
      lowerScores++;
    }
  }

  return ["success", (higherScores / totalNumber) * 100];
}

export function submitResults(
  puzzleId,
  playerId,
  correctAnswers,
  wrongAnswers
) {
  // Ajax call to submit your data to the server
  // Todo code
  return ["success"];
}

export function getData() {
  return {
    0: [
      { wrongAnswers: 1, correctAnswers: 2 },
      { wrongAnswers: 1, correctAnswers: 2 },
      { wrongAnswers: 1, correctAnswers: 2 },
      { wrongAnswers: 0, correctAnswers: 3 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 2, correctAnswers: 1 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 3, correctAnswers: 0 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 12 },
      { wrongAnswers: 12, correctAnswers: 9 },
      { wrongAnswers: 12, correctAnswers: 9 },
      { wrongAnswers: 12, correctAnswers: 9 },
      { wrongAnswers: 12, correctAnswers: 9 },
      { wrongAnswers: 12, correctAnswers: 9 },
      { wrongAnswers: 12, correctAnswers: 9 }
    ]
  };
}
