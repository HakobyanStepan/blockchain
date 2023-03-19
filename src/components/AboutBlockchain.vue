<template>
  <div class="whatIsBlockchain">
    <div class="imgBlockchain">
      <img src="@/assets/blockChain.jpg" alt="" srcset="" />
    </div>
    <div class="whatIsBlockchainBlock">
      <div><h2>What Is a Blockchain?</h2></div>
      <div>
        <p>
          A blockchain is a distributed database or ledger that is shared among
          the nodes of a computer network. As a database, a blockchain stores
          information electronically in digital format.The innovation with a
          blockchain is that it guarantees the fidelity and security of a record
          of data and generates trust without the need for a trusted third
          party.
        </p>
      </div>
      <div class="whatIsBlockchainButton">
        <router-link to="/blockchain"><button>See All</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-blockchain",
};
</script>

<style lang="scss" scoped>
.whatIsBlockchain {
  position: relative;
  background: #19283a;
  border-radius: 30px;

  .imgBlockchain {
    opacity: 0.6;
    display: flex;
    img {
      border-radius: 30px;
      width: 100%;
    }
  }
}
.whatIsBlockchain:hover {
  .imgBlockchain {
    opacity: 1;
  }
  button {
    opacity: 1;
  }
}
.whatIsBlockchainBlock {
  position: absolute;
  top: 35%;
  left: 20px;
  width: 30%;
  button {
    background-color: #4e719e;
    color: #0a4e9b;
    border-radius: 10px;
    padding: 10px 20px;
    border: none;
    opacity: 0.7;
    cursor: pointer;
  }
  h2,
  p {
    color: #0a4e9b;
    margin-bottom: 15px;
  }
  h2 {
    color: rgb(10, 78, 155);
    letter-spacing: 2px;
    font-family: "Long-wink";
  }
  p {
    font-size: 18px;
  }
}

@media only screen and (max-width: 1600px) {
  .whatIsBlockchainBlock {
    top: 25%;
    width: 50%;
  }
}
@media only screen and (max-width: 1300px) {
  .whatIsBlockchainBlock {
    p {
      font-size: 15px;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .whatIsBlockchainBlock {
    top: 23%;
    width: 70%;
    p,
    h2 {
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
    }
  }
}
@media only screen and (max-width: 800px) {
  .whatIsBlockchainBlock {
    top: 12%;
    width: 75%;
    p,
    h2 {
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
    }
    button {
      padding: 5px 10px;
    }
  }
}
@media only screen and (max-width: 580px) {
  .whatIsBlockchainBlock{
    top: 32%;
    p {
      display: none;
  }
  }
}
@media only screen and (max-width: 400px) {
  .whatIsBlockchainBlock{
    top: 23%;
   
  }
}
@media only screen and (max-width: 330px) {
  .whatIsBlockchainBlock{
    top: 17%;
   width: 90%;
  }
}
</style>
