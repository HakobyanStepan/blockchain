import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    continents: [
      {
        id: 1,
        img: "bitcoin.jpg",
        img1:"bitcoin1.jpg",
        img2:"bitcoin2.jpg",
        name: "Bitcoin",
        p1: `Bitcoin is a digital currency which operates free of any central control or the oversight of banks or governments. Instead it relies on peer-to-peer software and cryptography.`,
        p2: `A public ledger records all bitcoin transactions and copies are held on servers around the world. Anyone with a spare computer can set up one of these servers, known as a node. Consensus on who owns which coins is reached cryptographically across these nodes rather than relying on a central source of trust like a bank.`,
        p3: `Every transaction is publicly broadcast to the network and shared from node to node. Every ten minutes or so these transactions are collected together by miners into a group called a block and added permanently to the blockchain. This is the definitive account book of bitcoin.`,
        title:'bitcoin',
        price: ''
      },
      {
        id: 2,
        img: "ethereum.jpg",
        img1:"ethereum1.jpg",
        img2:"ethereum2.jpg",
        name: "Ethereum",
        p1: `At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether (ETH).`,
        p2: `Ethereum can be used by anyone to create any secured digital technology. It has a token designed to pay for work done supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.`,
        p3: `Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.`,
        title:'ethereum',
        price: ''
      },
      {
        id: 3,
        img: "binance.jpg", 
        img1:"binance1.jpg",
        img2:"binance2.jpg",
        name: "Binance",
        p1: `Binance Coin (BNB) is a cryptocurrency that can be used to trade and pay fees on the Binance cryptocurrency exchange. The Binance Exchange is the largest cryptocurrency exchange in the world as of January 2018, facilitating more than 1.4 million transactions per second.`,
        p2: `Users of Binance Coin receive a discount in transaction fees on the Binance Exchange as an incentive. BNB can also be exchanged or traded for other cryptocurrencies, such as Bitcoin, Ethereum, Litecoin, etc.`,
        p3: `Binance Coin was created in July 2017 and initially worked on the ethereum blockchain with the token ERC-20 before it became the native currency of Binance’s own blockchain, the Binance Chain.`,
        title:'binancecoin',
        price: ''
      },
      {
        id: 4,
        img: "solana.jpg",
        img1:"solana1.jpg",
        img2:"solana2.jpg",
        name: "Solana",
        p1: `Solana is a blockchain platform designed to host decentralized, scalable applications. Founded in 2017, it is an open-source project currently run by Solana Foundation based in Geneva, while the blockchain was built by San Francisco-based Solana Labs.`,
        p2: `Solana is much faster in terms of the number of transactions it can process and has significantly lower transaction fees than rival blockchains like Ethereum. The cryptocurrency that runs on the Solana blockchain—also named Solana (SOLUSD) and using the ticker symbol SOL—soared almost 12,000% in 2021 and at one point had a market capitalization of over $66 billion, making it the fifth-largest cryptocurrency by this measure at the time`,
        p3: `Solana is a proof-of-stake (PoS) blockchain but improves on it with a mechanism called proof-of-history (PoH), which uses hashed timestamps to verify when transactions occur.`,
        title:'solana',
        price: ''
      },
      {
        id: 23,
        img: "ethereum.jpg",
        img1:"ethereum1.jpg",
        img2:"ethereum2.jpg",
        name: "Ethereum",
        p1: `At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether (ETH).`,
        p2: `Ethereum can be used by anyone to create any secured digital technology. It has a token designed to pay for work done supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.`,
        p3: `Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.`,
        title:'ethereum',
        price: ''
      },
      {
        id: 5,
        img: "tron.jpg",
        img1:"tron1.jpg",
        img2:"tron2.jpg",
        name: "Tron (TRX)",
        p1: `Tron is a blockchain-based project that launched in 2017. It was quite unique at the time in that it didn’t seek to advertise any cryptography or network design-related improvements.`,
        p2: `The basic building blocks of Tron, such as decentralized applications (dApps ), smart contracts, tokens, or its delegated proof-of-stake consensus, were all pioneered by other projects. While some criticized the lack of innovation in the project, many approved the use of already-tested features rather than trying to build something new by all means. This allowed for a greater focus on user experience and design, as well.`,
        p3: `The TRX cryptocurrency gained even greater mainstream attention in 2018 when the non-profit development company behind Tron, the Tron Foundation, acquired peer-to-peer content sharing platform BitTorrent.`,
        title:'tron',
        price: ''
      },
      {
        id: 27,
        img: "ethereum.jpg",
        img1:"ethereum1.jpg",
        img2:"ethereum2.jpg",
        name: "Ethereum",
        p1: `At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether (ETH).`,
        p2: `Ethereum can be used by anyone to create any secured digital technology. It has a token designed to pay for work done supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.`,
        p3: `Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.`,
        title:'ethereum',
        price: ''
      },
      {
        id: 11,
        img: "tron.jpg",
        img1:"tron1.jpg",
        img2:"tron2.jpg",
        name: "Tron (TRX)",
        p1: `Tron is a blockchain-based project that launched in 2017. It was quite unique at the time in that it didn’t seek to advertise any cryptography or network design-related improvements.`,
        p2: `The basic building blocks of Tron, such as decentralized applications (dApps ), smart contracts, tokens, or its delegated proof-of-stake consensus, were all pioneered by other projects. While some criticized the lack of innovation in the project, many approved the use of already-tested features rather than trying to build something new by all means. This allowed for a greater focus on user experience and design, as well.`,
        p3: `The TRX cryptocurrency gained even greater mainstream attention in 2018 when the non-profit development company behind Tron, the Tron Foundation, acquired peer-to-peer content sharing platform BitTorrent.`,
        title:'tron',
        price: ''
      },
     
      
      {
        id: 22,
        img: "ethereum.jpg",
        img1:"ethereum1.jpg",
        img2:"ethereum2.jpg",
        name: "Ethereum",
        p1: `At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether (ETH).`,
        p2: `Ethereum can be used by anyone to create any secured digital technology. It has a token designed to pay for work done supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.`,
        p3: `Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.`,
        title:'ethereum',
        price: ''
      },
      {
        id:12,
        img: "tron.jpg",
        img1:"tron1.jpg",
        img2:"tron2.jpg",
        name: "Tron (TRX)",
        p1: `Tron is a blockchain-based project that launched in 2017. It was quite unique at the time in that it didn’t seek to advertise any cryptography or network design-related improvements.`,
        p2: `The basic building blocks of Tron, such as decentralized applications (dApps ), smart contracts, tokens, or its delegated proof-of-stake consensus, were all pioneered by other projects. While some criticized the lack of innovation in the project, many approved the use of already-tested features rather than trying to build something new by all means. This allowed for a greater focus on user experience and design, as well.`,
        p3: `The TRX cryptocurrency gained even greater mainstream attention in 2018 when the non-profit development company behind Tron, the Tron Foundation, acquired peer-to-peer content sharing platform BitTorrent.`,
        title:'tron',
        price: ''
      },
      {
        id: 21,
        img: "ethereum.jpg",
        img1:"ethereum1.jpg",
        img2:"ethereum2.jpg",
        name: "Ethereum",
        p1: `At its core, Ethereum is a decentralized global software platform powered by blockchain technology. It is most commonly known for its native cryptocurrency, ether (ETH).`,
        p2: `Ethereum can be used by anyone to create any secured digital technology. It has a token designed to pay for work done supporting the blockchain, but participants can also use it to pay for tangible goods and services if accepted.`,
        p3: `Ethereum is designed to be scalable, programmable, secure, and decentralized. It is the blockchain of choice for developers and enterprises creating technology based upon it to change how many industries operate and how we go about our daily lives.`,
        title:'ethereum',
        price: ''
      },

    ],
    searchText: "",
  },
  getters: {
    getContinents(state) {
      return state.continents;
    },
    searchText(state) {
      return state.searchText;
    },
  
  },
  mutations: {
    setSearchText(state, value) {
      state.searchText = value;
 
    },
    setPrice(state, prices) {
      state.continents.forEach((e) => {
        if(e.title == prices.type){
          e.price = prices.value
        }
    });
   
    },
  },
  actions: {
    fetchPrice(context) {
      let keys = ['bitcoin','ethereum','binancecoin','solana','tron']
      
      keys.forEach(el => fetch(`https://api.coingecko.com/api/v3/coins/${el}`)
        .then((response) => response.json())
        .then((result) => {
          context.commit("setPrice", {value:result.market_data.current_price.usd,type:el});
        })
      )
    },
  },
});

export default store;
