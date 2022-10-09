import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Course, courses } from "./placeholder";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";
import Modal from "../../components/Modal";

const Course = () => {
    const [course, setCourse] = useState<Course>();
    const [activeQuestion, setActiveQuestion] = useState<number>(-1);
    const [valid, setValid] = useState<boolean>();
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const checkAnswers = () => {
        setShowModal(true);
        setValid(Math.random() > 0.5);
    };

    useEffect(() => {
        if (!router.isReady) return;

        router.query.id &&
            !Array.isArray(router.query.id) &&
            setCourse(courses.at(parseInt(router.query.id)));
    }, [router.isReady]);

    if (!course) return <div>Loading...</div>;

    return (
        <div>
            {activeQuestion === -1 && (
                <>
                    <div className="flex flex-col justify-center items-center h-80 mt-32 mb-16 gap-2">
                        <h1 className="text-5xl">{course.name}</h1>
                        <Image
                            className="flying"
                            src="/book.png"
                            width={226}
                            height={226}
                        />
                        <h2 className="text-xl">{course.description}</h2>
                        <a href={course.docURL} className="flex flex-row">
                            Documentation <AiOutlineLink />
                        </a>
                    </div>
                </>
            )}

            <div className="flex justify-center items-center">
                {activeQuestion === -1 ? (
                    <div
                        className="w-36 text-center rounded bg-gray-50 px-3 py-1 cursor-pointer"
                        onClick={() => setActiveQuestion(0)}
                    >
                        Start questions
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-screen w-screen gap-16">
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="mt-24 text-3xl text-center">
                                {course.questions[activeQuestion].question}
                            </h3>
                            <a
                                href={course.docURL}
                                className="flex flex-row mt-4"
                            >
                                Documentation <AiOutlineLink />
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="grid grid-cols-2 gap-2 w-full">
                                {course.questions[activeQuestion].answers
                                    .concat(
                                        course.questions[activeQuestion]
                                            .wrongAnswers
                                    )
                                    .sort((a, b) => Math.random() - 0.5)
                                    .map((answer, j) => (
                                        <div
                                            key={answer}
                                            className="bg-gray-200 p-3 rounded cursor-pointer"
                                        >
                                            <input
                                                className="mr-4 ml-3"
                                                type="checkbox"
                                                name={j.toString()}
                                            />
                                            <label htmlFor={j.toString()}>
                                                {answer}
                                            </label>
                                        </div>
                                    ))}
                            </div>
                            <div className="flex flex-row gap-2">
                                {activeQuestion !== 0 && (
                                    <button
                                        onClick={() => {
                                            setActiveQuestion(
                                                (prev) => prev - 1
                                            );
                                        }}
                                        className="rounded bg-gray-50 px-3 py-1 mx-auto my-8"
                                    >
                                        Last question
                                    </button>
                                )}
                                <span>
                                    {activeQuestion + 1} /{" "}
                                    {course.questions.length} questions
                                </span>
                                <button
                                    onClick={() => {
                                        if (
                                            activeQuestion ==
                                            course.questions.length - 1
                                        )
                                            checkAnswers();
                                        else
                                            setActiveQuestion(
                                                (prev) => prev + 1
                                            );
                                    }}
                                    className="rounded bg-gray-50 px-3 py-1 mx-auto my-8"
                                >
                                    {activeQuestion ==
                                    course.questions.length - 1
                                        ? "Validate answers"
                                        : "Next question"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* <div className="grid grid-cols-2 gap-12 justify-start align-center mb-8">
      {course.questions.map((question, i) => (
          <div
          key={i}
                        className="flex flex-col course p-4 rounded shadow-xl"
                    >
                        <h3 className="mb-2">{question.question}</h3>
                        {question.answers
                            .concat(question.wrongAnswers)
                            .map((answer, j) => (
                                <div key={j}>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name={i.toString()}
                                        id={j.toString()}
                                    />
                                    <label htmlFor={j.toString()}>
                                        {answer}
                                    </label>
                                </div>
                            ))}
                    </div>
                ))}
            </div> */}

            {/* <div className="flex flex-col items-center justify-center gap-2">
                <button
                    onClick={() => checkAnswers()}
                    className="rounded bg-gray-50 px-3 py-1 mx-auto my-0"
                >
                    Submit
                </button>
            </div> */}

            {showModal && (
                <Modal setShowModal={setShowModal}>
                    {valid ? (
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded px-3 py-1 mx-auto my-0 text-green-600">
                                Correct
                            </div>
                            <span className="text-center">
                                Congratulation you pass the certification for
                                the {course.name} course!
                            </span>
                            <span>
                                Get the certification proof by taking the{" "}
                                {course.name} NFT
                            </span>
                            <Image
                                src="/blockchain_basics.png"
                                width={226}
                                height={226}
                            />
                            <button
                                onClick={() =>
                                    console.log("transaction pending...")
                                }
                                className="rounded px-3 py-1 mx-auto mb-4 bg-blue-300"
                            >
                                Take it
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <div className="rounded px-3 py-1 mx-auto my-0 text-red-600">
                                Incorrect
                            </div>
                            <span className="text-center">
                                You need to pass the questions perfectly to get
                                the certification proof.
                            </span>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setActiveQuestion(-1);
                                }}
                                className="rounded px-3 py-1 mx-auto mb-4 bg-red-300"
                            >
                                Retry
                            </button>
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Course;
