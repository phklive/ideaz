enum Tag {
    TEZOS = "TEZOS",
    SMART_CONTRACTS = "SMART CONTRACTS",
    FRONT_END = "FRONT END",
    NFT = "NFT",
    DEFI = "DEFI",
    DAO = "DAO",
}

interface Question {
    question: string;
    answers: string[];
    wrongAnswers: string[];
}

export interface Course {
    id: number;
    tags: Tag[];
    name: string;
    description: string;
    duration: number;
    imageURL: string;
    docURL: string;
    questions: Question[];
}

const questions: Question[] = [
    {
        question: "Which year did Nick Szabo invent Smart Contracts?",
        answers: ["1996"],
        wrongAnswers: ["1986", "2006", "2016"],
    },
    {
        question: "When was the Bitcoin White Paper released?",
        answers: ["October 31st, 2007", ""],
        wrongAnswers: [],
    },
    {
        question:
            "Which year were the Ethereum Yellow Paper and the Tezos White Paper released?",
        answers: ["2014"],
        wrongAnswers: ["2013", "2015", "2016"],
    },
    {
        question: "How many bitcoins will ever be issued (in millions)?",
        answers: ["21"],
        wrongAnswers: ["20", "22", "23"],
    },
    {
        question: "How many dollars were fundraised for The DAO (in millions)?",
        answers: ["150"],
        wrongAnswers: ["100", "200", "250"],
    },
    {
        question:
            "How many dollars were stolen from The DAO Hack (in millions)?",
        answers: ["50"],
        wrongAnswers: ["100", "200", "250"],
    },
    {
        question: "Which type of consensus is used in Bitcoin?",
        answers: ["Proof of Work"],
        wrongAnswers: [
            "Proof of Stake",
            "Proof of Authority",
            "Proof of Space",
        ],
    },
];
export const courses: Course[] = [
    {
        id: 1,
        tags: [Tag.TEZOS],
        name: "Blockchain basics",
        description: "What is a blockchain and how it works?",
        duration: 180,
        docURL: "https://opentezos.com/blockchain-basics",
        imageURL:
            "https://images.unsplash.com/photo-1517436073-3b1b3f3e9d0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMGJ1aWxkZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        questions,
    },
    {
        id: 2,
        tags: [Tag.SMART_CONTRACTS, Tag.NFT],
        name: "Smart contracts",
        description: "Learn the basics of smart contracts.",
        duration: 3,
        docURL: "https://opentezos.com/smart-contracts/simple-nft-contract-1",
        imageURL:
            "https://images.unsplash.com/photo-1517436073-3b1b3f3e9d0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMGJ1aWxkZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        questions,
    },
    {
        id: 3,
        tags: [Tag.FRONT_END],
        name: "Build a dApp",
        description: "Learn the basics of Tezos and how to interact with it.",
        duration: 3,
        docURL: "https://opentezos.com/dapp/",
        imageURL:
            "https://images.unsplash.com/photo-1517436073-3b1b3f3e9d0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMGJ1aWxkZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        questions,
    },
];
