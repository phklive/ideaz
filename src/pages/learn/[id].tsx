import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Course, courses } from "./placeholder";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";

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
      <div className="flex flex-col justify-center items-center h-80 mt-32 mb-16 gap-2">
        <h1 className="text-5xl">{course.name}</h1>
        <Image className="flying" src="/book.png" width={226} height={226} />
        <h2 className="text-xl">{course.description}</h2>
        <a href={course.docURL} className="flex flex-row">
          Documentation <AiOutlineLink />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-12 justify-start align-center mb-8">
        {course.questions.map((question, i) => (
          <div key={i} className="flex flex-col course p-4 rounded shadow-xl">
            <h3 className="mb-2">{question.question}</h3>
            {question.answers.concat(question.wrongAnswers).map((answer, j) => (
              <div key={j}>
                <input
                  className="mr-2"
                  type="checkbox"
                  name={i.toString()}
                  id={j.toString()}
                />
                <label htmlFor={j.toString()}>{answer}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          onClick={() => checkAnswers()}
          className="rounded bg-gray-50 px-3 py-1 mx-auto my-0"
        >
          Submit
        </button>

        {valid && valid ? (
          <div className="rounded px-3 py-1 mx-auto my-0 text-green-600">
            Correct
          </div>
        ) : (
          <div className="rounded px-3 py-1 mx-auto my-0 text-red-600">
            Incorrect
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
