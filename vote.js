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

//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton6 = document.querySelector('#upvote6');
  const downvoteButton6 = document.querySelector('#downvote6');
  const votesCount6 = document.querySelector('#vote-count6');

  let currentVotes6 = votesCount6.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton6.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes6++;
        votesCount6.textContent = currentVotes6;
        document.getElementById('upvote6').style.backgroundColor = 'Green';
        document.getElementById('downvote6').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes6--;
        votesCount6.textContent = currentVotes6;
        document.getElementById('upvote6').style.backgroundColor = 'White';
        document.getElementById('downvote6').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton6.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes6--;
        votesCount6.textContent = currentVotes6;
        document.getElementById('downvote6').style.backgroundColor = 'Red';
        document.getElementById('upvote6').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes6++;
        votesCount6.textContent = currentVotes6;
        document.getElementById('downvote6').style.backgroundColor = 'White';
        document.getElementById('upvote6').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton6.disabled = true;
    downvoteButton6.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton6.disabled = false;
    downvoteButton6.disabled = false;
  }

}catch{console.log("error")}


//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton7 = document.querySelector('#upvote7');
  const downvoteButton7 = document.querySelector('#downvote7');
  const votesCount7 = document.querySelector('#vote-count7');

  let currentVotes7 = votesCount7.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton7.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes7++;
        votesCount7.textContent = currentVotes7;
        document.getElementById('upvote7').style.backgroundColor = 'Green';
        document.getElementById('downvote7').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes7--;
        votesCount7.textContent = currentVotes7;
        document.getElementById('upvote7').style.backgroundColor = 'White';
        document.getElementById('downvote7').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton7.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes7--;
        votesCount7.textContent = currentVotes7;
        document.getElementById('downvote7').style.backgroundColor = 'Red';
        document.getElementById('upvote7').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes7++;
        votesCount7.textContent = currentVotes7;
        document.getElementById('downvote7').style.backgroundColor = 'White';
        document.getElementById('upvote7').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton7.disabled = true;
    downvoteButton7.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton7.disabled = false;
    downvoteButton7.disabled = false;
  }

}catch{console.log("error")}



//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton8 = document.querySelector('#upvote8');
  const downvoteButton8 = document.querySelector('#downvote8');
  const votesCount8 = document.querySelector('#vote-count8');

  let currentVotes8 = votesCount8.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton8.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes8++;
        votesCount8.textContent = currentVotes8;
        document.getElementById('upvote8').style.backgroundColor = 'Green';
        document.getElementById('downvote8').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes8--;
        votesCount8.textContent = currentVotes8;
        document.getElementById('upvote8').style.backgroundColor = 'White';
        document.getElementById('downvote8').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton8.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes8--;
        votesCount8.textContent = currentVotes8;
        document.getElementById('downvote8').style.backgroundColor = 'Red';
        document.getElementById('upvote8').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes8++;
        votesCount8.textContent = currentVotes8;
        document.getElementById('downvote8').style.backgroundColor = 'White';
        document.getElementById('upvote8').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton8.disabled = true;
    downvoteButton8.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton8.disabled = false;
    downvoteButton8.disabled = false;
  }

}catch{console.log("error")}



//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton9 = document.querySelector('#upvote9');
  const downvoteButton9 = document.querySelector('#downvote9');
  const votesCount9 = document.querySelector('#vote-count9');

  let currentVotes9 = votesCount9.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton9.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes9++;
        votesCount9.textContent = currentVotes9;
        document.getElementById('upvote9').style.backgroundColor = 'Green';
        document.getElementById('downvote9').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes9--;
        votesCount9.textContent = currentVotes9;
        document.getElementById('upvote9').style.backgroundColor = 'White';
        document.getElementById('downvote9').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton9.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes9--;
        votesCount9.textContent = currentVotes9;
        document.getElementById('downvote9').style.backgroundColor = 'Red';
        document.getElementById('upvote9').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes9++;
        votesCount9.textContent = currentVotes9;
        document.getElementById('downvote9').style.backgroundColor = 'White';
        document.getElementById('upvote9').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton9.disabled = true;
    downvoteButton9.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton9.disabled = false;
    downvoteButton9.disabled = false;
  }

}catch{console.log("error")}



//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton10 = document.querySelector('#upvote10');
  const downvoteButton10 = document.querySelector('#downvote10');
  const votesCount10 = document.querySelector('#vote-count10');

  let currentVotes10 = votesCount10.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton10.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes10++;
        votesCount10.textContent = currentVotes10;
        document.getElementById('upvote10').style.backgroundColor = 'Green';
        document.getElementById('downvote10').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes10--;
        votesCount10.textContent = currentVotes10;
        document.getElementById('upvote10').style.backgroundColor = 'White';
        document.getElementById('downvote10').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton10.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes10--;
        votesCount10.textContent = currentVotes10;
        document.getElementById('downvote10').style.backgroundColor = 'Red';
        document.getElementById('upvote10').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes10++;
        votesCount10.textContent = currentVotes10;
        document.getElementById('downvote10').style.backgroundColor = 'White';
        document.getElementById('upvote10').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton10.disabled = true;
    downvoteButton10.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton10.disabled = false;
    downvoteButton10.disabled = false;
  }

}catch{console.log("error")}



//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton11 = document.querySelector('#upvote11');
  const downvoteButton11 = document.querySelector('#downvote11');
  const votesCount11 = document.querySelector('#vote-count11');

  let currentVotes11 = votesCount11.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton11.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes11++;
        votesCount11.textContent = currentVotes11;
        document.getElementById('upvote11').style.backgroundColor = 'Green';
        document.getElementById('downvote11').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes11--;
        votesCount11.textContent = currentVotes11;
        document.getElementById('upvote11').style.backgroundColor = 'White';
        document.getElementById('downvote11').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton11.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes11--;
        votesCount11.textContent = currentVotes11;
        document.getElementById('downvote11').style.backgroundColor = 'Red';
        document.getElementById('upvote11').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes11++;
        votesCount11.textContent = currentVotes11;
        document.getElementById('downvote11').style.backgroundColor = 'White';
        document.getElementById('upvote11').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton11.disabled = true;
    downvoteButton11.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton11.disabled = false;
    downvoteButton11.disabled = false;
  }

}catch{console.log("error")}



//////////////////////////////////////////////////////////////////////
try{
  const upvoteButton12 = document.querySelector('#upvote12');
  const downvoteButton12 = document.querySelector('#downvote12');
  const votesCount12 = document.querySelector('#vote-count12');

  let currentVotes12 = votesCount12.textContent;
  let hasVotedUp = false;
  let hasVotedDown = false;

  upvoteButton12.addEventListener('click', () => {
    if(!hasVotedDown){
      if (!hasVotedUp){
        currentVotes12++;
        votesCount12.textContent = currentVotes12;
        document.getElementById('upvote12').style.backgroundColor = 'Green';
        document.getElementById('downvote12').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedUp = true;
      }else{
        currentVotes12--;
        votesCount12.textContent = currentVotes12;
        document.getElementById('upvote12').style.backgroundColor = 'White';
        document.getElementById('downvote12').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedUp = false;
      }
    }
  });

  downvoteButton12.addEventListener('click', () => {
    if(!hasVotedUp){
      if (!hasVotedDown) {
        currentVotes12--;
        votesCount12.textContent = currentVotes12;
        document.getElementById('downvote12').style.backgroundColor = 'Red';
        document.getElementById('upvote12').style.backgroundColor = 'White';
        disableVotingButtons();
        hasVotedDown = true;
      }else {
        currentVotes12++;
        votesCount12.textContent = currentVotes12;
        document.getElementById('downvote12').style.backgroundColor = 'White';
        document.getElementById('upvote12').style.backgroundColor = 'White';
        ableVotingButtons();
        hasVotedDown = false;
      }
    }
  });

  function disableVotingButtons() {
    upvoteButton12.disabled = true;
    downvoteButton12.disabled = true;
  }

  function ableVotingButtons() {
    upvoteButton12.disabled = false;
    downvoteButton12.disabled = false;
  }

}catch{console.log("error")}



///