//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton1 = document.querySelector('#upvote1');
  const downvoteButton1 = document.querySelector('#downvote1');
  const votesCount1 = document.querySelector('#vote-count1');

  let currentVotes1 = votesCount1.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton1.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes1++;
        votesCount1.textContent = currentVotes1;
        document.getElementById('upvote1').style.backgroundColor = 'Green';
        document.getElementById('downvote1').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes1--;
        votesCount1.textContent = currentVotes1;
        document.getElementById('upvote1').style.backgroundColor = 'White';
        document.getElementById('downvote1').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton1.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes1--;
        votesCount1.textContent = currentVotes1;
        document.getElementById('downvote1').style.backgroundColor = 'Red';
        document.getElementById('upvote1').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes1++;
        votesCount1.textContent = currentVotes1;
        document.getElementById('downvote1').style.backgroundColor = 'White';
        document.getElementById('upvote1').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton1.disabled = true;
    downvoteButton1.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton1.disabled = false;
    downvoteButton1.disabled = false;
  }

}catch{console.log("error")}

/////////////////////////////////////////////////////////
try{
  const upvoteButton2 = document.querySelector('#upvote2');
  const downvoteButton2 = document.querySelector('#downvote2');
  const votesCount2 = document.querySelector('#vote-count2');

  let currentVotes2 = votesCount2.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton2.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes2++;
        votesCount2.textContent = currentVotes2;
        document.getElementById('upvote2').style.backgroundColor = 'Green';
        document.getElementById('downvote2').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes2--;
        votesCount2.textContent = currentVotes2;
        document.getElementById('upvote2').style.backgroundColor = 'White';
        document.getElementById('downvote2').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton2.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes2--;
        votesCount2.textContent = currentVotes2;
        document.getElementById('downvote2').style.backgroundColor = 'Red';
        document.getElementById('upvote2').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes2++;
        votesCount2.textContent = currentVotes2;
        document.getElementById('downvote2').style.backgroundColor = 'White';
        document.getElementById('upvote2').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton2.disabled = true;
    downvoteButton2.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton2.disabled = false;
    downvoteButton2.disabled = false;
  }

}catch{console.log("error")}

////////////////////////////////////////////////////////
try{
  const upvoteButton3 = document.querySelector('#upvote3');
  const downvoteButton3 = document.querySelector('#downvote3');
  const votesCount3 = document.querySelector('#vote-count3');

  let currentVotes3 = votesCount3.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton3.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes3++;
        votesCount3.textContent = currentVotes3;
        document.getElementById('upvote3').style.backgroundColor = 'Green';
        document.getElementById('downvote3').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes3--;
        votesCount3.textContent = currentVotes3;
        document.getElementById('upvote3').style.backgroundColor = 'White';
        document.getElementById('downvote3').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton3.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes3--;
        votesCount3.textContent = currentVotes3;
        document.getElementById('downvote3').style.backgroundColor = 'Red';
        document.getElementById('upvote3').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes3++;
        votesCount3.textContent = currentVotes3;
        document.getElementById('downvote3').style.backgroundColor = 'White';
        document.getElementById('upvote3').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton3.disabled = true;
    downvoteButton3.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton3.disabled = false;
    downvoteButton3.disabled = false;
  }

}catch{console.log("error")}

/////////////////////////////////////////////////////////
try{
  const upvoteButton4 = document.querySelector('#upvote4');
  const downvoteButton4 = document.querySelector('#downvote4');
  const votesCount4 = document.querySelector('#vote-count4');

  let currentVotes4 = votesCount4.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton4.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes4++;
        votesCount4.textContent = currentVotes4;
        document.getElementById('upvote4').style.backgroundColor = 'Green';
        document.getElementById('downvote4').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes4--;
        votesCount4.textContent = currentVotes4;
        document.getElementById('upvote4').style.backgroundColor = 'White';
        document.getElementById('downvote4').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton4.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes4--;
        votesCount4.textContent = currentVotes4;
        document.getElementById('downvote4').style.backgroundColor = 'Red';
        document.getElementById('upvote4').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes4++;
        votesCount4.textContent = currentVotes4;
        document.getElementById('downvote4').style.backgroundColor = 'White';
        document.getElementById('upvote4').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton4.disabled = true;
    downvoteButton4.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton4.disabled = false;
    downvoteButton4.disabled = false;
  }

}catch{console.log("error")}

/////////////////////////////////////////////////////////
try{
  const upvoteButton5 = document.querySelector('#upvote5');
  const downvoteButton5 = document.querySelector('#downvote5');
  const votesCount5 = document.querySelector('#vote-count5');

  let currentVotes5 = votesCount5.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton5.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes5++;
        votesCount5.textContent = currentVotes5;
        document.getElementById('upvote5').style.backgroundColor = 'Green';
        document.getElementById('downvote5').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes5--;
        votesCount5.textContent = currentVotes5;
        document.getElementById('upvote5').style.backgroundColor = 'White';
        document.getElementById('downvote5').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton5.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes5--;
        votesCount5.textContent = currentVotes5;
        document.getElementById('downvote5').style.backgroundColor = 'Red';
        document.getElementById('upvote5').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes5++;
        votesCount5.textContent = currentVotes5;
        document.getElementById('downvote5').style.backgroundColor = 'White';
        document.getElementById('upvote5').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton5.disabled = true;
    downvoteButton5.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton5.disabled = false;
    downvoteButton5.disabled = false;
  }

}catch{console.log("error")}