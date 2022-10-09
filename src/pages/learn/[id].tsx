import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Course, courses } from "./placeholder";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";
import Modal from "../../components/Modal";

const Course = () => {
    const [course, setCourse] = useState<Course>();
    const [activeQuestion, setActiveQuestion] = useState(0);
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

            <div>
                <h3>{course.questions[activeQuestion].question}</h3>
                {course.questions[activeQuestion].answers
                    .concat(course.questions[activeQuestion].wrongAnswers)
                    .map((answer, j) => (
                        <div key={j}>
                            <input className="mr-2" type="checkbox" />
                            <label htmlFor={j.toString()}>{answer}</label>
                        </div>
                    ))}
                <button
                    onClick={() => {
                        if (activeQuestion == course.questions.length - 1)
                            checkAnswers();
                        else setActiveQuestion((prev) => prev + 1);
                    }}
                    className="rounded bg-gray-50 px-3 py-1 mx-auto my-0"
                >
                    Next question
                </button>
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
                        <div className="rounded px-3 py-1 mx-auto my-0 text-green-600">
                            Correct
                        </div>
                    ) : (
                        <div className="rounded px-3 py-1 mx-auto my-0 text-red-600">
                            Incorrect
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Course;
