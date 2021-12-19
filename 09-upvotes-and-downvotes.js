'use script';

function getVoteCount(obj) {
  const {upvotes, downvotes} = obj;
  const votes = upvotes - downvotes;
  console.log(votes);
}

getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0