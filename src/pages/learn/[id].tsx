import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Course, courses } from "./placeholder";

const Course = () => {
    const [course, setCourse] = useState<Course>();
    const [valid, setValid] = useState<boolean>();
    const router = useRouter();

    const checkAnswers = () => {
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
            <h1>{course.name}</h1>
            <h2>{course.description}</h2>
            <a href={course.docURL}>Documentation</a>
            <div>
                {course.questions.map((question, i) => (
                    <div key={i}>
                        <h3>{question.question}</h3>
                        {question.answers
                            .concat(question.wrongAnswers)
                            .map((answer, j) => (
                                <div key={j}>
                                    <input
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
            </div>
            <button onClick={() => checkAnswers()}>Submit</button>
            {valid && valid ? "Correct" : "Incorrect"}
        </div>
    );
};

export default Course;
