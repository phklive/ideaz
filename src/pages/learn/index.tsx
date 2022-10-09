import Link from "next/link";
import React from "react";
import LearnHeader from "../../components/LearnHeader";
import { courses } from "./placeholder";

export default function Learn() {
  return (
    <>
      <LearnHeader />
      <div id="courses">
        <div className="flex flex-col gap-6 mb-24">
          <h1 className="text-6xl ">Select a Course</h1>
          <h2 className="text-4xl text-white-500">
            Select a course to make quizzes out of it
          </h2>
        </div>
        <div className="grid gap-16">
          {courses.map((course) => (
            <div className="rounded course">
              <Link href={`/learn/${course.id - 1}`} key={course.id}>
                <div className="grid grid-cols-3 items-center text-center px-10 py-14 rounded cursor-pointer">
                  <h3 className="text-2xl">{course.name}</h3>
                  <p>{course.description}</p>
                  <div>
                    {course.tags.map((tags) => (
                      <span
                        className="py-1 px-2 m-2 rounded bg-slate-300"
                        key={tags}
                      >
                        {tags.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
