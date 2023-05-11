try{
  const upvoteButton1 = document.querySelector('#upvote1');
  const downvoteButton1 = document.querySelector('#downvote1');
  const votesCount1 = document.querySelector('#vote-count1');

  let currentVotes1 = 0;

  upvoteButton1.addEventListener('click', () => {
    currentVotes1++;
    votesCount1.textContent = currentVotes1;
    document.getElementById('upvote1').style.backgroundColor = 'Green';
    document.getElementById('downvote1').style.backgroundColor = 'White'
  });

  downvoteButton1.addEventListener('click', () => {
    currentVotes1--;
    votesCount1.textContent = currentVotes1;
    document.getElementById('downvote1').style.backgroundColor = 'Red';
    document.getElementById('upvote1').style.backgroundColor = 'White';

  });
}catch{console.log("error")}

/////////////////////////////////////////////////////////
try{
  const upvoteButton2 = document.querySelector('#upvote2');
  const downvoteButton2 = document.querySelector('#downvote2');
  const votesCount2 = document.querySelector('#vote-count2');

  let currentVotes2 = 8;

  upvoteButton2.addEventListener('click', () => {
    currentVotes2++;
    votesCount2.textContent = currentVotes2;
    document.getElementById('upvote2').style.backgroundColor = 'Green';
    document.getElementById('downvote2').style.backgroundColor = 'White'

  });

  downvoteButton2.addEventListener('click', () => {
    currentVotes2--;
    votesCount2.textContent = currentVotes2;
    document.getElementById('downvote2').style.backgroundColor = 'Red';
    document.getElementById('upvote2').style.backgroundColor = 'White';

  });
}catch{console.log("error")}
////////////////////////////////////////////////////////
try{
  const upvoteButton3 = document.querySelector('#upvote3');
  const downvoteButton3 = document.querySelector('#downvote3');
  const votesCount3 = document.querySelector('#vote-count3');

  let currentVotes3 = 7;

  upvoteButton3.addEventListener('click', () => {
    currentVotes3++;
    votesCount3.textContent = currentVotes3;
    document.getElementById('upvote3').style.backgroundColor = 'Green';
    document.getElementById('downvote3').style.backgroundColor = 'White'

  });

  downvoteButton3.addEventListener('click', () => {
    currentVotes3--;
    votesCount3.textContent = currentVotes3;
    document.getElementById('downvote3').style.backgroundColor = 'Red';
    document.getElementById('upvote3').style.backgroundColor = 'White';

  });
}catch{console.log("error")}

/////////////////////////////////////////////////////////
try{
  const upvoteButton4 = document.querySelector('#upvote4');
  const downvoteButton4 = document.querySelector('#downvote4');
  const votesCount4 = document.querySelector('#vote-count4');

  let currentVotes4 = 10;

  upvoteButton4.addEventListener('click', () => {
    currentVotes4++;
    votesCount4.textContent = currentVotes4;
    document.getElementById('upvote4').style.backgroundColor = 'Green';
    document.getElementById('downvote4').style.backgroundColor = 'White'

  });

  downvoteButton4.addEventListener('click', () => {
    currentVotes4--;
    votesCount4.textContent = currentVotes4;
    document.getElementById('downvote4').style.backgroundColor = 'Red';
    document.getElementById('upvote4').style.backgroundColor = 'White';

  });
}catch{console.log("error")}

/////////////////////////////////////////////////////////
try{
  const upvoteButton5 = document.querySelector('#upvote5');
  const downvoteButton5 = document.querySelector('#downvote5');
  const votesCount5 = document.querySelector('#vote-count5');

  let currentVotes5 = 21;

  upvoteButton5.addEventListener('click', () => {
    currentVotes5++;
    votesCount5.textContent = currentVotes5;
    document.getElementById('upvote5').style.backgroundColor = 'Green';
    document.getElementById('downvote5').style.backgroundColor = 'White'

  });

  downvoteButton5.addEventListener('click', () => {
    currentVotes5--;
    votesCount5.textContent = currentVotes5;
    document.getElementById('downvote5').style.backgroundColor = 'Red';
    document.getElementById('upvote5').style.backgroundColor = 'White';

  });
}catch{console.log("error")}