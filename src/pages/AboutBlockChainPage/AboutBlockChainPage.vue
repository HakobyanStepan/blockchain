<template>
  <div class="aboutBlockchainPage">
    <div class="images-block">
      <div><img src="@/assets/blockChain1.jpg" alt="" /></div>
      <div><img src="@/assets/blockChain2.jpg" alt="" /></div>
      <div><img src="@/assets/blockChain3.jpg" alt="" /></div>
    </div>
    <div class="context">
      <h1>What Is a Blockchain?</h1>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format. The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        One key difference between a typical database and a blockchain is how
        the data is structured. A blockchain collects information together in
        groups, known as blocks, that hold sets of information. Blocks have
        certain storage capacities and, when filled, are closed and linked to
        the previously filled block, forming a chain of data known as the
        blockchain. All new information that follows that freshly added block is
        compiled into a newly formed block that will then also be added to the
        chain once filled.
      </p>
      <p>
        A database usually structures its data into tables, whereas a
        blockchain, as its name implies, structures its data into chunks
        (blocks) that are strung together. This data structure inherently makes
        an irreversible timeline of data when implemented in a decentralized
        nature. When a block is filled, it is set in stone and becomes a part of
        this timeline. Each block in the chain is given an exact timestamp when
        it is added to the chain.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <h1>What Is a Blockchain?</h1>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
      <p>
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
        A blockchain is a distributed database or ledger that is shared among
        the nodes of a computer network. As a database, a blockchain stores
        information electronically in digital format.The innovation with a
        blockchain is that it guarantees the fidelity and security of a record
        of data and generates trust without the need for a trusted third party.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-blockchain-page",
};
</script>

<style lang="scss" scoped>
.aboutBlockchainPage {
  background-color: rgb(195, 215, 241);
  padding: 30px 150px;
  .images-block {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      width: 30%;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
  .context {
    width: 70%;
    margin: 30px auto;
    h1 {
      text-align: center;
      color: rgb(10, 78, 155);
      letter-spacing: 2px;
      font-family: "Long-wink";
      margin-bottom: 20px;
    }
    p {
      font-size: 22px;
      margin-bottom: 20px;
      color: rgb(23, 123, 236);
    }
  }
}
@media only screen and (max-width: 1300px) {
  .aboutBlockchainPage{
    padding: 20px 80px;
    .context{
      width: 87%;
    }
  }
}
@media only screen and (max-width: 1080px) {
  .aboutBlockchainPage{
    padding: 20px 50px;
    .context{
      width: 83%;
    }
  }
}
@media only screen and (max-width: 700px) {
  .aboutBlockchainPage{
    padding: 20px 30px;
    .context{
      width: 90%;
      p{
        font-size: 18px;
      }
    }
  }
}
@media only screen and (max-width: 350px) {
  .aboutBlockchainPage{ 
    .context{
      width: 100%;
      margin: 20px auto;
      p{
        font-size: 16px;
      }
      h1{
        margin-bottom: 10px;
      }
    }
  }
}
</style>
